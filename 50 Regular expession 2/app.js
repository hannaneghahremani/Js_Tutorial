// let myReg = /amir/i;
//i - g - m
// let myReg2 = new RegExp("amir");
let myReg3 = new RegExp("amir","i")
console.log(myReg3);

let str = "I am amir lam \n 100%!";
let ex1 = myReg3.exec(str);//null

document.write(ex1 +"<br>");

let ts1 = myReg3.test(str);//true - false


document.write(ts1 + "<br>");

// let x = /amir/i;
// let x = /[amir]/g;
// let x = /[^amir]/g;
// let x = /[0-9]]/g;
// let x = /[^0-9]/g;
// let x = /\./g;
// let x = /\d/g;
// let x = /\D/g;
// let x = /\w/g;
// let x = /\W/g;
// let x = /\bam/g;
// let x = /am\b/g;
// let x = /\Bam/g;
let x = /am\B/g;



let srch = str.match(x);
document.write(srch + "<br>");



