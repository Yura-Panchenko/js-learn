// 1 Отримати від користувача 3 рядки та вивести їх у довільному порядку однією командою (конкатенація)
// iз prompt отримуємо строку
let num1 = prompt('Enter you first number','');
let num2 = prompt('Enter you second number','');
let num3 = prompt('Enter you third number','');

// конкатенація трьох строк 
console.log("Коткатенація = ", num1 + num2 + num3);
// збереження знаків між введеними символами, знаки виводяться як звичайні символи
console.log("Result string = ", `${num1} + ${num2} + ${num3}`);

document.write("Коткатенація = ", num1 + num2 + num3);
document.write('<br>');
document.write("Result string = ", `${num1} + ${num2} + ${num3}`);

//////////////////////
// 2 Розкласти за цифрами п'ятизначне число і вивести у вихідному порядку через пропуск


let number = 12345;
let number2 = prompt("Enter you five numbers", '');

let arr = String(number).split('').join(' ');
let arr2 = number2.split('').join(' ');
console.log(arr);
console.log(arr2);