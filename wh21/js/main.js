// ## div - привид

// Є текстове поле на сторінці. Під час фокусування на цьому полі збоку з'являється <div>.
// При пропажі фокусу - <div> так само пропадає

// Стартові файли для проекту можна знайти за посиланням:
// https://github.com/vb-oiko/group-2022-09-28/tree/main/homeworks/hw21

const input = document.querySelector('.input');
const box = document.querySelector('.ghost');
box.setAttribute('style', 'display:none');

const focusInput = (e) => {
    box.setAttribute('style', 'display:block');
}

const blurInput = (e) => {
    box.setAttribute('style', 'display:none');
}

input.addEventListener('focus', focusInput)
input.addEventListener('blur', blurInput)

////////////////

// const input = document.querySelector('.input');
// const box = document.querySelector('.ghost');
// box.setAttribute('style', 'display:none');

// const focusInput = (e) => {
//     box.setAttribute('style', 'display:block');
// }

// const blurInput = (e) => {
//     box.setAttribute('style', 'display:none');
// }

// input.addEventListener('focus', focusInput)
// input.addEventListener('blur', blurInput)