const timer = document.getElementById('timer');
const timeString = timer.textContent;
const numbers = timeString.split(':');

let totalSeconds = parseInt(numbers[0]) * 3600 + parseInt(numbers[1]) * 60 + parseInt(numbers[2]);

let interval = setInterval(function() {
    if (totalSeconds === 0) {
        alert('Вы выиграли в конкурсе!');
        clearInterval(interval);
        window.location = "./extended-demo.gif";
        //document.getElementById('linked').click();
    } else {
        totalSeconds -= 1;
        timer.textContent = timerUpdate(totalSeconds);    
    }
}, 100);

function timerUpdate(totalSeconds) {
    let hours = (totalSeconds - (totalSeconds % 3600)) / 3600;
    const totalMinutes = totalSeconds % 3600;
    let minutes = (totalMinutes - (totalMinutes % 60)) / 60;
    let seconds = totalMinutes % 60;
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    return `${hours}:${minutes}:${seconds}`;    
}

