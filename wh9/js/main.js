// Написати цикли, які зможуть:
// - Вивести на сторінку в один рядок через кому числа від 10 до 20
let res = "";
for (let i = 10; i<=20; i++){
    if(i<20){
        res += `${i}, `;
    }else{
        res += `${i}`;
    }
}
console.log(res);
document.write(`<h2>Вивести на сторінку в один рядок через кому числа від 10 до 20:</h2>${res}`);
// - Вивести квадрати чисел від 10 до 20
let res2 = "";
for(let i = 10; i<=20; i++){
    if(i<20) {
        res2 += `${i**2}, `;
    }else {
        res2 += `${i**2}`;
    }
}
console.log(res2);
document.write(`<h2>Вивести квадрати чисел від 10 до 20:</h2>${res2}`);
// - Вивести таблицю множення на 7
let res3 = "";
let res4 = "";
const num = 7;
for(let i = 1; i<=10; i++){
    res3 += `${i} * ${num} = ${i * num}\n`;
    res4 += `${i} * ${num} = ${i * num}<br>`;
}
console.log(res3);
document.write(`<h2>Вивести таблицю множення на 7:</h2>${res4}`);
// -Знайти суму всіх цілих чисел від 1 до 15
let res5 = 0;
for(let i = 1; i<=15; i++) {
    res5 += i;
}
console.log(res5);
document.write(`<h2>Знайти суму всіх цілих чисел від 1 до 15:</h2>${res5}`);
// -Знайти добуток усіх цілих чисел від 15 до 35
let res6 = 1;
for(let i = 15; i<=35; i++) {
    res6 *= i;
}
console.log(res6);
document.write(`<h2>Знайти добуток усіх цілих чисел від 15 до 35:</h2>${res6}`);
// -Знайти середнє арифметичне всіх цілих чисел від 1 до 500
let res7 = 0;
let maxNumber = 500;
for(let i = 1; i<=maxNumber; i++) {
    res7 += i;
}
console.log(res7/maxNumber);
document.write(`<h2>Знайти середнє арифметичне всіх цілих чисел від 1 до 500:</h2>${res7/maxNumber}`);
// -Вивести суму лише парних чисел в діапазоні від 30 до 80
let res8 = 0;
for(let i = 30; i<=80; i++) {
    if(!(i%2)) {
        res8 += i;
    }
}
console.log(res8);
document.write(`<h2>Вивести суму лише парних чисел в діапазоні від 30 до 80:</h2>${res8}`);
// - Вивести всі числа в діапазоні від 100 до 200 кратні 3
let res9 = '';
for(let i = 100; i<=200; i++) {
    if(!(i%3)) {
        res9 += `${i}, `;
    }
}
console.log(res9);
document.write(`<h2>Вивести всі числа в діапазоні від 100 до 200 кратні 3:</h2>${res9}`);
// -Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
let number = +prompt('Введіть натуральне число:', '');
let res10 = "";
for(let i = 0; i<=number; i++) {
    if(!(number%i)) {
        res10 += `${i}, `;
    }
}
console.log(`Число ${number} ділиться на: ${res10}`);
document.write(`<h2>Дано натуральне число. Знайти та вивести на сторінку всі його дільники.</h2>`);
document.write(`Число ${number} ділиться на: ${res10}`);
// -Визначити кількість його парних дільників
let number1 = +prompt('Введіть натуральне число:', '');
let res11 = 0;
for(let i = 0; i<=number1; i++) {
    if(!(number1%i)) {
        if(!(i%2)) {
            res11++;
        }
    }
}
console.log(res11);
document.write(`<h2>Дано натуральне число. Визначити кількість його парних дільників.</h2>`);
document.write(`Kількість парних дільників числа ${number1} = ${res11}`);
// -Знайти суму його парних дільників
let number2 = +prompt('Введіть натуральне число:', '');
let res12 = 0;
for(let i = 0; i<=number2; i++) {
    if(!(number2%i)) {
        if(!(i%2)) {
            res12 += i;
        }
    }
}
console.log(res12);
document.write(`<h2>Дано натуральне число. Знайти суму його парних дільників.</h2>`);
document.write(`Сума парних дільників числа ${number2} = ${res12}`);
// -Надрукувати повну таблицю множення від 1 до 10
let res13 = "";
for(let i = 1; i<=10; i++){
    for(let j = 1; j<=10; j++) {
        console.log(`${i} * ${j} = ${i * j}\n`);
        res13 += `${i} * ${j} = ${i * j}<br>`
    }
}

document.write(`<h2>Надрукувати повну таблицю множення від 1 до 10.</h2>`);
document.write(res13);
