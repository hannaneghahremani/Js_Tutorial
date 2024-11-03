//sync code example

function func() {
  for (let i = 0; i < 99999; i++) {
    console.log(i);
  }
}

console.log("start"); //1
func(); //2
console.log("end"); //3

console.log("start"); //1

let items = [0, 1, 2, 3, 4, 5];
items.forEach((item) => {
  console.log(item); //2
});

console.log("end"); //3

//async code example

console.log("start"); //1

setTimeout(() => {
  console.log("running"); //3
}, 5000);

console.log("end"); //2

console.log("start"); //1

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  console.log("clicked"); //3
});

console.log("end"); //2
