// Реалізуйте функцію generateKey(length, characters), 
//  яка повертає рядок випадкових символів із набору characters довжиною length.

// Наприклад:

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(37, characters);

function generateKey(length, characters) {
    let chArr = characters.split('');
    let nevArr = [];
    for(let i = 0; i < length ; i++) {
        let index = Math.round(Math.random() * chArr.length);
        nevArr.push(chArr[index]);
    }
    return nevArr.join('');
}
console.log(key);