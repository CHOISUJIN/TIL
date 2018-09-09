# $(document).ready() 

$(document).ready()는 브라우저가 DOM (document object model) 트리를 생성한 직후 실행된다. 

``` html
<html>
    <head>
        <script>  
        // 첫번째 스크립트
        $("#label1").text("Hello!!");
        
        // 두번째 스크립트
        $(document).ready(function () {
            $("#label2").text("Hello!!");
        });

        // 세번째 스크립트
        function writeText() {
            $("#label3").text("Hello!!");
        }
        </script>
    </head>
    <body>
        <input type="button" id="btn1" value="버튼" onclick="writeText()" />
        <hr />
        <p>라벨 1: <span id="label1"></span></p>
        <p>라벨 2: <span id="label2"></span></p>
        <p>라벨 3: <span id="label3"></span></p>
    </body>
</html>
```



위 예제를 보면 첫번째 스크립트는 실행되지않는다. 그 이유는 브라우저가 html 문서를 로드할때 위에서 아래로 해석하기 때문에 첫번째 스크립트가 읽히는 시점에 아직 label1의 태그가 그려져 있지않아 label1에 Hello!! 가 찍히지않는 것이다.  그래서 DOM 트리가 생성된 이후에 코드를 실행시키기위해 두번째 스크립트처럼 $(document).ready(function(){}) 구문안에 코드를 작성해줘야한다.  

그렇다면 세번째 스크립트는 실행이 될까 안될까? 첫번째 스크립트처럼 writeText() 함수가 읽히는 시점에는 아이디가 label3인 태그가 그려져있지 않아 실행이되지 않을 것 같다. 하지만 버튼을 클릭해보면 label3 태그안에 Hello!!가 찍힌다. 그 이유는 자바스크립트의 함수가 정의되는 시점과 실행되는 시점이 다르기때문이다.  사용자가 버튼을 클릭했을 땐(함수를 호출할 때) DOM 구성이 완료된 이후이기때문에 label3 태그안에 Hello!!가 찍히는것이다.