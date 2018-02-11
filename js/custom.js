//Typed intro text
var myQuotes =  new Array();

myQuotes.push("Hey there!");
myQuotes.push("This is Javi, It's Nice To Meet You!");
myQuotes.push("You can Take a Glance at my Work if you Like :)");
myQuotes.push("And don't Hesitate to Contact Me!");

var typed = new Typed("#typing-heading", {
    strings: myQuotes,
    typeSpeed: 60,
    backSpeed: 20,
    backDelay: 5000,
    startDelay: 200,
    shuffle: false,
    loop: false,
    loopCount: false,
    showCursor: true,
    autoInsertCss: true,
    cursorChar: "|"
});