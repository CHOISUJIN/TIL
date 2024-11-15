# Array.slice()

Array.slice() 메서드는 배열의 일부분 또는 부분 배열을 반환한다. 

``` javascript
Array.Slice(start, end)
```

- start     :  시작점
- end      :  종료점, 생략가능(생략하면 배열의 끝을 종료점으로 지정함)



``` javascript
var num = [1,2,3,4,5,6,7,8,9];

num.slice(0,5);		// [1, 2, 3, 4, 5]
num.slice(3);		// [4, 5, 6, 7, 8, 9]

```

