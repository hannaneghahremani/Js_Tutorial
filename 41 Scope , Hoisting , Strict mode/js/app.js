//1.block scope
{
  let x = 3;
}
{
  const x = 4;
}
alert(x); //err

//2.function scope
alert(carName); //err

function myFunc() {
  var carName = "Volvo";
  //code here can use carName
  alert(carName); //true
}

alert(carName); //err

//3.global scope
let x = 3;
var y = 9;
const PI = 3.14;

alert(PI); //true

function alertIt() {
  alert(PI); //true
}

//2.hoisting

x = "sth"; //assignment
var x; //declaration
var y = "sth else"; //initialization

x = "some text"; //assign
let elm = document.getElementById("demo");
elm.innerHTML = x;
var x; //declare

var x = "some text"; //initialize
let elm = document.getElementById("demo");
elm.innerHTML = x + " " + y; //y=undefined
var y = "another text"; //initialize

//3.strict mode("use strict";)

x = 3.14;
alert(x);
myFunc();
alert(y);
function myFunc() {
  "use strict";
  y = "some text"; //assign
}
