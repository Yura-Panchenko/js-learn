// У папці `img` є зображення.
// При кожному завантаженні сторінки повинно виводитися випадково обране зображення.
// Стартові файли для проекту можна знайти за посиланням:
// https://github.com/vb-oiko/group-2022-09-28/tree/main/homeworks/hw23

const randomNumber = function(max){
    return Math.floor(Math.random() * max )+1;
}

let imgName = `./img/dog${randomNumber(6)}.jpeg`;

document.images[0].setAttribute('src', imgName);