
const modalWindow = document.getElementById('subscribe-modal');
const modalClose = modalWindow.querySelector('.modal__close');

window.onload = () => {
    const modalShown = getCookie('modalShown');

    if (!modalShown) {
        modalWindow.classList.toggle('modal_active');        
    }

    modalClose.addEventListener('click', (e) => {
        document.cookie = 'modalShown=yes';
        modalWindow.classList.toggle('modal_active');
    });
}

function getCookie(name) {
    console.log(document.cookie);
    const value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) {
        return parts.pop().split(";").shift();
    }
    
    return null;
}
