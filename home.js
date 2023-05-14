function finance() {
    var finance = document.getElementById("finance");
    var code = document.getElementById("code");
    var social = document.getElementById("social");
    var sponsors = document.getElementById("sponsors");
    var connect = document.getElementById("connect");
    var video = document.getElementById("video");
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
    video.style.display = "none";
    socialMediaHeaders.style.display = "none";
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
function code() {
    var finance = document.getElementById("finance");
    var code = document.getElementById("code");
    var social = document.getElementById("social");
    var sponsors = document.getElementById("sponsors");
    var connect = document.getElementById("connect");
    var video = document.getElementById("video");
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
    video.style.display = "none";
    socialMediaHeaders.style.display = "none";
}
function sponsors() {
    var finance = document.getElementById("finance");
    var code = document.getElementById("code");
    var social = document.getElementById("social");
    var sponsors = document.getElementById("sponsors");
    var connect = document.getElementById("connect");
    var video = document.getElementById("video");
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
    video.style.display = "none";
    socialMediaHeaders.style.display = "none";
}
function WJ() {
    var WJ = document.getElementById("WJ-article"); 
    var fetch = document.getElementById("fetch-article");
    var wjBody = document.getElementById("wj");

    if(WJ.style.display === "block") {
        WJ.style.display = "none";
        // wjBody.style.border = "none";
    }
    else 
    {
        WJ.style.display = "block";
        fetch.style.display = "none";
        // wjBody.style.border = "dashed white 2px";
    }
}
function fetch() {
    var WJ = document.getElementById("WJ-article"); 
    var fetch = document.getElementById("fetch-article");
    var fetchBody = document.getElementById("fetch");

    if(fetch.style.display === "block") {
        fetch.style.display = "none";
       // fetchBody.style.border = "none";
    }
    else 
    {
        fetch.style.display = "block";
        WJ.style.display = "none";
       // fetchBody.style.border = "dashed white 2px";
    } 
}
function connect() {
    var finance = document.getElementById("finance");
    var code = document.getElementById("code");
    var social = document.getElementById("social");
    var sponsors = document.getElementById("sponsors");
    var connect = document.getElementById("connect");
    var video = document.getElementById("video");
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
    video.style.display = "none"; 
    socialMediaHeaders.style.display = "none";
}
function social() {
    var finance = document.getElementById("finance");
    var code = document.getElementById("code");
    var social = document.getElementById("social");
    var sponsors = document.getElementById("sponsors");
    var connect = document.getElementById("connect");
    var video = document.getElementById("video");
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
    video.style.display = "none"; 
    socialMediaHeaders.style.display = "none";
}
function video() {
    var finance = document.getElementById("finance");
    var code = document.getElementById("code");
    var social = document.getElementById("social");
    var sponsors = document.getElementById("sponsors");
    var connect = document.getElementById("connect");
    var video = document.getElementById("video");
    var socialMediaHeaders = document.getElementById("social-media-headers");

    var block = document.getElementById("block");
    var block2 = document.getElementById("block2");
    var block3 = document.getElementById("block3");
    var block4 = document.getElementById("block4");

    block.style.backgroundColor = "darkgrey";
    block2.style.backgroundColor = "darkgrey";
    block3.style.backgroundColor = "darkgrey";
    block4.style.backgroundColor = "darkgrey";

    finance.style.display = "none";
    connect.style.display = "none";
    code.style.display = "none";
    social.style.display = "none";
    sponsors.style.display = "none";
    video.style.display = "block";
    socialMediaHeaders.style.display = "none"; 
}
