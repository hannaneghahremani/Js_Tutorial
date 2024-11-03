//JS is dynamic data types

var x = "Amir"; //string
x = "Mohsen"; //string
x = 17; //number
alert(x);

// "" & ''
let phrase = "I am called 'Amir' ";
let phrase2 = 'I am called "Amir" ';

//typeof()
document.write(typeof true);
document.write(typeof x);

//data conversion
let num1 = 17; //number -> Whole
let num2 = 17.036; //number -> Float - Decimal

// Number() - parseFloat() - parseInt()
let ask1 = prompt("input number1"); //string
let ask2 = prompt("input number2"); //string
alert(Number(ask1) + Number(ask2));
alert(parseInt(ask1) + parseInt(ask2));
alert(parseFloat(ask1) + parseFloat(ask2));

// toString() - String()
let num3 = 52;
num3 = num3.toString();
num3 = String(num3);

// Boolean()
let myPhrase = "false";
myPhrase = Boolean(myPhrase);
