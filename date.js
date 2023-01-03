let today = new Date(); 
let dd = today.getDate();
let mm = today.getMonth() + 1;
let yy = today.getFullYear();
let days = today.getDay();

var day = document.getElementById("date");

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
day.innerText = "\nHappy " + days;
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
}
// Christmas
if(mm == 12 && dd == 25) {
    day.innerText = "Happy " + days + "\n\nMerry Christmas!";
}
// New Years Eve 
if(mm == 12 && dd == 31) {
    day.innerText = "Happy " + days + "\n\nToday is New Years Eve!";
}