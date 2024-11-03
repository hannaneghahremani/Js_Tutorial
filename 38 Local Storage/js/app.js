//localStorage - setItem() - getItem()

let textInput = document.getElementById("textInput");
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  // Object
  localStorage.name1 = textInput.value;
});
document.write(localStorage.name1);

btn.addEventListener("click", function () {
  // Function
  localStorage.setItem("name2", textInput.value);
});
document.write(localStorage.getItem("name2"));
