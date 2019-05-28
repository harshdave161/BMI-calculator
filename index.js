
     var b = prompt("please enter your name ");
 document.write("<h3> hope you got your Ans " + b + "</h3>");

 function getbmivalue() {
     var weight = document.getElementById('weight').value;
     var height = document.getElementById('height').value;
     console.log(weight);
     console.log(height);
     height = height * 12;
     height = height * 0.025;
     var newbmivalue = weight / Math.pow(height, 2);
     newbmivalue = Math.round(newbmivalue);

     document.getElementById('Bmivalue').value = newbmivalue;
 }