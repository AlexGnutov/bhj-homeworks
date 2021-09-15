const url = 'https://netology-slow-rest.herokuapp.com/poll.php';

const pollTitle = document.querySelector('.poll__title');
const pollAnswers = document.querySelector('.poll__answers');

window.onload = () => {

    loadQuiz();

}

function loadQuiz() {
    const req = new XMLHttpRequest(); 
    req.open('GET', url);
    req.send();

    req.onreadystatechange = function() {
        if (req.readyState === 4) {
            const reply = JSON.parse(req.response);
            if (reply) {
                quizPlacer(reply.data, reply.id);
            }
            return null;
        }
    }   
}

function quizPlacer(data, id) {
    pollTitle.textContent = data.title;

    data.answers.forEach((element, index) => {
        const button = document.createElement('button');
        button.textContent = element;
        button.className = 'poll_answer';
        button.addEventListener('click', (e) => {
            alert('Спасибо ваш голос засчитан!')
            getStats(id, index);
        })
        pollAnswers.appendChild(button);
    });    
}

function getStats(id, index) {
    Array.from(pollAnswers.children).forEach(child => { 
        child.remove();
    });

    const req = new XMLHttpRequest();
    req.open('POST', url);
    req.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
    req.send(`vote=${id}&answer=${index}`);

    req.onreadystatechange = function() {
        if (req.readyState === 4) {
            const reply = JSON.parse(req.response);
            statsPlacer(reply.stat);
        }
    }
}

function statsPlacer(stats) {
    stats.forEach((stat) => {
        pollAnswers.insertAdjacentHTML('beforeend', `
        <p>${stat.answer}: ${stat.votes}</p>
        `)
    });
}