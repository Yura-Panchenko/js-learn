// Ця дз складається з чотирьох невеликих завдань, 
//за реалізацію кожної з них можна отримати 25 балів:

// 1
// -Дан масив з елементами різних типів. 
// Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

const arr = [4,6,3,'f','d','3',2,5];

function result(arr){
    let i = 0;

    let result = arr.reduce((midle,el) => {

        if(typeof el === 'number'){
            i++;
            midle += el;
        }
        return midle;
    },0);

    return result / i;
}
console.log(result(arr));

// 2
// -Написати функцію doMath(x, znak, y), яка отримує 3 аргументи:
// числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
// Вивести результат математичної дії, вказаної в змінній znak.
// Обидва числа і знак виходять від користувача.

let x;
let y;
let znak;

function doMath(x, znak, y) {
    let res = 0;

    x = prompt('Введіть перше число','');
    
    if (x) {
        let num1 = Number(x);
    
        if(Number.isNaN(num1)){
            console.log(`Ви ввели не число, а літеру - "${x}"`);
            return;
        }else{
            x = num1;
            console.log(`Перше число - "${x}"`);
            y = prompt('Введіть друге число','');
    
            if(y) {
                let num2 = Number(y);
    
                if(Number.isNaN(num2)){
                    console.log(`Ви ввели не число, а літеру - "${y}"`);
                    return;
                }else{
                    y = num2;
                    console.log(`Друге число - "${y}"`);
                    znak = prompt('Введіть знак +, -, *, /, %, ^','');
                    switch (znak) {
                        case '+':
                        case '-':
                        case '*':
                        case '/':
                        case '%':
                        case '^':
                            znak = znak;
                            break;
                        default:
                            console.log('Ви ввели недопустиму дію над числами!');
                            return;
                    }

                    switch (znak) {
                        case '+':
                            res = x + y;
                            break;
                        case '-':
                            res = x - y;
                            break;
                        case '*':
                            res = x * y;
                            break;
                        case '/':
                            if (y !== 0) {
                                res = x / y;
                            }else{
                                console.log('На нуль ділити не можна!');
                                return;
                            }
                            break;
                        case '%':
                            res = `${(x / y) * 100}%`;
                            break;
                        case '^':
                            res = Math.pow(x,y);
                            break;
                    }
                }
            }else {
                console.log('Ви не ввели друге число!');
                return;
            }
        }
    }else {
        console.log('Ви не ввели перше число!');
        return;
    }
    
    return `${x} ${znak} ${y} = ${res}`;
}

console.log(doMath(x, znak, y));

// 3
// -Написати функцію заповнення даними користувача двомірного масиву. 
// Довжину основного масиву і внутрішніх масивів задає користувач. 
// Значення всіх елементів всіх масивів задає користувач.

function arrCreate(){
    let arr = [];
    let el2;
    let l = prompt('Яка довжина основного масиву?','');
    for (let i = 0; l; l--){
        let l2 = prompt(`Яка довжина додаткового масиву під індексом ${i++}?`,'');
        let arr2 = [];

        for(let j = 0; l2; l2--) {
            el2 = prompt(`Значення під індексом ${j++} = `);
            arr2.push(el2)
        }

        arr.push(arr2)
    }
    console.log(arr);
}
arrCreate();

// -Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". 
// Вихідний рядок та символи для видалення задає користувач

function func(str, ch) {
    let arr = str.split('');
    
    for(let i = 0; i<ch.length; i++) {
        arr = arr.filter((el) => {
            return el !== ch[i];
        })
    }
    
    console.log(arr.join(''));

}

func("hello world", ['l', 'd']);