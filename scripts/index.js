
$(document).ready(function() {
$("#quote-box").html("<p class='quote'>He wrapped himself in quotations - as a beggar would enfold himself in the purple of Emperors</p>" +"<p class='source'>  Rudyard Kipling  <span class='citation'> Many Inventions </span> </p>");
$("#tag").html("Quotes");

setInterval(function() {
    upDate();
}, 30000);
});





const quotes = [

{
quote:"Creativity is inteligence having fun.",
source:"Albert Einstein",
tag:"inspirational"
},


{
quote:"Imagination is more important than knowledge.",
source:"Albert Einstein",
tag:"inspirational"
},


{
quote:"It is the mark of an educated mind to be able to entertain a thought without accepting it.",
source:"Aristotle",
tag:"inspirational"
},

{
quote:"Don\'t find fault, find a remedy.",
source:"Henry Ford",
tag:"inspirational"
},

{
quote:"There is no man living that can not do more than he think\'s he can.",
source:"Henry Ford",
tag:"inspirational"
},

{
quote:"One today is worth two tomorrows.",
source:"Benjamin Franklin",
year:"1776",
tag:"inspirational"
},

{
quote:"Don\'t cry because it\'s over, smile because it happened.",
source:"Dr. Seuss",
tag:"inspirational"
},


{
quote:"Be yourself; everyone else is already taken.",
source:"Oscar Wilde",
citation:"By Oscar Wilde"  ,
tag:"humor"
},

{
quote:"Be careful about reading health books. You may die of a misprint.",
source:"Mark Twain",
tag:"humor"
},


{
quote:"Fourscore and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty and dedicated to the proposition that all men are created equal.",
source:"Abraham Lincoln",
citation:"Lincoln\'s Gettysburg Address",
year:"1863",
tag:"political"
},

{
quote:"I wonder if illiterate people get the full effect of alphabet soup?",
source:"Jerry Seinfeld",
tag:"humor"
},

{
quote:"Does the deer have a little doe? Coitnly, two bucks!",
source:"The three stooges",
citation:"from Hoi Polloi",
year:"1935",
tag:"humor"
},

{
quote:"An appeaser is one who feeds a crocodile, hoping it will eat him last.",
source:"Winston Churchill",
tag:"political"
}

];



//get a random number that has not been used and pass that to getRandomQuote to fetch a quote
//viewed will hold the random numbers that have been generated
let viewed=[];

//helper function to search the array
isInArray=(array,search)=>{
   return array.indexOf(search) >= 0;
}

//upDate will generate a random number, push it into the viewed array and then search the array
//the next time it is called to make sure not to choose the same quote twice.

upDate = ()=>{
//vars for the random number geneerator
  let num = quotes.length;
  let max = Math.floor(num-1);
  let min = Math.ceil(0);
  let randNum = Math.floor(Math.random() * (max - 0 +1) )+ 0;

//first check if the viewed array is the same length as the quotes array

if(viewed.length < num){

//Next check if the randNum is already in the array. If so, get another random number.
//otherwise, push it into the array and send the number to getRandomQuote to choose a quote.

if(isInArray(viewed,randNum)){
   upDate();

  }else{
    viewed.push(randNum);
    getRandomQuote(randNum);
  }
//if the the two arrays are the same length, clear the viewed array and call the upDate function again to start over.
}else if(viewed.length >= num){
  viewed=[];
  upDate();
}

}

//choose the quote according to the random Number
getRandomQuote = (num) => {
var randQuote = quotes[num];
printQuote(randQuote);
}

//display the chosen quote

printQuote = (randQuote) =>{



//vars for linking to quote properties
let dispQuote = randQuote.quote;
let dispSource = randQuote.source;
let dispCite=randQuote.citation;
let dispYear=randQuote.year;
let dispBox = document.getElementById('quote-box');
let tagBox = document.getElementById('tag');
let dispTag = randQuote.tag;


//vars for getting a random color
     var cR = Math.floor((Math.random() * 256));
     var cG = Math.floor((Math.random() * 256));
     var cB = Math.floor((Math.random() * 256));

//jquery statement to set the "main" tag's randomly generated background-color
   $("main").css("background-color", "rgb(" + cR + "," + cG + "," + cB + ")");

//modify the rendered html based on what properties are populated
$("#tag").html(dispTag);

if(dispCite === "" && dispYear === ""){

  dispBox.innerHTML = " <p class='quote'>" + dispQuote + "</p>" +
    "<p class='source'>" + dispSource +
   "</p>";



}else if(dispCite === "" && dispYear !==""){

    dispBox.innerHTML = "  <p class='quote'>" + dispQuote + "</p>" +
  "<p class='source'>" + dispSource +
  "<span class='year'>" + dispYear + "</span>" +
   "</p> ";

}else if(dispCite !== "" && dispYear ===""){
    dispBox.innerHTML = " <p class='quote'>" + dispQuote + "</p>" +
    "<p class='source'>" + dispSource +
    "<span class='citation'>" + dispCite + "</span>"+
     "</p>";

}else{
  dispBox.innerHTML = " <p class='quote'>" + dispQuote + "</p>" +
  "<p class='source'>" + dispSource +
  "<span class='citation'>" + dispCite + "</span>"+
    "<span class='year'>" + dispYear + "</span>" +
   "</p>";


}



}
