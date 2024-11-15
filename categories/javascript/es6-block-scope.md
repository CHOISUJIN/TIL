# let과 const

자바스크립트는 전통적으로 함수 레벨 스코프를 지원한다.  함수 레벨 스코프는 함수 내에서 선언된 변수는 함수 내에서만 유효하다. 그렇기 때문에 for문의 초기화에 사용한 변수는 for문 외부에서도 참조할 수 있는 문제가 있다.  이런 문제를 해결하기 위해 es6에서는 `let` 키워드를 제공한다.  



#### let 키워드

1. 블록 레벨 스코프를 지원한다.

   ```javascript
   // var
   var foo = 1;
   {
       var bar = 2;
   }
   
   console.log(foo);		// 1
   console.log(bar);		// 2
   
   // let
   let foo2 = 1;
   {
       let bar2 = 2;
   }
   
   console.log(foo2);		// 1
   console.log(bar2);		// Uncaught ReferenceError: bar is not defined
   ```



2. 변수의 중복 선언을 금지한다.

   `let` 키워드로 같은 변수를 선언하면 에러(SyntaxError)가 발생한다. 

   ``` javascript
   // var
   var foo = 1; 
   var foo = 2;
    
   // let
   let foo2 = 1;
   let foo2 = 2;	 // Identifier 'foo2' has already been declared
   
   ```

   

3. 변수를 선언문 이전에 참조하면 에러가 발생한다. (호이스팅)

   기존 `var` 키워드로 선언한 변수는 선언문 이전에 호출해도 에러가 발생하지 않는다. 반면 `let` 키워드로 선언한 변수는 에러가 발생하게 된다. 

   ```javascript
   // var
   console.log(foo); // undefined
   var foo;
   
   // let
   console.log(bar); // Error: Uncaught ReferenceError: bar is not defined
   let bar;
   ```

   첫번째 `var` 키워드로 선언한 변수는 선언문 이전에 호출해도 오류가 발생하지않는다. 왜냐하면 호이스팅으로 `var foo ` 부분이 위로 끌어올려져 변수가 선언되고 undefined로 초기화되기 때문이다. 그래서 변수 선언문 이전에 접근해도 오류가 발생하지 않는다.  

   그렇다면 `let` 으로 선언된 변수는 호이스팅이 일어나지 않아 오류가 발생하는 것일까? 그건 아니다.  `let` 으로 선언된 변수도 호이스팅이 일어난다. 다만 **선언과 초기화 단계가 분리되어 진행되기 때문에** 오류가 발생하는 것 이다. `let` 으로 선언된 변수의 초기화는 변수 선언문에 도달했을 때 일어나기 때문에 아직 변수를 위한 메모리 공간이 확보되어있지 않다. 그래서 변수를 참조할 수 없다. 이 변수의 선언시점부터 초기화 시점전까지의 구간을 TDZ(Temporal Dead Zone)[^1] 이라고한다.

 

4.  for문의 초기화식에 사용하면 클로저를 사용하지 않아도 된다.

   ``` javascript
   var funcs = [];
   
   for (let i = 0; i < 3; i++) {
     funcs.push(function () { console.log(i); });
   }
   
   for (var j = 0; j < 3; j++) {
     console.dir(funcs[j]);
     funcs[j]();
   }
   
   // 실행결과
   0
   1
   2
   ```

    

5.  let키워드로 전역변수를 선언해도 전역(window)객체의 프로퍼티가 아니다. 

   `var` 키워드로 선언된 전역변수는 window 객체의 프로퍼티가 된다. 하지만 `let` 으로 선언된 전역변수는 window 객체의 프로퍼티가 되지 않는다. 

   ``` javascript
   // var 
   var foo = 1; 				// 전역변수
   console.log(window.foo); 	 // 1
   
   // let
   let foo2 = 2; 				// 전역변수
   console.log(window.foo2);	 // undefined
   ```

   



#### const 키워드 

변하지 않는 값 (상수)를 위해서 사용한다. 



1.  선언과 할당이 동시에 이루어져야하고 재할당은 금지된다. 

   ``` javascript
   const FOO = 1; 
   FOO = 2;			// Assignment to constant variable.
   ```

   

2. 변수의 중복 선언을 금지한다.

   ``` javascript
   const FOO = 1; 
   const FOO = 2;   	// Identifier 'FOO' has already been declared
   ```



3.  블록 레벨 스코프를 갖는다.

   ``` javascript
   {
       const FOO = 2;
   }
   
   console.log(FOO); 	 // FOO is not defined	
   ```

   

4. 객체를 `const` 로 선언하는 경우 재할당은 불가하지만 프로퍼티의 값은 변경할 수 있다. 

   ``` javascript
   const person = {name: 'sujin', age: '27'};
   person.age = 32;
   
   console.log(person);	// {name: "sujin", age: 32}
   ```















[^1]: 일시적 사각지대