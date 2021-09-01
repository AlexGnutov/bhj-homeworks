window.onload = () => {

    const rotator = document.getElementsByClassName('rotator').item(0);
    const rotatorsArr = Array.from(rotator.getElementsByClassName('rotator__case'));

    function cycle() {     
      
        let currentRotator = rotator.getElementsByClassName('rotator__case_active').item(0);
        let currentIndex = rotatorsArr.indexOf(currentRotator);
        
        duration = currentRotator.dataset.speed;
        let color = currentRotator.dataset.color;

        let nextIndex = currentIndex + 1;
        if (nextIndex > (rotatorsArr.length - 1)) {
            nextIndex = 0;
        }

        currentRotator.classList.remove('rotator__case_active');
        const nextRotator = rotatorsArr[nextIndex];
        nextRotator.classList.add('rotator__case_active');
        nextRotator.style.color = color;               

        setTimeout(cycle, duration);
    }    
    
    cycle();
}

