let demo = document.getElementById("demo");
let btn = document.getElementById("btn");

//function
let hello = function (x = null, y = null, z = null) {
  return "Hello World!!";
};

//Arrow function
let hello2 = () => {
  let x;
  let y;
  let b = x + y;
  alert(b);
  return "Hello World!!";
};

//parameteres | return 1 statement
let hello3 = (fName, fName2) => "Hello " + fName + " " + fName2;

let hello4 = (val) => "Hello " + val;

//this keyword
function x() {
  demo.innerHTML += this;
}
x();
btn.addEventListener("click", x);

let ar = () => {
  demo.innerHTML += this;
};
ar();
btn.addEventListener("click", ar);

// demo.innerHTML = hello("hana");
