document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('h2>.robinhood-selector').addEventListener('click', function() {
        document.querySelector('.finance>.finance-article').classList.toggle('show');
        document.querySelector('.robinhood-selector span').classList.toggle('rotate');
    });
});
function finance() {
    var finance = document.getElementById("finance");
    var code = document.getElementById("code");
    var social = document.getElementById("social");
    var sponsors = document.getElementById("sponsors");
    var connect = document.getElementById("connect");
    var socialMediaHeaders = document.getElementById("social-media-headers");

    var block = document.getElementById("block");
    var block2 = document.getElementById("block2");
    var block3 = document.getElementById("block3");
    var block4 = document.getElementById("block4");

    block.style.backgroundColor = "green";
    block2.style.backgroundColor = "green";
    block3.style.backgroundColor = "green";
    block4.style.backgroundColor = "green";

    connect.style.display = "none";
    finance.style.display = "block";
    code.style.display = "none";
    social.style.display = "none";
    sponsors.style.display = "none";
    socialMediaHeaders.style.display = "none";
}
function robinhood() {
    var robinhood = document.getElementById("robinhood-article");
    var webull = document.getElementById("webull-article");
    var coinbase = document.getElementById("coinbase-article");

    var spanArrow = document.getElementById("robinhood-selector");
    var webullArrow = document.getElementById("webull-selector");
    var coinbaseArrow = document.getElementById("coinbase-selector");

    if(robinhood.style.display === "none") {
        robinhood.style.display = "block";
        webull.style.display = "none";
        coinbase.style.display = "none";

        spanArrow.style.color = "red";
        spanArrow.style.transform = "rotate(90deg)";
        webullArrow.style.transform = "rotate(360deg)";
        coinbaseArrow.style.transform = "rotate(360deg)";
    }
    else 
    {
        spanArrow.style.transform = "rotate(360deg)";
        spanArrow.style.color = "black";
        robinhood.style.display = "none";
    }
}
function webull() {
    var robinhood = document.getElementById("robinhood-article"); 
    var webull = document.getElementById("webull-article");
    var coinbase = document.getElementById("coinbase-article");

    var spanArrow = document.getElementById("webull-selector");
    var robinhoodArrow = document.getElementById("robinhood-selector");
    var coinbaseArrow = document.getElementById("coinbase-selector");

    if(webull.style.display === "none") {
        webull.style.display = "block";
        robinhood.style.display = "none";
        coinbase.style.display = "none";

        spanArrow.style.color = "red";
        spanArrow.style.transform = "rotate(90deg)";
        robinhoodArrow.style.transform = "rotate(360deg)";
        coinbaseArrow.style.transform = "rotate(360deg)";
    }
    else 
    {
        spanArrow.style.transform = "rotate(360deg)";
        spanArrow.style.color = "black";
        webull.style.display = "none";
    }
}
function coinbase() {
    var robinhood = document.getElementById("robinhood-article"); 
    var webull = document.getElementById("webull-article");
    var coinbase = document.getElementById("coinbase-article");

    var spanArrow = document.getElementById("coinbase-selector");
    var webullArrow = document.getElementById("webull-selector");
    var robinhoodArrow = document.getElementById("robinhood-selector");

    if(coinbase.style.display === "none") {
        coinbase.style.display = "block";
        robinhood.style.display = "none";
        webull.style.display = "none";

        spanArrow.style.color = "red";
        spanArrow.style.transform = "rotate(90deg)";
        webullArrow.style.transform = "rotate(360deg)";
        robinhoodArrow.style.transform = "rotate(360deg)";
    }
    else 
    {
        spanArrow.style.transform = "rotate(360deg)";
        spanArrow.style.color = "black";
        coinbase.style.display = "none";

    }
}
function code() {
    var finance = document.getElementById("finance");
    var code = document.getElementById("code");
    var social = document.getElementById("social");
    var sponsors = document.getElementById("sponsors");
    var connect = document.getElementById("connect");
    var socialMediaHeaders = document.getElementById("social-media-headers");


    var block = document.getElementById("block");
    var block2 = document.getElementById("block2");
    var block3 = document.getElementById("block3");
    var block4 = document.getElementById("block4");

    block.style.backgroundColor = "purple";
    block2.style.backgroundColor = "purple";
    block3.style.backgroundColor = "purple";
    block4.style.backgroundColor = "purple";

    connect.style.display = "none";
    finance.style.display = "none";
    code.style.display = "block";
    social.style.display = "none";
    sponsors.style.display = "none";
    socialMediaHeaders.style.display = "none";
}
function sponsors() {
    var finance = document.getElementById("finance");
    var code = document.getElementById("code");
    var social = document.getElementById("social");
    var sponsors = document.getElementById("sponsors");
    var connect = document.getElementById("connect");
    var socialMediaHeaders = document.getElementById("social-media-headers");

    var block = document.getElementById("block");
    var block2 = document.getElementById("block2");
    var block3 = document.getElementById("block3");
    var block4 = document.getElementById("block4");

    block.style.backgroundColor = "yellow";
    block2.style.backgroundColor = "yellow";
    block3.style.backgroundColor = "yellow";
    block4.style.backgroundColor = "yellow";

    connect.style.display = "none";
    finance.style.display = "none";
    code.style.display = "none";
    social.style.display = "none";
    sponsors.style.display = "block";
    socialMediaHeaders.style.display = "none";
}
function connect() {
    var finance = document.getElementById("finance");
    var code = document.getElementById("code");
    var social = document.getElementById("social");
    var sponsors = document.getElementById("sponsors");
    var connect = document.getElementById("connect");
    var socialMediaHeaders = document.getElementById("social-media-headers");

    var block = document.getElementById("block");
    var block2 = document.getElementById("block2");
    var block3 = document.getElementById("block3");
    var block4 = document.getElementById("block4");

    block.style.backgroundColor = "white";
    block2.style.backgroundColor = "white";
    block3.style.backgroundColor = "white";
    block4.style.backgroundColor = "white";


    finance.style.display = "none";
    connect.style.display = "block";
    code.style.display = "none";
    social.style.display = "none";
    sponsors.style.display = "none";
    socialMediaHeaders.style.display = "none";
}
function social() {
    var finance = document.getElementById("finance");
    var code = document.getElementById("code");
    var social = document.getElementById("social");
    var sponsors = document.getElementById("sponsors");
    var connect = document.getElementById("connect");
    var socialMediaHeaders = document.getElementById("social-media-headers");

    var block = document.getElementById("block");
    var block2 = document.getElementById("block2");
    var block3 = document.getElementById("block3");
    var block4 = document.getElementById("block4");

    block.style.backgroundColor = "rgb(174, 95, 174)";
    block2.style.backgroundColor = "rgb(174, 95, 174)";
    block3.style.backgroundColor = "rgb(174, 95, 174)";
    block4.style.backgroundColor = "rgb(174, 95, 174)";

    finance.style.display = "none";
    connect.style.display = "none";
    code.style.display = "none";
    social.style.display = "block";
    sponsors.style.display = "none";
    socialMediaHeaders.style.display = "none";
}
