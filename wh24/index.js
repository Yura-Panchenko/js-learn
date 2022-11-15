// Пишемо свій слайдер зображень.
// На сторінці є зображення та кнопки Next, Prev з боків від зображення.
// При кліку на Next - показуємо наступне зображення.
// При кліку на Prev - попереднє.
// При досягненні останнього зображення - ховати кнопку Next. 
// Аналогічно з першим зображенням і кнопкою Prev.

const images = document.querySelectorAll('.image_hold img');
const imageWrap = document.querySelector('.image_hold');
const mask = document.querySelector('.mask');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let counter = 0;
let maskWidth;

prev.setAttribute('disabled', '');
prev.addEventListener('click',left);
next.addEventListener('click',right);
window.addEventListener('resize',resize);

function resize() {
    maskWidth = mask.offsetWidth;
    play();
}

function right() {
    counter++;
    if(images.length-1 === counter) {
        next.setAttribute('disabled', '');
    }
    prev.removeAttribute('disabled');
    play();
}

function left() {
    counter--;
    if(0 === counter) {
        prev.setAttribute('disabled', '');
    }
    next.removeAttribute('disabled');
    play();
}

function play(){
    imageWrap.style.transform = `translateX(-${counter * maskWidth}px)`;
}