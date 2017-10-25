$(document).ready(function() {

  //display an opening quote

$("#quote-box").html("<p class='quote'>He wrapped himself in quotations - as a beggar would enfold himself in the purple of Emperors</p>" +"<p class='source'>  Rudyard Kipling  <span class='citation'> Many Inventions </span> </p>");
$("#tag").html("Quotes");

//set a timer to automatically display a new quote after 30 seconds.
setInterval(function() {
    printQuote();
}, 30000);
});

// set a var to hold an array of quote objects to be selected from

var quotes = [

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
//viewed will hold the random quotes that have been selected
var viewed=[];


//getRandomQuote will generate a random number, push the quote object into the viewed array.

getRandomQuote = ()=>{
//vars for the random number geneerator
  let num = quotes.length;
  let max = Math.floor(num-1);
  let min = Math.ceil(0);
  let randNum = Math.floor(Math.random() * (max - 0 +1) )+ 0;

//get a quote based on the random number used as the index
   let randQuote = quotes[randNum];

//add the quote to the viewed array and take it out of the quotes array
   viewed.push(randQuote);
   quotes.splice(randNum, 1);

//first check if the quotes array has been emptied: equal to 0.
//if it is, add all the quotes back to it from the viewed array and empty the viewed array.
//return the random quote.

if(quotes.length === 0){
     quotes = viewed;
     viewed = [];
        return randQuote;
  }else{
        return randQuote;
  }
}

//display the chosen quote

printQuote = () =>{

//get the random quote by calling getRandomQuote

let randQuote = getRandomQuote();

//vars for linking to quote properties
let dispQuote = randQuote.quote;
let dispSource = randQuote.source;
let dispCite=randQuote.citation;
let dispYear=randQuote.year;
let dispBox = document.getElementById('quote-box');
let tagBox = document.getElementById('tag');
let dispTag = randQuote.tag;


//vars for getting a random color
     let cR = Math.floor((Math.random() * 256));
     let cG = Math.floor((Math.random() * 256));
     let cB = Math.floor((Math.random() * 256));

//jquery statement to set the "main" tag's randomly generated background-color
   $("main").css("background-color", "rgb(" + cR + "," + cG + "," + cB + ")");

//modify the rendered html based on what properties are populated


$("#tag").html(dispTag);

//check which properties exist to decide how to display

if(!randQuote.hasOwnProperty('citation') && !randQuote.hasOwnProperty('year')){

   dispBox.innerHTML = " <p class='quote'>" + dispQuote + "</p>" +
    "<p class='source'>" + dispSource +
    "</p>";

}else if(!randQuote.hasOwnProperty('citation') && randQuote.hasOwnProperty('year')){

    dispBox.innerHTML = "  <p class='quote'>" + dispQuote + "</p>" +
      "<p class='source'>" + dispSource +
      "<span class='year'>" + dispYear + "</span>" +
       "</p> ";

}else if(randQuote.hasOwnProperty('citation') && !randQuote.hasOwnProperty('year')){

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
