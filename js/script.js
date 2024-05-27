function scrollLeft() {
    const slider = document.querySelector('.slider');
    slider.scrollBy({
        left: -540,
        behavior: 'smooth'
    });
}

function scrollRight() {
    const slider = document.querySelector('.slider');
    slider.scrollBy({
        left: 540,
        behavior: 'smooth'
    });
}