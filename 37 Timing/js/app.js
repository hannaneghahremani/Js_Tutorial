let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  // setTimeout()
  setTimeout(function () {
    alert("done");
  }, 3000);
  // setInterval() => تکرار
  setInterval(function () {
    alert("done");
  }, 3000);
});
