var quotes = new Array();
quotes[0] = "Talk is cheap, show me the code ~ Linus Torvalds";
quotes[1] = "If at first you don’t succeed; call it version 1.0";
quotes[2] = "If debugging is the process of removing software bugs, then programming must be the process of putting them in ~ Edsger Dijkstra";
quotes[3] = "Any fool can use a computer.  Many do ~ Ted Nelson";
quotes[4] = "Google + 'Ctrl+C' + 'Ctrl+V' = Homework Done";
quotes[5] = "Algorithm:- Word used by programmers when they don't want to explain what they did";

function writeRandomQuote(){
    //Use random number
    var rand = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerHTML = (quotes[rand]);
}
writeRandomQuote();
var timer = setInterval('writeRandomQuote()' , 3000);