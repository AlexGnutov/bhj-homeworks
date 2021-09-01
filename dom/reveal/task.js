
window.onload = () => {
    
    window.addEventListener('scroll', function() {
        const reveals = document.getElementsByClassName('reveal');
        for (const elem of reveals) {
            const position = elem.getBoundingClientRect();
            if (position.top > 0 && position.top < window.innerHeight) {
                elem.classList.add('reveal_active');
            }   
            //else { // на случай, если нужно их выключать
            //  elem.className = "reveal";
            //}
        }   
    })
}



