//data types

let str = "Amir";
let number = 84;
let gpa = 65.3;
let bool = true;
let myVar1 = null; //no value at all
let myVar2 = undefined; //no value yet

//document.write()

document.write("<h2>This is by JS</h2>");
document.write("<hr>");

//string

var phrase = "Strings are cool";
alert(phrase);
alert(phrase.length); //تعداد کاراکتر
alert(phrase.toUpperCase()); //حروف بزرگ
alert(phrase.toLocaleLowerCase()); //حروف کوچک
alert(phrase.charAt(0)); //حرف صفرم
alert(phrase.indexOf("o")); //اولین o
alert(phrase.lastIndexOf("z")); //اخرین z ===> موجود نباشد -1
alert(phrase.substring(2, 9)); //from 2 to 8
alert(phrase.endsWith("d")); //false //پایان با
alert(phrase.endsWith("cool")); //true
alert(phrase.includes("cool")); //true //ایا داره
alert(phrase.includes("z")); //false
