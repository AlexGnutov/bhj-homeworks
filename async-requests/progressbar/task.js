const url = 'https://netology-slow-rest.herokuapp.com/upload.php';

const fileSendForm = document.forms.filesend;
const progress = document.getElementById('progress');

fileSendForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(fileSendForm);
  
    const req = new XMLHttpRequest();
    req.open('POST', url);
    
    req.upload.onprogress = function (e) {
        const progressValue = (e.loaded / e.total).toFixed(1);      
        progress.value = progressValue;   
    }

    req.send(formData);
    
});