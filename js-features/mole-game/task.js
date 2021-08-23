let deadCounter = 0;
let lostCounter = 0;

const lostOutput = document.getElementById('lost');
const deadOutput = document.getElementById('dead');

[1,2,3,4,5,6,7,8,9].forEach((x) => {
    document.getElementById(`hole${x}`).onclick = holeClick;
});

function holeClick(e) {
    if (e.target.className === 'hole hole_has-mole') {
        deadCounter += 1;   
        deadOutput.textContent = deadCounter;
    } else {
        lostCounter +=1;
        lostOutput.textContent = lostCounter;
    }    
    checkProgress();
}

function checkProgress() {
    if (lostCounter === 5) {
        alert('Вы проиграли!');
        renewAll();
    } 
    if (deadCounter === 10) {
        alert('Вы выиграли!');
        renewAll();
    }
}

function renewAll() {
    lostCounter = 0;
    deadCounter = 0;
    deadOutput.textContent = deadCounter;
    lostOutput.textContent = lostCounter;
}