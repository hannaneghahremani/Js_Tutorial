//new request
const xhttp = new XMLHttpRequest();
xhttp.onload = ()=>{
    //when file is loaded
    const demo = document.getElementById("demo");
    const myObj = JSON.parse(this.responseText);
    demo.innerHTML = myObj.name;
}
xhttp.open("GET","data.json");
xhttp.send();