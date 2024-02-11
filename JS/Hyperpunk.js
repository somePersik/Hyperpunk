'use strict';
//------------------Главный слайдер-------------------
//Переменные и стартовые значения
const slider = document.querySelector('.mainBlock');
const sliderLine = document.querySelector('.mainBlock__sliderLine');
let slides = document.querySelectorAll('.mainBlock__slide');
let spareSlides = document.querySelectorAll('.mainBlock__slide');
let switchTime = '1s';
sliderLine.style.transition = switchTime;
let delay = 20000;
let sliderWidth = slider.clientWidth;
let sliderHeight = slider.clientHeight;
let activeIndex = 0;
slides[0].classList.add('_Active');
let sliderPosition = 0;

//Функции
function resizeFunc() {
    //Приравнивание слайдов к слайдеру
    sliderLine.style.transition = 'none';
    sliderWidth = slider.clientWidth;
    sliderHeight = slider.clientHeight;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.width = sliderWidth + 'px';
        slides[i].style.height = sliderHeight + 'px';
    }
    sliderLine.style.width = (sliderWidth * slides.length) + 'px';
    sliderPosition = -(activeIndex * sliderWidth);
    sliderLine.style.left = sliderPosition + 'px';
    if (sliderLine.offsetLeft == sliderPosition) {
        sliderLine.style.transition = switchTime;
    }
}
function slider_moveLeft() {
    if (spareSlides[spareSlides.length - 1].classList.contains('_Active')) {
        sliderLine.style.transition = 'none';
        activeIndex = 0;
        sliderPosition = 0;
        sliderLine.style.left = 0;
        sliderLine.prepend(spareSlides[spareSlides.length - 1]);
        spareSlides = document.querySelectorAll('.mainBlock__slide');
        if (sliderLine.offsetLeft == 0) {
            sliderLine.style.transition = switchTime;
        }
        activeIndex++;
        sliderPosition = -(activeIndex * sliderWidth);
        sliderLine.style.left = sliderPosition + 'px';
        spareSlides[activeIndex - 1].classList.remove('_Active');
        spareSlides[activeIndex].classList.add('_Active');
    }
    else {
        activeIndex++;
        sliderPosition = -(activeIndex * sliderWidth);
        sliderLine.style.left = sliderPosition + 'px';
        spareSlides[activeIndex - 1].classList.remove('_Active');
        spareSlides[activeIndex].classList.add('_Active');
    }
}
setInterval(slider_moveLeft, delay);
//__________________Главный слайдер___________________

resizeFunc();
window.addEventListener('resize', resizeFunc);