//Javascript Callback functions
function myShow(sth){
    document.getElementById("demo").innerHTML = sth;
}
/*
function first(){
    myShow("hello");
}

function second(){
    myShow("Goodbye")
}

second();
first()
*/
/*
function calc(num1,num2){
    let sum = num1 + num2;

    return sum;//number
}

let result = calc(5,5);

myShow(result);
*/
/*
function calc(num1 , num2)
{
    let sum = num1 + num2;
    myShow(sum);
}

calc(5,5);
*/

const btn = document.getElementById("btn");

function show(str){
    document.write(str);
}

btn.addEventListener("click", str=>{

})

function calc(num1,num2,callback){
    let sum = num1 + num2;

    callback(sum);
}

calc(5,6,show)






