# 자바스크립트 파라미터



### Default Parameter 

es6에서는 아래와 같이 파라미터에 기본값을 설정할 수 있음.

``` javascript
function plus(x = 0, y = 0) {
    return x + y;
}

console.log(plus()); 	// 0
```





### Rest Parameter

Rest 파라미터는 `...` (spread연산자)를 사용해 정의한 것을 말한다. Rest 파라미터를 사용하면 인수를 함수 내부에서 배열로 전달받을 수 있다.   Rest 파라미터는 반드시 마지막에 와야한다!

``` javascript
function foo(param, ...rest) {
    console.log(param);
	console.log(rest);
}

foo(1,2,3,4); 		
```

``` javascript
[출력결과]
1
[2, 3, 4]
```







### Spread 연산자

Spread 연산자 `...`는 배열이나 이터러블을 개별 요소로 분리한다.

``` javascript
console.log(...[1,2,3,4,5]); 	// 1 2 3 4 5
console.log(...'CHOISUJIN');	// C H O I S U J I N
```

