const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');
const speedCounter = document.getElementById('speed__counter');

let previousClickMom = null;
let currentClickMom = null;

cookie.onclick = () => {
    let counts = parseInt(counter.textContent);
    counts++;
    counter.textContent = counts;
    cookieTremor();
    getSpeed();
}

function getSpeed() {
    currentClickMom = new Date().valueOf();
    if (previousClickMom === null) {
        previousClickMom = currentClickMom;
        return;    
    }
    speedCounter.textContent = (1000 / (currentClickMom - previousClickMom)).toFixed(2); 
    console.log(currentClickMom - previousClickMom);
    previousClickMom = currentClickMom;
}

function cookieTremor() {
    if (cookie.width === 200) {
        cookie.width = 220;
    } else {
        cookie.width = 200;
    }
}