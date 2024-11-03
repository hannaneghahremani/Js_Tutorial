const demo = document.getElementById("demo");
class className1 {
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

class className3 extends className1 {
  constructor(name, year) {
    super(name);
    this.year = year;
  }
  bio2() {
    alert(this.bio());
  }
}

let person1 = new className1("Amir", "programmer");
let person4 = new className3("Saeed", 8);
alert(person4.bio2());
