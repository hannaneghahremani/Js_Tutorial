var questions = [
  {
    q: "What color are apples?\n(a) Red/Green\n (b) Purple\n(c) Orange",
    answer: "a",
  },
  {
    q: "What color are Bananas?\n(a) Teal\n (b) Magenta\n(c) Yellow",
    answer: "c",
  },
  {
    q: "What color are strawberries?\n(a) Yellow\n (b) Red\n(c) Blue",
    answer: "b",
  },
];

// \n = رفتن به خط بعدی

var score = 0;

for (var i = 0; i < questions.length; i++) {
  let ask = prompt(questions[i].q);
  if (ask == questions[i].answer) {
    score++;
    alert("CORRECT!");
  } else {
    alert("WRONG!");
  }
}

alert("You got " + score + " Out of" + questions.length);
