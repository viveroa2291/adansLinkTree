let x = document.getElementById("music");
var musicButton = document.getElementById("music-button");

// Check if the play() method returns a Promise and handle it
let playPromise = x.play();
var isPlaying;
if (playPromise !== undefined) {
  playPromise.then(_ => {
    // The media has started playing, set isPlaying to true
    isPlaying = true;
  }).catch(error => {
    // There was an error or the playback was blocked, set isPlaying to false
    isPlaying = false;
  });
} else {
  // For browsers that do not support Promise-based play() method
  isPlaying = true; // You might assume it started playing
}

// Use the isPlaying boolean as needed in your code
console.log(isPlaying); // Output: true or false based on the play() result

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