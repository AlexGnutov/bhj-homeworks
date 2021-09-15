const url = 'https://netology-slow-rest.herokuapp.com';
const currenciesContainer = document.getElementById('items');
const loader = document.getElementById('loader');

const req = new XMLHttpRequest();
req.open('GET', url);
req.send();

req.onreadystatechange = function() {
    if (req.readyState === 4) {
        const reply = JSON.parse(req.response);
        currenciesPlacer(reply.response.Valute);
    }
}

function currenciesPlacer(data) {
    if (data) {
        for (let curr in data) {
            const obj = data[curr];
            currenciesContainer.insertAdjacentHTML('beforeend', `
            <div class="item">
                <div class="item__code">${obj.CharCode}</div>
                <div class="item__value">${obj.Value}</div>
            </div>`);
        }
        loader.classList.remove('loader_active');
    } 
}