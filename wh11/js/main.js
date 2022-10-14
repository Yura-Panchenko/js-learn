// Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
// Знайти суму та кількість позитивних елементів.
let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let arr1 = arr.filter((el) => {
    return el > 0;
});
let positiveLength = arr1.length;
console.log('Кількість позитивних елементів = ',positiveLength);
let sum = arr1.reduce((result,el) => {
    return result += el;
},0);
console.log('Cума позитивних елементів = ',sum);

// Знайти мінімальний елемент масиву та його порядковий номер.

let min = arr.reduce((acc, el) => {
    return acc = Math.min(acc,el);
},'');

console.log(arr);
console.log('Min number = ',min);
console.log('Index min number = ', arr.indexOf(min));

// Знайти максимальний елемент масиву та його порядковий номер.
let max = arr.reduce((acc, el) => {
    return acc = Math.max(acc,el);
},'');

console.log(arr);
console.log('Max number = ',max);
console.log('Index max number = ', arr.indexOf(max));

// Визначити кількість негативних елементів.
let negative = arr.filter((el) => {
    return el < 0;
});
console.log('Kількість негативних елементів = ',negative.length);

// Знайти кількість непарних позитивних елементів.
let positive = arr.filter((el) => {
    if (el > 0 && el%2) {
        return el;
    }
});
console.log('Кількість непарних позитивних елементів = ',positive.length);

// Знайти кількість парних позитивних елементів.
let positive1 = arr.filter((el) => {
    if(el>0 && !(el%2)) {
        return el;
    }
});
console.log('Кількість парних позитивних елементів = ',positive1.length);
// Знайти суму парних позитивних елементів.
let sum1 = arr.reduce((accum, el) => {
    if(el>0 && !(el%2)) {
        accum =  accum + el;
    }
    return accum;
},0); 
console.log('Cума парних позитивних елементів = ',sum1);

// Знайти суму непарних позитивних елементів.
let sum2 = arr.reduce((accum, el) => {
    if(el>0 && el%2) {
        accum =  accum + el;
    }
    return accum;
},0); 
console.log('Cума непарних позитивних елементів = ',sum2);

// Знайти добуток позитивних елементів.
let sum3 = arr.reduce((accum, el) => {
    if(el>0) {
        accum =  accum * el;
    }
    return accum;
},1); 
console.log('Добуток позитивних елементів = ',sum3);

// Знайти найбільший серед елементів масиву, остальні обнулити.
let reset = arr.reduce((acc, el) => {
    return acc = Math.max(acc,el);
},'');
console.log('Найбільший серед елементів масиву = ',reset);

let res2 = arr.map((el) => {
    if(reset !== el) {
        el = 0;
    } else {
        el
    }
    return el;
})
console.log('Oбнулений масив =',res2);