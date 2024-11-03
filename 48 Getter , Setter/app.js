const demo = document.getElementById("demo");

class className1 {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }

  set setName(x) {
    this.name = x;
  }
  get getName() {
    return this.name.toUpperCase();
  }

  set setRol(y) {
    this.role = y;
  }

  get getName() {
    return this.role.toUpperCase;
  }
}

let person1 = new className1("Amir", "programmer");
let person2 = new className1("Mohammad", "designer");

person1.setName = "hosein";
demo.innerHTML = person1.getName;

person1.setName = "police";
document.write(person1.getName);
