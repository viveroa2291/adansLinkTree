var college = document.getElementsByClassName("college");
var highschool = document.getElementsByClassName("high-school");
var brand = document.getElementsByClassName("brand");
var kanye = document.getElementsByClassName("kanye");
var country = document.getElementsByClassName("country");
var other = document.getElementsByClassName("other");

var lenseBody = document.getElementById("lense-body");

function colleges() {
    showElements(college);
    hideElements(highschool);
    hideElements(brand);
    hideElements(kanye);
    hideElements(country);
    hideElements(other);
}
function highschools() {
    hideElements(college);
    showElements(highschool);
    hideElements(brand);
    hideElements(kanye);
    hideElements(country);
    hideElements(other);
}
function brands() {
    hideElements(college);
    hideElements(highschool);
    showElements(brand);
    hideElements(kanye);
    hideElements(country);
    hideElements(other);
}
function ye() {
    hideElements(college);
    hideElements(highschool);
    hideElements(brand);
    showElements(kanye);
    hideElements(country);
    hideElements(other);
}
function countries() {
    hideElements(college);
    hideElements(highschool);
    hideElements(brand);
    hideElements(kanye);
    showElements(country);
    hideElements(other);
}
function others() {
    hideElements(college);
    hideElements(highschool);
    hideElements(brand);
    hideElements(kanye);
    hideElements(country);
    showElements(other);
}
function hideElements(elements) {
    for (let i=0;i<elements.length;i++) {
        elements[i].style.display = "none";
    }
}
function showElements(elements) {
    for (let i=0;i<elements.length;i++) {
        elements[i].style.display = "block";
    }
}