//JSON : Java Script Object Notation

//object
let person = { name: "Amir", age: 100, city: "Tehran" };

//return name
console.log(person.name);
console.log(person["name"]);

//change value
person.name = "Mohsen";
person["name"] = "Mohsen";
console.log(person.name);

//json
let myJson =
  '{"name":"Amir","age":100,"city":"Tehran","middleName":null,"friends":["f1","f2"],"isMale":true}'; //JSON
console.log(typeof myJson); //string

//JSON parse
let myObj = JSON.parse(myJson);
console.log(typeof myObj); //object
myObj.name = "Mohsen";
console.log(myObj["name"]);

//JSON stringify
let person2 = { name: "Amir", age: 100, city: "Tehran", middleName: null };
let myJson2 = JSON.stringify(person2);
console.log(myJson2); //json

//array
let friends = '["Mohsen","Reza"]'; //JSON
let f = JSON.parse(friends); //Array

let friends2 = ["Mohsen", "Reza"]; //Array
let f2 = JSON.stringify(friends2); //JSON
