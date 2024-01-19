let today = new Date(); 
let dd = today.getDate();
let mm = today.getMonth() + 1;
let yy = today.getFullYear();
let days = today.getDay();

    var block = document.getElementById("block");
    var block2 = document.getElementById("block2");
    var block3 = document.getElementById("block3");
    var block4 = document.getElementById("block4");
    var star = document.getElementById("star");
    var star2 = document.getElementById("star2");
    var star3 = document.getElementById("star3");
    var star4 = document.getElementById("star4");

var day = document.getElementById("date");
var usFlag = document.getElementById("usa-flag");

usFlag.style.display = "none";


switch(days) {
    case 0: 
        days = "Sunday";
        break;
    case 1:
        days = "Monday";
        break;
    case 2: 
        days = "Tuesday";
        break;
    case 3: 
        days = "Wednesday";
        break;
    case 4: 
        days = "Thursday";
        break;
    case 5: 
        days = "Friday";
        break;
    case 6:
        days = "Saturday";
        break;
}
/*
star.style.display = "none";
star2.style.display = "none";
star3.style.display = "none";
star4.style.display = "none";
*/
day.innerText = "\nHappy " + days;

// For testing purposes 
/*
if(mm == 1 && dd == 4) {
    day.innerText = "Happy " + days;
    
    star.style.display = "block";  
    star2.style.display = "block";
    star3.style.display = "block";
    star4.style.display = "block"; 
    
}
*/

/**
 * Holiday If Statements down below.
 */
// New Year 
if(mm == 1 && dd == 1) {
    day.innerText = "Happy " + days + "\n\nHappy New Year!";
} 
// New Year's Day 
if(mm == 1 && dd == 2) {
    day.innerText = "Happy " + days + "\n\nHappy New Year's Day!";
}
// MLK Day 
if(mm == 1 && dd == 16) {
    day.innerText = "Happy " + days + "\n\nToday is Martin Luther King Jr. Day!";
}
// Washington's birthday
if(mm == 2 && dd == 20) {
    day.innerText = "Happy " + days + "\\Today is Washington's birthday.";
}
// Memorial Day
if(mm == 5 && dd == 29) {
    day.innerText = "Happy " + days + "\n\nToday is Memorial Day";
}
// Juneteenth 
if(mm == 6 && dd == 19) {
    day.innerText = "Happy " + days + "\n\nToday is Juneteenth";
}
// Fourth of July
if(mm == 7 && dd == 4) {
    day.innerText = "Happy " + days + "\n\nHappy Fourth of July!";
    usFlag.style.display = "block";
}
// Labor Day 
if(mm == 9 && dd == 4) {
    day.innerText = "Happy " + days + "\n\nHappy Labor Day!";
}
// Veterans Day 
if(mm == 11 && dd == 10) {
    day.innerText = "Happy " + days + "\n\nToday is Veterans day.";
}
// Thanksgiving 
if(mm == 11 && dd >= 22 && dd >= 28 && days == "Thursday") {
    day.innerText = "Happy " + days + "\n\nHappy Thanksgiving!";
}
// Christmas Eve
if(mm == 12 && dd == 24) {
    
    day.innerText = "Happy " + days + "\n\nMerry Christmas Eve!";
    
    block.style.backgroundColor = "white";
    block2.style.backgroundColor = "green";
    block3.style.backgroundColor = "red";
    block4.style.backgroundColor = "green";
    star.style.display = "block";
}
// Christmas
if(mm == 12 && dd == 25) {
    day.innerText = "Happy " + days + "\n\nMerry Christmas!";

    block.style.backgroundColor = "white";
    block2.style.backgroundColor = "green";
    block3.style.backgroundColor = "red";
    block4.style.backgroundColor = "green";
    star.style.display = "block"; 
}
// New Years Eve 
if(mm == 12 && dd == 31) {
    day.innerText = "Happy " + days + "\n\nToday is New Years Eve!";
}