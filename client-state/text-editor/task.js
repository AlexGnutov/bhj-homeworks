const clearButton = document.getElementById('clear__button');
const editor = document.getElementById('editor');

window.onload = () => {
    if (localStorage.editortext) {
        editor.value = localStorage.editortext;
    }
}

clearButton.addEventListener('click', (e) => {
    editor.value = '';
    storageUpdate();
});

editor.addEventListener('input', (e) => {
    storageUpdate();
});

function storageUpdate() {
    localStorage.setItem('editortext', editor.value);
}