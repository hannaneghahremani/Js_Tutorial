//OOP = Object Oriented Programming

let myArray = ["Amir" , 50 , true , ["Apples" , "Oranges",[1,6,8]],{
    name : "Amir",
    occupation : "programmer",
    fruits : []
}];

document.write(myArray[4].occupation)

var movie = {
  title : "The Social Network",
  releaseDate : 2010,
  duration : 2.0,
  actor : [{
      name : "Jessie Eisenberg",
      birthday : "October 5,1983",
      inhabit : "New York , New York"
  },{
      name : "Roonie Mara",
      birthday : "April 7,1985",
      inhabit : "Bedford , New York"
  }]
}
document.write(movie.actor[0].birthday);
