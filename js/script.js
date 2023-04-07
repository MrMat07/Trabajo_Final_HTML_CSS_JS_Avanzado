// DOM elements
const video = document.querySelector("video");
const timer = document.querySelector("#timer");
const timerVideo = document.querySelector("#timerVideo");
const playButton = document.querySelector("#play");
const play = playButton.querySelector("img");
const stopButton = document.querySelector("#stop");
const stop = stopButton.querySelector("img");
const barraProgreso = document.querySelector(".barraProgreso");


// Utility functions
const playPause=()=>{
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
    cambiarIconoPlayPausa();
    // setDuracionVideo();
}

const cambiarIconoPlayPausa=()=>{
    if(video.paused){
        play.setAttribute("src","../assets/img/play.svg");
    }else{
        play.setAttribute("src","../assets/img/pausa.svg");
    }
}

const stopVideo=()=>{
    video.pause();
    video.currentTime=0;
    cambiarIconoPlayPausa();
    barraProgreso.value=video.currentTime;
}

const setProgreso=(e)=>{
    video.currentTime = (e.value * video.duration) / 100;
}

const setProgresoVideo=()=>{
    barraProgreso.value = (video.currentTime / video.duration) * 100;

    let minutos = Math.floor(video.currentTime / 60);
    let segundos = Math.floor(video.currentTime % 60);

    if(minutos < 10){
        minutos = `0${minutos}`;
    }
    
    if(segundos < 10){
        segundos=`0${segundos}`;
    }

    timer.textContent = `${minutos}:${segundos}`;

    if(video.ended){
        stopVideo();
    }
}

const setDuracionVideo=()=>{
    let minutosVideo = Math.floor(video.duration / 60);
    let segundosVideo = Math.floor(video.duration % 60);

    if(minutosVideo < 10){
        minutosVideo = `0${minutosVideo}`;
    }
    
    if(segundosVideo < 10){
        segundosVideo=`0${segundosVideo}`;
    }
    timerVideo.textContent = `${minutosVideo}:${segundosVideo}`;
}

// Execute Fuctions
setTimeout(setDuracionVideo(),2000);