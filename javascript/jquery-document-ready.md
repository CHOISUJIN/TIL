# $(document).ready() 

$(document).ready()는 브라우저가 DOM (document object model) 트리를 생성한 직후 실행된다. 

``` html
<html>
    <head>
        <script>  
        // 첫번째 스크립트
        $("#btn1").click(function () {
            alert("btn1 클릭");
        });
		
        // 두번째 스크립트
        $(document).ready(function () {
            $("#btn2").click(function () {
                alert("btn2 클릭");
            });
        });

        // 세번째 스크립트
        function writeText() {
            $("#label1").text("btn3 클릭!!!!");
        }
        </script>
    </head>
    <body>
        <input type="button" id="btn1" value="버튼1" />
        <input type="button" id="btn2" value="버튼2" />
        <input type="button" id="btn3" onclick="writeText();" value="버튼3" />
        <label id="label1"></label>
    </body>
</html>
```

