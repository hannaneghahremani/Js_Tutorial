//new Date()
//new Date(year,month,day,hours,minutes,seconds,milliseconds);
//new Date(milliseconds) -> after 1970-01-01
//new Date(date string) -> March 21, 2012

setInterval(() => {
  let demo = document.getElementById("demo");

  demo.innerHTML = new Date().toString();
  demo.innerHTML = new Date().toUTCString();
  demo.innerHTML = new Date().toDateString();
  demo.innerHTML = new Date().toISOString();
  demo.innerHTML = Date.parse("March 21, 2012");

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  demo.innerHTML = new Date().getFullYear() + "-";
  demo.innerHTML += months[new Date().getMonth()] + "-";
  demo.innerHTML += new Date().getDate() + " ";
  demo.innerHTML += days[new Date().getDay()] + " ";
  demo.innerHTML += new Date().getHours() + ":";
  demo.innerHTML += new Date().getMinutes() + ":";
  demo.innerHTML += new Date().getSeconds() + ":";
  demo.innerHTML += new Date().getMilliseconds() + "<br>";
  demo.innerHTML += new Date().getTime() + "<br>";
  demo.innerHTML += Date.now() + "<br>";

  let d = new Date();
  d.setFullYear(2017);
  demo.innerHTML += d.getFullYear();
}, 1);
