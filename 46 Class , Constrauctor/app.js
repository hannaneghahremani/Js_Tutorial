const demo = document.getElementById("demo");
class className {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }
  bio() {
    return "I am " + this.name + " a " + this.role + "<br>";
  }
  method2(x, y) {
    alert(x + y);
  }
  method3() {}
  method4() {}
  method5() {}
}

let person1 = new className("Amir", "programmer");
let person2 = new className("Mohammad", "designer");
let person3 = new className("Sara", "painter");

/*
demo.innerHTML = "I am "+person1.name+" a "+person1.role + "<br>";
demo.innerHTML += "I am "+person2.name+" a "+person2.role + "<br>";
demo.innerHTML += "I am "+person3.name+" a "+person3.role + "<br>";
*/
demo.innerHTML = person1.bio();
demo.innerHTML += person2.bio();
demo.innerHTML += person3.bio();

person1.method2(5, 7);
