
const sliderContainer = document.getElementsByClassName('slider__items').item(0);
const dotsContainer = document.getElementsByClassName('slider__dots').item(0);

const slides = Array.from(sliderContainer.getElementsByClassName('slider__item'));
const slidesNumber = slides.length;

const dots = Array.from(dotsContainer.getElementsByClassName('slider__dot'))

document.getElementsByClassName('slider__arrow_prev').item(0).onclick = () => {
    moveSlider(-1, 'move');
}

document.getElementsByClassName('slider__arrow_next').item(0).onclick = () => {
    moveSlider(1, 'move');
}

dots.forEach(x => {
    x.onclick = (e) => {
        const step = dots.indexOf(e.target);
        moveSlider(step, 'set');
    }
})

function moveSlider(step, mode) {
    const activeSlide = sliderContainer.getElementsByClassName('slider__item_active').item(0);
    const activeSlidePosition = slides.indexOf(activeSlide);

    const activeDot = dotsContainer.getElementsByClassName('slider__dot_active').item(0);
    
    let newActiveIndex;

    if (mode === "move") {
        newActiveIndex = activeSlidePosition + step;
        if (newActiveIndex >= slidesNumber) {
            newActiveIndex = 0;
        } else if (newActiveIndex < 0) {
            newActiveIndex = slidesNumber - 1;
        }
    } else if (mode === "set") {
        newActiveIndex = step;
    }

    activeDot.classList.remove('slider__dot_active');
    dots[newActiveIndex].classList.add('slider__dot_active');
    
    activeSlide.classList.remove('slider__item_active');
    slides[newActiveIndex].classList.add('slider__item_active');
}




