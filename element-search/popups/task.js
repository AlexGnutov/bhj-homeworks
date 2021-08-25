
const modalMain = document.getElementById('modal_main');
modalMain.classList.add('modal_active');

const closeButtons = document.getElementsByClassName('modal__close_times');
for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = () => {
        closeButtons[i].closest('.modal').classList.remove('modal_active');        
    }
}

const modalShowSuccess = modalMain.getElementsByClassName('show-success');
modalShowSuccess.item(0).onclick = () => {
    modalMain.classList.remove('modal_active');
    document.getElementById('modal_success').classList.add('modal_active');
}
