var finance = document.getElementById("finance");
var code = document.getElementById("code");
var social = document.getElementById("social");
var sponsors = document.getElementById("sponsors");
var connect = document.getElementById("connect");
var video = document.getElementById("video");
var project = document.getElementById("projects");
var lense = document.getElementById("lenses");
var content = document.getElementById("content");
var movie = document.getElementById("movie"); 
var movieButton = document.getElementById("hide-movie-button");
var socialMediaHeaders = document.getElementById("social-media-headers");

var followerCount = document.getElementById('follower-count');
var description = document.getElementById("description");
var newDescription = document.getElementById("new-description");

var fetchMyRewards = document.getElementById("fetch-article"); // Added this here because I was getting a bug 

function financeBlock() {
    connect.style.display = "none";
    finance.style.display = "block";
    code.style.display = "none";
    social.style.display = "none";
    sponsors.style.display = "none";
    video.style.display = "none";
    project.style.display = "none";
    movie.style.display = "none";
    lense.style.display = "none";
    content.style.display = "none";
    followerCount.style.display = "none";
    socialMediaHeaders.style.display = "none";
    description.style.display = "none";

    newDescription.innerHTML = "Stocks, Crypto, & Payment apps";
    if(movie.style.display = "none") {
        movieButton.innerText = "Show Media";
    }
    else {
        movieButton.innerText = "Hide Media"; 
    }
}
function robinhood() {
    var robinhood = document.getElementById("robinhood-article");
    var webull = document.getElementById("webull-article");
    var coinbase = document.getElementById("coinbase-article");
    var robinhoodBody = document.getElementById("robinhood");

    if (robinhood.style.display === "block") {
        robinhood.style.display = "none";
        // robinhoodBody.style.border = "none";
    }
    else {
        robinhood.style.display = "block";
        webull.style.display = "none";
        coinbase.style.display = "none";
       // robinhoodBody.style.border = "dashed white 1px";
    }
}
function myRotate(x) {    
    x.classList.toggle("change");
}   
function webull() {
    var robinhood = document.getElementById("robinhood-article"); 
    var webull = document.getElementById("webull-article");
    var coinbase = document.getElementById("coinbase-article");
    var pi = document.getElementById("pi-article");
    var cashapp = document.getElementById("cashapp-article");
    var webullBody = document.getElementById("webull");

    if(webull.style.display === "block") {
        webull.style.display = "none";
        // webullBody.style.border = "none";
    }
    else 
    {
        webull.style.display = "block";
        robinhood.style.display = "none";
        coinbase.style.display = "none";
        pi.style.display = "none";
        cashapp.style.display = "none";
        // webullBody.style.border = "dashed white 1px";
    }
}
function coinbase() {
    var robinhood = document.getElementById("robinhood-article"); 
    var webull = document.getElementById("webull-article");
    var coinbase = document.getElementById("coinbase-article");
    var pi = document.getElementById("pi-article");
    var cashapp = document.getElementById("cashapp-article");
    var coinbaseBody = document.getElementById("coinbase");
    if(coinbase.style.display === "block") {
        coinbase.style.display = "none";
        // coinbaseBody.style.border = "none";        
    }
    else 
    {
        coinbase.style.display = "block";
        robinhood.style.display = "none";
        webull.style.display = "none";
        pi.style.display = "none";
        cashapp.style.display = "none";
        // coinbaseBody.style.border = "dashed white 1px";
    }
}
function pi() {
    var robinhood = document.getElementById("robinhood-article"); 
    var webull = document.getElementById("webull-article");
    var coinbase = document.getElementById("coinbase-article");
    var pi = document.getElementById("pi-article");
    var cashapp = document.getElementById("cashapp-article");
    var piBody = document.getElementById("pi");

    if(pi.style.display === "block") {
        pi.style.display = "none";
        // pi.style.border = "none";
    }
    else 
    {
        pi.style.display = "block";
        coinbase.style.display = "none";
        robinhood.style.display = "none";
        webull.style.display = "none";
        cashapp.style.display = "none";
       // pi.style.border = "dashed white 1px";
    } 
}
function cashapp() {
    var robinhood = document.getElementById("robinhood-article"); 
    var webull = document.getElementById("webull-article");
    var coinbase = document.getElementById("coinbase-article");
    var pi = document.getElementById("pi-article");
    var cashapp = document.getElementById("cashapp-article");
    var cashappBody = document.getElementById("cashapp");

    if(cashapp.style.display === "block") {
        cashapp.style.display = "none";
        // cashappBody.style.border = "none";
    }
    else 
    {
        pi.style.display = "none";
        coinbase.style.display = "none";
        robinhood.style.display = "none";
        webull.style.display = "none";
        cashapp.style.display = "block";
        // cashappBody.style.border = "dashed white 1px";
    }  
}
function codeBlock() {
    connect.style.display = "none";
    finance.style.display = "none";
    code.style.display = "block";
    social.style.display = "none";
    sponsors.style.display = "none";
    video.style.display = "none";
    project.style.display = "none";
    movie.style.display = "none";
    lense.style.display = "none";
    content.style.display = "none";
    followerCount.style.display = "none";
    socialMediaHeaders.style.display = "none";
    description.style.display = "none";

    newDescription.innerHTML = "My developer deck";
    if(movie.style.display = "none") {
        movieButton.innerText = "Show Media";
    }
    else {
        movieButton.innerText = "Hide Media"; 
    }
}
function sponsorsBlock() {
    connect.style.display = "none";
    finance.style.display = "none";
    code.style.display = "none";
    social.style.display = "none";
    sponsors.style.display = "block";
    video.style.display = "none";
    project.style.display = "none";
    movie.style.display = "none";
    lense.style.display = "none";
    content.style.display = "none";
    followerCount.style.display = "none";
    socialMediaHeaders.style.display = "none";
    description.style.display = "none";

    newDescription.innerHTML = "Partners & Philanthropy";
    if(movie.style.display = "none") {
        movieButton.innerText = "Show Media";
    }
    else {
        movieButton.innerText = "Hide Media"; 
    }
}
function WJ() {
    var WJ = document.getElementById("WJ-article"); 
    var fetchMyRewards = document.getElementById("fetch-article");
    var wjBody = document.getElementById("wj");

    if(WJ.style.display === "block") {
        WJ.style.display = "none";
        // wjBody.style.border = "none";
    }
    else 
    {
        WJ.style.display = "block";
        fetchMyRewards.style.display = "none";
        // wjBody.style.border = "dashed white 2px";
    }
}
function fBlock() {
    var WJ = document.getElementById("WJ-article"); 
    var fetchBody = document.getElementById("fetch");
    
    if(fetchMyRewards.style.display === "block") {
        fetchMyRewards.style.display = "none";
       // fetchBody.style.border = "none";
    }
    else 
    {
        fetchMyRewards.style.display = "block";
        WJ.style.display = "none";
       // fetchBody.style.border = "dashed white 2px";
    } 
}
function connectBlock() {
    finance.style.display = "none";
    connect.style.display = "block";
    code.style.display = "none";
    social.style.display = "none";
    sponsors.style.display = "none";
    video.style.display = "none"; 
    project.style.display = "none";
    movie.style.display = "none";
    lense.style.display = "none";
    content.style.display = "none";
    followerCount.style.display = "none";
    socialMediaHeaders.style.display = "none";

    description.style.display = "none";

    newDescription.innerHTML = "Lets Connect & Collaborate";
    if(movie.style.display = "none") {
        movieButton.innerText = "Show Media";
    }
    else {
        movieButton.innerText = "Hide Media"; 
    }
}
function socialBlock() {
    finance.style.display = "none";
    connect.style.display = "none";
    code.style.display = "none";
    social.style.display = "block";
    sponsors.style.display = "none";
    video.style.display = "none"; 
    project.style.display = "none";
    movie.style.display = "none";
    lense.style.display = "none";
    content.style.display = "none";
    followerCount.style.display = "none";
    socialMediaHeaders.style.display = "none";

    description.style.display = "none";

    newDescription.innerHTML = "My Social Media accounts";
    if(movie.style.display = "none") {
        movieButton.innerText = "Show Media";
    }
    else {
        movieButton.innerText = "Hide Media"; 
    }
}
function videoBlock() {
    finance.style.display = "none";
    connect.style.display = "none";
    code.style.display = "none";
    social.style.display = "none";
    sponsors.style.display = "none";
    video.style.display = "block";
    project.style.display = "none";
    movie.style.display = "none";
    lense.style.display = "none";
    content.style.display = "none";
    followerCount.style.display = "none";
    socialMediaHeaders.style.display = "none"; 
    description.style.display = "none";

    newDescription.innerHTML = "Content Creation";
    if(movie.style.display = "none") {
        movieButton.innerText = "Show Media";
    }
    else {
        movieButton.innerText = "Hide Media"; 
    }
}
function projects() {
    finance.style.display = "none";
    connect.style.display = "none";
    code.style.display = "none";
    social.style.display = "none";
    sponsors.style.display = "none";
    video.style.display = "none";
    project.style.display = "block";
    lense.style.display = "none";
    movie.style.display = "none";
    content.style.display = "none";
    followerCount.style.display = "none";
    socialMediaHeaders.style.display = "none";  
    description.style.display = "none";

    newDescription.innerHTML = "Personal Web Application Projects";
    if(movie.style.display = "none") {
        movieButton.innerText = "Show Media";
    }
    else {
        movieButton.innerText = "Hide Media"; 
    }
}
function lenses() {
    finance.style.display = "none";
    connect.style.display = "none";
    code.style.display = "none";
    social.style.display = "none";
    sponsors.style.display = "none";
    video.style.display = "none";
    project.style.display = "none";
    lense.style.display = "block";
    movie.style.display = "none";
    content.style.display = "none";
    followerCount.style.display = "none";
    socialMediaHeaders.style.display = "none";  
    description.style.display = "none";

    newDescription.innerHTML = "My Snapchat Lenses";
    if(movie.style.display = "none") {
        movieButton.innerText = "Show Media";
    }
    else {
        movieButton.innerText = "Hide Media"; 
    } 
}
function contents() {
    finance.style.display = "none";
    connect.style.display = "none";
    code.style.display = "none";
    social.style.display = "none";
    sponsors.style.display = "none";
    video.style.display = "none";
    project.style.display = "none";
    lense.style.display = "none";
    movie.style.display = "none";
    content.style.display = "block";
    followerCount.style.display = "none";
    socialMediaHeaders.style.display = "none";  
    description.style.display = "none";

    newDescription.innerHTML = "My Snapchat Content";
    if(movie.style.display = "none") {
        movieButton.innerText = "Show Media";
    }
    else {
        movieButton.innerText = "Hide Media"; 
    }  
}