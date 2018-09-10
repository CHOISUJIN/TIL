# 자바스크립트 배열 메서드



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



