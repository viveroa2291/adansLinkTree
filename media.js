var x = document.getElementById("music");
var musicButton = document.getElementById("music-button");

if(x.play()) {
    musicButton.innerText = "Pause Audio";
}
else {
    musicButton.innerText = "Play Audio";
}

function pauseAudio() {
    if(musicButton.innerText != "Play Audio") {
        x.pause();
        musicButton.innerText = "Play Audio";  
    }
    else {
        x.play();
        musicButton.innerText = "Pause Audio";
    }
}
var movie = document.getElementById("movie"); 
var movieButton = document.getElementById("hide-movie-button");
function hidemovie() {
    if(movieButton.innerText === "Hide Media") {
        movie.style.display = "none"; 
        movieButton.innerText = "Show Media";
    }
    else {
        movie.style.display = "block"; 
        movieButton.innerText = "Hide Media";
    }
}