// function move() {
      //   var elem = document.getElementById("myBar");   
      //   var width = 1;
      //   var id = setInterval(frame, 10);
      //   function frame() {
      //     if (width >= 100) {
      //       clearInterval(id);
      //     } else {
      //       width++; 
      //       elem.style.width = width + '%'; 
      //     }
      //   }
      // }
      var barset = 5;

      async function applybar() {
        var elem = document.getElementById("myBar");
        var textvar = document.getElementById("moodexplain");
        
        if (barset == 0) {
          elem.style.width = "2%";
          textvar.style.opacity = "0";
          // textvar.innerText = "Very depressed";
          setTimeout(function() {
            textvar.innerText = "Very depressed";
            textvar.style.opacity = "1";
          }, 200);
          // textvar.style.opacity = "1";

        }

        if (barset == 1) {
          elem.style.width = "10%";
          if (textvar.innerText == "Depressed") {
            textvar.innerText = "Depressed";
          }
          else{
            textvar.style.opacity = "0";
          setTimeout(function() {
            textvar.innerText = "Depressed";
            textvar.style.opacity = "1";
          }, 200);
          }
          
          
        }

        if (barset == 2) {
          elem.style.width = "20%";
          // textvar.style.opacity = "0";
          // setTimeout(function() {
          //   textvar.innerText = "Depressed";
          //   textvar.style.opacity = "1";
          // }, 200);
          if (textvar.innerText == "Depressed") {
            textvar.innerText = "Depressed";
          }
          else{
            textvar.style.opacity = "0";
          setTimeout(function() {
            textvar.innerText = "Depressed";
            textvar.style.opacity = "1";
          }, 200);
          }
          
        }

        if (barset == 3) {
          elem.style.width = "30%";
          if (textvar.innerText == "Sad") {
            textvar.innerText = "Sad";
          }
          else{
            textvar.style.opacity = "0";
          setTimeout(function() {
            textvar.innerText = "Sad";
            textvar.style.opacity = "1";
          }, 200);
          }
          
        }

        if (barset == 4) {
          elem.style.width = "40%";
          if (textvar.innerText == "Sad") {
            textvar.innerText = "Sad";
          }
          else{
            textvar.style.opacity = "0";
          setTimeout(function() {
            textvar.innerText = "Sad";
            textvar.style.opacity = "1";
          }, 200);
          }
          
        }

        if (barset == 5) {
          elem.style.width = "50%";
          textvar.style.opacity = "0";
          setTimeout(function() {
            textvar.innerText = "Neutral";
            textvar.style.opacity = "1";
          }, 200);
          
        }
        
        if (barset == 6) {
          elem.style.width = "60%";
          // textvar.style.opacity = "0";
          // setTimeout(function() {
          //   textvar.innerText = "Content";
          //   textvar.style.opacity = "1";
          // }, 200);
          if (textvar.innerText == "Content") {
            textvar.innerText = "Content";
          }
          else{
            textvar.style.opacity = "0";
          setTimeout(function() {
            textvar.innerText = "Content";
            textvar.style.opacity = "1";
          }, 200);
          }
          
        }

        if (barset == 7) {
          elem.style.width = "70%";
          if (textvar.innerText == "Content") {
            textvar.innerText = "Content";
          }
          else{
            textvar.style.opacity = "0";
          setTimeout(function() {
            textvar.innerText = "Content";
            textvar.style.opacity = "1";
          }, 200);
          }
          
        }

        if (barset == 8) {
          elem.style.width = "80%";
          // textvar.style.opacity = "0";
          // setTimeout(function() {
          //   textvar.innerText = "Happy";
          //   textvar.style.opacity = "1";
          // }, 200);
          if (textvar.innerText == "Happy") {
            textvar.innerText = "Happy";
          }
          else{
            textvar.style.opacity = "0";
          setTimeout(function() {
            textvar.innerText = "Happy";
            textvar.style.opacity = "1";
          }, 200);
          }
          
        }

        if (barset == 9) {
          elem.style.width = "90%";
          if (textvar.innerText == "Happy") {
            textvar.innerText = "Happy";
          }
          else{
            textvar.style.opacity = "0";
          setTimeout(function() {
            textvar.innerText = "Happy";
            textvar.style.opacity = "1";
          }, 200);
          }
          
        }

        if (barset == 10) {
          elem.style.width = "100%";
          textvar.style.opacity = "0";
          setTimeout(function() {
            textvar.innerText = "Ecstatic";
            textvar.style.opacity = "1";
          }, 200);
          
        }
      }

      function moveleft() {
        if (barset > 0) {
          barset = barset - 1;
          applybar();
        }  

        console.log(barset);

      }

      function moveright() {
        if (barset < 11) {
          barset = barset + 1;
          applybar();
        }  

        console.log(barset);

      }