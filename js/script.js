function scrollLeft() {
    const slider = document.querySelector('.slider');
    const sliderItem = document.querySelector('.slider-item');
    const scrollAmount = sliderItem.offsetWidth; 
    slider.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    });
}

function scrollRight() {
    const slider = document.querySelector('.slider');
    const sliderItem = document.querySelector('.slider-item');
    const scrollAmount = sliderItem.offsetWidth; 
    slider.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
}