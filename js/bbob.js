            //뽑기 시작
            for(x = 0 ; x < 10 ; x++){
                (function(x)){
                    setTimeout(function() {
                        var pickItem = getRandWeight();
                        if(pickItem.includes( '영혼석' )){
                            var pickCookie = pickItem.substring(0,pickItem.length-4);
                            var plus = Math.floor(Math.random() * 3 + 1);
                            var docCookieCount = document.getElementById(pickCookie);
                            var docCookie = document.getElementById("div"+pickCookie).cloneNode(true);
                        }else{
                            var docCookieCount = document.getElementById(pickItem);
                            var docCookie = document.getElementById("div"+pickItem).cloneNode(true);
                            var plus=20;
                        }
                        //뽑기 내역 element 그리기
                        docCookie.childNodes[1].childNodes[1].childNodes[3].childNodes[3].innerHTML=plus;
                        //전체에 보유 영혼석 추가
                        docCookieCount.innerHTML = Number(docCookieCount.innerHTML)+plus;
                        docDivBbob.appendChild(docCookie);
                        console.log(x);
                    }, 1000)
                })(x);
            }