// Створити масив, довжину та елементи якого задає користувач.
let arr = [];
let el;
do{
    el = prompt('Вводьте номера масиву, або для відміни натисніть відміна','');
    if(el !== null) {
        arr.push(Number(el));
        console.log(arr);
    }
}while(el !== null);
console.log(arr);

// Відсортувати масив за зростанням.
arr.sort((a,b) => {
    return a - b;
})
console.log(arr);

// Видалити елементи з масиву з 2 по 4 (включно!).
arr.splice(1,3);
console.log(arr);

// У міру змін виводити вміст масиву на сторінку.