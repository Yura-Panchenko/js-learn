// ## div - привид

// Є текстове поле на сторінці. Під час фокусування на цьому полі збоку з'являється <div>.
// При пропажі фокусу - <div> так само пропадає

// Стартові файли для проекту можна знайти за посиланням:
// https://github.com/vb-oiko/group-2022-09-28/tree/main/homeworks/hw21

const input = document.querySelector('.input');
const box = document.querySelector('.ghost');
box.setAttribute('style', 'visibility: hidden');

const focusInput = (e) => {
    box.setAttribute('style', 'visibility: visible');
}

const blurInput = (e) => {
    box.setAttribute('style', 'visibility: hidden');
}

input.addEventListener('focus', focusInput)
input.addEventListener('blur', blurInput)
