let moverOk = false;
// DOM Elements

// Utility functions
// Game**************************************************************************
const moverPartes=(e)=>{
    e.dataTransfer.setData('text',e.target.outerHTML);
    moverOk=false;
};

const finMoverPartes=(e)=>{
    if(moverOk==true){
        e.target.style.display="none";
    }
}

const evitarAccionDeault=(e)=>{
    e.preventDefault();
};

const soltarParte=(e)=>{
    let img = e.dataTransfer.getData('text');

    e.target.innerHTML = img;
    moverOk=true;
};

const reiniciarJuego=()=>{
    location.reload();
};
// Game**************************************************************************



