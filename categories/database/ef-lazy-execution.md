# EF Core의 쿼리 지연 실행(Lazy Execution)

**지연 실행(Lazy Execution)** 은 쿼리가 즉시 실행되지 않고, 실제로 데이터를 요청할 때 실행되는 것이다. 
EF Core의 쿼리 지연 실행은 LINQ 쿼리를 기반으로 하며, 일반적으로 IQueryable로 반환되는 쿼리에서 동작한다! 

### 기본 동작 원리
EF Core에서 LINQ 쿼리는 **지연 실행(Lazy Execution)** 을 기본적으로 사용한다. 아래와 같은 상황에서는 쿼리가 즉시 실행되지 않음 

```csharp
var usersQuery = dbContext.Users.Where(u => u.IsActive); 
```
위 코드는 데이터베이스에서 실행되는 SQL 쿼리를 생성하지만, 실제 호출은 이루어지지 않고 아래의 상황에서 실제로 호출된다. 

- ToListAsync(), ToList() 등의 메서드 호출 
- First(), Single(), Count() 등의 집계 메서드 호출
- 결과를 열거할 때 (예: foreach 루프)

### 예제
지연 실행 쿼리
```csharp
var query = dbContext.Users
    .Where(u => u.IsActive)
    .OrderBy(u => u.Name); // 쿼리는 아직 실행되지 않음

var activeUsers = await query.ToListAsync(); // 이 시점에서 쿼리가 실행됨
```

즉시 실행 쿼리
```csharp
var activeUsers = await dbContext.Users
    .Where(u => u.IsActive)
    .ToListAsync(); // 즉시 쿼리 실행
```

### 장점
1. **성능 최적화:** 필요한 시점에만 데이터를 가져와 불필요한 데이터베이스 호출을 줄임

2. **유연성:** 쿼리를 실행하기 전에 추가적인 조건을 덧붙일 수 있음
    ```csharp
    var query = dbContext.Users.AsQueryable();

    if (includeInactive)
    {
        query = query.Where(u => !u.IsActive);
    }

    var result = await query.ToListAsync(); // 최종적으로 실행
    ```
3. **메모리 효율성:** 대량의 데이터를 다룰 때 모든 결과를 한 번에 메모리에 로드하지 않아도 됨


### 주의사항
1. **디버깅의 어려움:** 쿼리가 실제로 실행되는 시점을 파악하기 어려울 수 있음
2. **예기치 않은 동작:** 쿼리 실행 시점을 정확히 이해하지 못하면 예상치 못한 결과가 발생할 수 있음
3. 쿼리를 여러 번 호출하면 각 호출마다 데이터베이스에 접근하므로 성능에 영향을 미칠 수 있음
    ```csharp
    var query = dbContext.Users.Where(u => u.IsActive);

    // 각 호출마다 쿼리가 실행됨 (DB 접근 3번 발생)
    var count = query.Count(); 
    var firstUser = query.FirstOrDefault();
    var allUsers = query.ToList();
    ```
    이런 경우는 ToList()로 한번에 데이터를 가져와서 메모리에서 조작 가능 
    (단, 데이터가 큰 경우에는 필요한 데이터만 가져오도록 필터링하는 것이 중요!)
    ```csharp
    var users = dbContext.Users
    .Where(u => u.IsActive)
    .ToList(); // 데이터베이스 접근은 한 번만 발생

    var count = users.Count; // 메모리에서 계산
    var firstUser = users.FirstOrDefault(); // 메모리에서 가져옴
    ```