        <script>
        var cookiePerList = [];
        var cookieList =[];


       $(document).ready(function() {
           {% for cookie in site.data.cookies2 %}
              cookiePerList[{{cookie.nameForJs}}] = {{cookie.per1}};
           {% endfor %}
           {% for cookie in site.data.cookies3 %}
              cookieList[{{cookie.nameForJs}}] = "x";
           {% endfor %}
        });


        function bbob(){
            var docDivBbob = document.getElementById("divBbob");
            var docCookie;
            //뽑기창 초기화
            docDivBbob.innerHTML ='';
            for(x = 0 ; x < 10 ; x++){
                var pickItem = getRandWeight();
                console.log(pickItem);
                if(pickItem.includes( '영혼석' )){
                    var pickCookie = pickItem.substring(0,pickItem.length-4);
                    var plus = Math.floor(Math.random() * 3 + 1);
                    var docCookie = document.getElementById(pickCookie);
                }else{
                    var docCookie = document.getElementById(pickItem);
                    var plus=20;
                }
                docCookie.innerHTML = Number(docCookie.innerHTML)+plus;
                docDivBbob.appendChild(docCookie);
            }
        }


        function getRandRange(min,max){
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function calStar(){

        }

        function getRandWeight(){
            var pickVal = Number.MAX_VALUE;
             var pickItem = null;
              for(var item in cookiePerList){
                var tmpVal = -Math.log(Math.random()) / cookiePerList[item];
                 if(tmpVal < pickVal){
                  pickVal = tmpVal;
                   pickItem = item;
                        }
                     }
              return pickItem;
              }