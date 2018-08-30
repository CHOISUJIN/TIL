# call과 apply와 유사배열객체



### 1. apply() 메서드와 call() 메서드

apply()와 call() 메서드를 이용해 this를 특정 객체에 명시적으로 바인딩 시킬 수 있다.  apply()와 call() 메서드를 호출하는 주체는 함수이고  apply()와 call() 메서드로 this를 특정 객체에 바인딩할 뿐 본질적인 기능은 **함수호출**를 호출하는 것이다! 

``` javascript
// thisArg  인자 : 메서드를 호출한 함수 내부에서 사용한 this를 바인딩할 객체
// argArray 인자 : 함수를 호출할 때 넘길 인자들의 배열
function.apply(thisArg, argArray);

 
```

``` javascript
[예제코드]
// 생성자함수
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// sujin 객체
var sujin = {}; 
// rowoon 객체
var rowoon = {};

// call()와 apply() 메서드의 차이점은 인자를 넘기는 방법이다.
// call()은 각각 하나의 인자로 넘기고
// apply()는 배열의 형태로 넘긴다.
Person.apply(sujin, ['sujin', 27]);
Person.call(rowoon, 'rowoon', 34);

console.dir(sujin);
console.dir(rowoon);
```

``` javascript
[실행결과]

Object
    age: 27
    name: "sujin"
    __proto__: Object

Object
    age: 34
    name: "rowoon"
    __proto__: Object
```



### 2. 유사 배열 객체

apply()와 call() 메서드를 이용해 this를 특정 객체에 명시적으로 바인딩 시킬 수 있다고 했는데 이 메서드들의 대표적인 용도가 유사 배열 객체에서 배열 메서드를 사용하는 경우이다. 













