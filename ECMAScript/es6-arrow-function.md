# 화살표 함수(Arrow Function)



### 화살표 함수 선언 방법

화살표 함수는 function 키워드 대신 `=>` 를 사용해 간략하게 함수를 선언할 수 있다.   화살표 함수는 항상 익명 함수이다. 

- 매개변수 지정 방법

``` javascript
(param1, param2, ..., paramN) => { statements }
(param1, param2, ..., paramN) =>  expression 

// 매개변수가 하나뿐인 경우 괄호는 선택사항 
x => {statements} or (x) => {statements}

// 매개변수가 여러개인 경우 괄호는 필수사항
(x, y) => {statements}

// 매개변수가 없는 경우 괄호는 필수사항
() => {statements}

```



- 함수 몸체 지정 방법

```javascript
// single line block
x => {return x+x}
x => x+x

// multi line block
x => {
    const y = 2; 
    return x + y;
}

// 객체 반환 
() => {return {a:1};}
() => ({a:1})
```







### 화살표 함수 호출 방법

``` javascript
// 함수표현식
const result = x => x + x;
console.log(result(20));		// 40

// 콜백함수로 사용
const arry = [1,3,5];
const result = arry.map(x=> x+x );

console.log(result); 			// [2,6,10]
```





### 화살표 함수의 this

자신만의 this를 생성하지 않고 자신을 포함하고 있는 상위 context의 this를 이어받는다.  























