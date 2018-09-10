# 자바스크립트 배열 메서드



#### Array 메소드의 동작 방법

대부분의 Array 메서드는 비슷한 방식으로 동작하는데 매개변수로 callback 함수를 넘기고 callback 함수의 인자로 전달되는 정보는 아래와 같다. 

- currentValue : 배열에서 현재 처리 중인 요소	  (첫번째인자)

- index : 배열에서 현재 처리중인 요소의 인덱스    (두번째인자)
- array : 적용되고 있는 배열                                      (세번째인자)

참조 :  https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach



#### forEach 와 map

두 메서드는 배열을 순회하며 인자로 전달한 원소의 값으로 무엇인가를 처리한다.  

아래의 예제는 `forEach` 와 `map` 을 이용해 원소의 값들을 +1 씩 증가시키는 것이다.  

``` javascript
// forEach
let data = [1,2,3,4,5];
data.forEach(x=> {console.log(x + 1)});

// map 
let data2 = [1,2,3,4,5];
data2.map(x=> {console.log(x+1)});
```

``` javascript
[출력 결과]
2
3
4
5
6

2
3
4
5
6
```

출력결과는 둘 다 동일하다. 그렇다면 `forEach` 와 `map` 메서드의 차이점은 무엇일까?  바로 return값이 있는지 없는지이다.  `forEach` 는 return 값이 없고 `map` 은 가공된 배열을 return 한다. 위 처럼 리턴값을 지정해주지 않았을 때는 원래배열의 원소 갯수만큼 undefined로 채워진 배열이 리턴된다. 





#### filter

요소들을 걸러내는 목적으로 사용된다. 

아래의 예제는 `filter` 메서드를 사용해 짝수의 값만 걸러내 새로운 배열을 리턴하는 것이다. 

``` javascript
let data = [1,2,3,4,5];
let evenNum = data.filter(x=> {return x%2 == 0 });

console.log(evenNum);		// [2, 4]
```

만약 만족하는 요소가 없다면 빈 배열이 반환된다.  

``` javascript
let data = [1,3,5,7];
let evenNum = data.filter(x=> {return x%2 == 0 });

console.log(evenNum);		// []
```





#### find

`filter` 메서드와 비슷하지만 하나의 요소만 리턴하고 리턴값이 true인 요소를 찾을 때 까지만 실행된다.  값이 모두 false 라면 undefined가 반환된다.

``` javascript
let data = [1,3,4,5,7];
let evenNum = data.find(x=> {return x%2 == 0 });

console.log(evenNum);		// 4
```





#### some 

배열 요소 중에서 하나라도 특정 조건을 만족하는지에 대해 알고 싶을 때 사용한다.  콜백 함수가 한번이라도 true값을 리턴하면 바로 메서드의 수행이 중단되고 true를 리턴한다. 

``` javascript
let data = [1,3,4,5,7];
let evenNum = data.some(x=> {return x%2 == 0 });

console.log(evenNum);		// true
```





#### every

배열의 모든 요소가 특정 조건을 만족하는지 알고 싶을 때 사용한다. `some` 메서드와 반대로 콜백 함수가 false값을 한번이라도 리턴하면 바로 메서드의 수행이 중단되고 false를 리턴한다. 

``` javascript
let data = [1,3,4,5,7];
let evenNum = data.every(x=> {return x%2 == 0 });

console.log(evenNum);		// false
```





#### reduce

`reduce` 메서드는 콜백함수의 인자는 다른 메서드들과 다른 인자를 갖는다. 

``` javascript
arr.reduce(function(previousValue, currentValue, index, arry) {}, initialValue)
```

- previousValue 	: 이전 콜백 함수에서 리턴한 값
- currentValue         : 현재 배열 요소의 값
- index                      : 배열에서 현재 처리중인 요소의 인덱스 
- array                       : 적용되고 있는 배열              
- initialValue             : 첫 콜백함수의 previousValue (첫번째인자)에 사용되는 값. 



``` javascript
let data = [1,2,3,4,5];

let result = data.reduce(function(previousValue, currentValue, index, arry){
    
    // 이전 콜백 함수의 리턴 값 + 현재 배열 요소 값 
    return previousValue + currentValue;
    
}, 0);

console.log(result);  	// 15
```





