// 1) питаємо у користувача, що він хоче зробити (add, sub, mult, div)
// 2) питаємо у користувача перше число
// 3) запитуємо у користувача друге число
// 4) виводимо результат дії (add, sub, mult, div) з усіма операндами (Наприклад ""2 + 3 = 5"")

let action = prompt("Яку дію ви хочете зробити? add, sub, mult, div", '');

if(action === 'add' || action === 'sub' || action === 'mult' || action === 'div') {
    let num1 = +prompt("Please enter first number", '');
    let num2 = +prompt("Please enter second number", '');
    
    if(action === 'add') {
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
    }else if(action === 'sub') {
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
    }else if(action === 'mult') {
        console.log(`${num1} * ${num2} = ${num1 * num2}`);
    }else if(action === 'div') {
        console.log(`${num1} / ${num2} = ${num1 / num2}`);
    }
}else{
    console.log(`Невідома дія - ${action}`);
}