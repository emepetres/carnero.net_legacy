//Typed intro text
var myQuotes =  new Array();

myQuotes.push("It's Nice To Meet You!");
myQuotes.push("The lower you fall, the higher you'll fly.");
myQuotes.push("Where’s your will to be weird?");

var typed = new Typed("#typing-heading", {
    strings: myQuotes,
    typeSpeed: 60,
    backSpeed: 20,
    backDelay: 5000,
    startDelay: 200,
    shuffle: true,
    loop: true,
    loopCount: false,
    showCursor: true,
    autoInsertCss: true,
    cursorChar: "|"
});