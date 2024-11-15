# 템플릿 리터럴

ES6는 새로운 문자열 표기법인 템플릿 리터럴을 도입했다.  백틱(`) 문자를 사용해서 작성한다. 



### 특징

1. `'` 와 `"` 를 혼용해서 사용할 수 있다.

   ``` javascript
   const template = `
   <div class="myDiv">
   	<div class="subDiv"> '작은따옴표'와 "큰따옴표"를 혼용해서 사용!</div>
   	<div class="subDiv"></div>
   </div>
   `; 
   
   console.log(template);
   ```

   ``` javscript
   [출력 결과]
   
   <div class="myDiv">
   	<div class="subDiv"> '작은따옴표'와 "큰따옴표"를 혼용해서 사용!</div>
   	<div class="subDiv"></div>
   </div>
   ```





2. 템플릿 대입문 (`${expression}`)으로 변수나 표현식등을 쉽게 출력할 수 있다.

   ``` javascript
   var name = "최수진";
   var hobby = "일본어";
   
   console.log(
   `안녕하세요 저는 ${name}이라고 합니다.
   취미는 ${hobby} 입니다`);
   ```

   ``` javascript
   [출력 결과]
   
   안녕하세요 저는 최수진이라고 합니다.
   취미는 일본어 입니다
   ```





3. 이스케이프 시퀀스를 사용하지 않고 줄바꿈을 할 수있다. 

   ``` javascript
   [출력 결과]
   
   안녕!
   나는 최수진이야! 
   ```

   위의 출력 결과처럼 줄바꿈을 해서 내용을 출력하려면 기존에는 아래와 같은 방식으로 출력을 했다. 

   ```javascript
   console.log("안녕!\n난 최수진이야!");
   ```

   하지만 템플릿 리터럴을 사용하면 이스케이프 시퀀스를 사용하지않고 템플릿 내에서 개행을 해주면 된다. 

   ```javascript
   console.log(
   `안녕!
   난 최수진이야!`);
   ```

   

​       