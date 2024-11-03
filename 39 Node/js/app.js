//1.Navigation between nodes

// parentNode - nodeName
let title = document.getElementById("title");
alert(title.parentNode.nodeName);

// childNodes[0] => فقط المان های اصلی را نمایش میدهد و نه اسپیس و اینا
// firstChild - lastChild
let con = document.getElementById("con");
alert(con.firstChild.innerHTML);
alert(con.childNodes[0].innerHTML);


// nextSibling - previousSibling => برادر ها
let myTxt = document.getElementById("myTxt");
alert(myTxt.nextSibling.innerHTML);
alert(myTxt.previousSibling.innerHTML);

//documen
alert(document.body.innerHTML);
alert(document.documentElement.innerHTML); //سند html

//nodeValue
alert(title.innerHTML);
alert(title.firstChild.nodeValue);
alert(title.childNodes[0].nodeValue);

//2.Nodes

//createElement()
let para = document.createElement("p");
let txt = document.createTextNode("I AM A TEXT NODE");
para.appendChild(txt);
con.appendChild(para);

//insertBefore()
con.insertBefore(para, con.childNodes[0]);

//remove() => در مرورگر های قدیمی کار نمیکنه
con.firstChild.remove();

//removeChild()
con.removeChild(con.firstChild);

//replaceChild()
con.replaceChild(para, con.childNodes[1]);
