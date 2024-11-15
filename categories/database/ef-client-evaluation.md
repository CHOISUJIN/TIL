# EFCore의 클라이언트 평가가 이루어지는 순간

**클라이언트 평가(Client Evaluation)** 는 쿼리의 일부가 데이터베이스 서버에서 실행되지 않고 애플리케이션(클라이언트) 측에서 실행되는 것을 말한다. 데이터베이스에서 실행할 수 없는 작업(예: 특정 .NET 메서드 호출)을 쿼리 내에서 발견했을 때 발생함 ! 


1. 데이터베이스로 변환 불가능한 연산
    ```csharp
    var users = dbContext.Users
    .Where(user => user.Name.StartsWith("A") && IsCustomCondition(user))
    .ToList();

    bool IsCustomCondition(User user)
    {
        return user.Age > 18 && user.Name.Contains("Admin");
    }
    ```
    - 문제 발생: `IsCustomCondition` 메서드는 EF Core가 SQL로 변환할 수 없다. 따라서 데이터베이스에서 `user.Name.StartsWith("A")`까지는 실행되지만, `IsCustomCondition`은 클라이언트에서 평가된다. 
    - 결과: `user.Name.StartsWith("A")`에 해당하는 모든 데이터를 클라이언트로 가져와 `IsCustomCondition`을 적용한다. 데이터가 많을 경우 성능 문제가 발생할 수 있다. 

2. 데이터베이스가 지원하지 않는 C# 메서드
    ```csharp
    var users = dbContext.Users
    .Where(user => user.Name.ToLower() == "admin") // SQL 변환 가능
    .Select(user => new { user.Name, NameLength = user.Name.Length }) // SQL 변환 가능
    .OrderBy(user => CustomOrdering(user.Name)) // 클라이언트 평가 발생
    .ToList();

    int CustomOrdering(string name)
    {
        return name.Length % 2 == 0 ? 1 : 0;
    }
    ```
    - 문제 발생: `CustomOrdering` 메서드는 SQL로 변환되지 않으므로 전체 데이터가 클라이언트로 전송되고, 정렬은 클라이언트에서 수행된다. 

3. 복잡한 표현식
    ```csharp
    var users = dbContext.Users
    .Where(user => user.Name.Contains("Admin") || user.Roles.Any(role => role.Name == "Manager"))
    .ToList();
    ```
    - 문제 발생: `user.Roles.Any(...)`는 관계형 데이터베이스(SQL)에서 표현하기 어려운 식이기때문에 EF Core는 데이터베이스에서 `user.Name.Contains("Admin")`까지 처리한 후, 나머지는 클라이언트에서 평가한다. 