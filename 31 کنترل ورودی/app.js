// prompt() - textContent - null

let welcome = document.querySelector("h1");

let username = prompt("what is your name?");

// textContent = innerHTML
welcome.textContent = "Hello " + username;

if (username == "") {
  welcome.textContent = "Hello User";
}
if (username == " ") {
  welcome.textContent = "Hello User";
}
if (username == null) {
  welcome.textContent = "Hello User";
}
if (username == "Admin") {
  welcome.textContent = "Welcome " + "Dear Admin";
}
