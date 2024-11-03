//Advanced Variables(var-let-const)

var person = "amir";
var carName = "Volvo";
var price = 200;

var person = "Amir",carName = "Volvo", price = 200;

//2.$_

var $per_so$n_ = "Amir";


//3.var VS let(declare-assign)

var x = "hello";
var x = "hey";
x = "bye";
alert(x); //اخری

let y = 1;
let y = 2; 
y = 2;
alert(y); //err


//4.Block Scope(let,const)

alert(person);

function alertIt()
{
  alert(person);
}
alertIt();

{
  let x = 2;
  alert(x);
}

 alert(x); //err

{
  var y = 4;
   alert(y)
}

alert(y);

var x = 10;
{
  var x = 2;
}
alert(x); //اخری


let y = 10;
{
  let y = 2;
}
alert(y); //10

var z = 2;
var z = 3;

{
    let x = 2;
    let x = 3;//err
}

var x = 2;
let x = 3;//err

{
    let x = 2;
    var x = 3;//err
}

let x = 2;//true

{
    let x = 3;//true
}

{
    let x = 4;//true
}

myVar = "sth";
var myVar;
alert(myVar);

var2 = "sth2";
let var2;
alert(var2); //err


//5.const
const PI = 3.141592658888;

const PI;
PI = 3.141592658888; //err

PI = 3.14;//err
PI = PI+10;//err
PI += 10;//err

let x = 2;
alert(2*PI);

const cars  = ["Saab", "Volvo", "BMW"];

cars[0] = "Toyota";

alert(cars[0]);

cars.push("Audi");

document.write(cars);

cars = ["Saab", "Volvo", "BMW", "Audi"];//err

const car = {type: "Fiat", model:"500", color:"white"};

car.color = "red";

car.owner = "Amir";

 car = {type: "Audi", model:"1500", color:"red"};//err
 
