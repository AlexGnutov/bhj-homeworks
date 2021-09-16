const url = 'https://netology-slow-rest.herokuapp.com/auth.php';

/*Ссылки на объекты DOM*/
const singIn = document.getElementById('signin');
const singInForm = document.getElementById('signin__form');
const signInButton = document.getElementById('signin__btn');

const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');

const logoutButton = document.getElementById('logout_btn');

//Проверка наличия данных пользователя при открытии страницы
window.onload = () => {
    if (localStorage.userId) {
        userSignIn(localStorage.userId);
    }
}

//Отключим стандартное поведение формы
singInForm.addEventListener('submit', (e) => {
    e.preventDefault();
});

//Обработчик кнопки отправки формы
signInButton.addEventListener('click', (e) => {
    if (singInForm.login.value && singInForm.password.value) {
        const formData = new FormData(singInForm);
        signInRequest(formData);
        singInForm.login.value = '';
        singInForm.password.value = '';
    }
});

//Запрос соответствия имени пользователя и пароля
function signInRequest(formData) {
    const req = new XMLHttpRequest();
    req.open('POST', url);
    req.onreadystatechange = (e) => {
        if (req.readyState === 4 && req.status === 200) {
            try {
                const reply = JSON.parse(req.response);
                console.log(reply);
                if (reply.success === true) {
                    userSignIn(reply.user_id);
                } else if (reply.success === false) {
                    wrongSignInData();
                }
            } catch(e) {
                console.log(e.message)
            } 
        }
    }
    req.send(formData);
}

//Действия при верном сочетании имени пользователя и пароля
function userSignIn(id) {
    userId.textContent = id;
    localStorage.setItem('userId', id);
    welcome.classList.add('welcome_active');
    singIn.classList.remove('signin_active');
}

//Сообщение при неверном сочетании имени пользователя и пароля
function wrongSignInData() {
    const message = document.createElement('div');
    message.className = 'red-text';
    message.textContent = 'Неверное сочетание имени пользователя и пароля.'
    singIn.appendChild(message);

    setTimeout(function() {
        message.remove();
    }, 1500);
}

//Действия при нажатии кнопки выйти
logoutButton.addEventListener('click', (e) => {
    delete localStorage.userId;
    location.reload();
})