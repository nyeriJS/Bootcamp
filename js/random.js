var quotes = new Array();
quotes[0] = "Talk is cheap, show me the code";
quotes[1] = "Action is the real measure of intelligence";
quotes[2] = "Everyday is Christmas";
quotes[3] = "Keep calm and code on";

function writeRandomQuote(){
    //Use random number
    var rand = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerHTML = (quotes[rand]);
}
writeRandomQuote();
var timer = setInterval('writeRandomQuote()' , 3000);