
              var action = "";
              var num1 = "";
               var num2 = "";
               var num3 =""; 
               var equal1 = "";
            function buttons(buttonValue) {
              num1 = buttonValue
              document.getElementById('screen').value +=num1
            }
             
            function buttonClear(params) {
                document.getElementById('screen').value ='';
            }

            function buttonActions(buttonValue,screenvalue) {
               num2 = document.getElementById('screen').value
                action = buttonValue;
                document.getElementById('screen').value ='';
            }
             function equal(screenvalue) {
                num3 = document.getElementById('screen').value
                  equal1 = num2+action+num3
                 document.getElementById('screen').value =eval(equal1);
             }
            
             function exit(params) {
                window.close()
             }

        