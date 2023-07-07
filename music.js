var x = document.getElementById("music");
var musicButton = document.getElementById("music-button");
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