// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
// Наприклад:
// const array = [1, 2, 3, 4, 5, 6, 7];
// removeElement(array, 5 );
// console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]

const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, item) {
    if(array.some(el => el === item)){
        let arr = array.reduce((res, el) => {
            if(el !== item){
                res.push(el);
            }
            return res;
        },[]);
        console.log(arr);
    }else {
        console.log(`Елемент ${item} відсутній в масиві`);
    }
}

removeElement(array, 5 );