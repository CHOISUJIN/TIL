# 객체 리터럴 프로퍼티 기능의 확장



### 프로퍼티 축약 표현

es6에서 프로퍼티 값으로 변수를 사용할 경우 축약해서 표현할 수 있다. 프로퍼티의 이름은 변수의 이름으로 생성된다. 

``` javascript
// es5
var a = 1, b = 2; 
var obj = {
    a:a,
    b:b
};

console.log(obj);		// {a: 1, b: 2}

// es6
let a = 1, b = 2; 
let obj = {a, b};

console.log(obj)		// {a: 1, b: 2}
```

