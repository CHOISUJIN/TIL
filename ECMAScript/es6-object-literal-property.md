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





### 프로퍼티명 동적 생성

ES5에서는 프로퍼티명에 기호 또는 변수를 활용하기 위해서는 객체리터럴로 빈 객체를 먼저 생성후 대괄호표기법[]을 이용해야했다.  

``` javascript
// ES5 

var i = 0;
var index = "index_";


var obj = {};

obj[index + ++i] = i;
obj[index + ++i] = i;
obj[index + ++i] = i;

console.log(obj);		// {index_1: 1, index_2: 2, index_3: 3}
```

```javascript
// ES6
let i = 0;
const index = "index_";

var obj = {
    [index + ++i] : i,
    [index + ++i] : i,
    [index + ++i] : i
}

console.log(obj);		// {index_1: 1, index_2: 2, index_3: 3}
```





### 메서드 축약

``` javascript
// ES5
var obj = {
    name: 'Choi',
    sayHello: function() {
        console.log('Hello ' + this.name);
    }
};

obj.sayHello();
```

``` javascript
let obj = {
    name: 'Choi',
    sayHello() {
        console.log('Hello ' + this.name);
    }
};

obj.sayHello();
```





###  객체 리터럴 상속

ES5 에서 객체 리터럴을 상속하기 위해선 Object.create() 함수를 사용한다.  반면 ES6에서는 직접 객체 리터널 내부에서 `__proto__` 프로퍼티를 설정할 수 있다. 





















참고 https://poiemaweb.com/es6-arrow-function