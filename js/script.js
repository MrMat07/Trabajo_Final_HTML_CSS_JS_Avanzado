// DOM elements
const modeButton = document.querySelector('#mode');
const body = document.querySelector('body');

// Utility functions
const clickMode=(e)=>{
    if(body.className=='bodyLight'){
        e.textContent=`Light`;
        e.classList.replace('lightButton','darkButton');
        body.classList.replace('bodyLight','bodyDark');
        localStorage.setItem('mode','dark');
    }
    else{
        e.textContent=`Dark`;
        e.classList.replace('darkButton','lightButton');
        body.classList.replace('bodyDark','bodyLight');
        localStorage.setItem('mode','light');
    }
};

const inicio =()=>{
    let mode = localStorage.getItem('mode');

    if(mode=='light'){
        modeButton.textContent=`Dark`;
        modeButton.classList.toggle('lightButton');
        body.classList.toggle('bodyLight');
    }
    else{
        modeButton.textContent=`Light`;
        modeButton.classList.toggle('darkButton');
        body.classList.toggle('bodyDark');
    }
}

// Execute Fuctions
inicio()