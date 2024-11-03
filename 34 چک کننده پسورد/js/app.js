//Password Checker

let password = "admin1234";
let guess; //=> undefined
let counter = 0;
let error = true;

while (guess != password && error == true) {
  if (counter < 3) {
    guess = prompt("What is the password ?");
    counter++;
  } else {
    alert("you can login after 2 hours");
    error = false;
  }
}
