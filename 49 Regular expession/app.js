/*
SYNTAX
/pattern/modifier
! let myReg = /amir/i;
x.search(myReg);
*/
// let x = "I am Amir. I love programming = Javascript";
let x = "I am amir. I love programming = Javascript";
let str = "I am amir. I love\nprogramming =\n Javascript";
alert(str)
let y = x.search("amir") + "<br>";
// y += x.search(/amir/i) + "<br>";
y += x.search(/am/i) + "<br>";
y += x.search(/am/g) + "<br>";
document.write(y);

let z = x.replace(/amir/i,"Sara");
document.write(z);

let Arr = ["Amir" , "Mohsen" , "Reza"];//object(numeric key)

/*
{
    0 = "Amir",
    1 = "Mohsen",
    2 = "Reza"
}
*/
let Arr2 = new Array("Amir" , "Mohsen" , "Reza");
document.write("<br>"+typeof Arr);

let i = x.match(/am/g);
document.write("<br>"+i);
document.write("<br>"+i.length);

