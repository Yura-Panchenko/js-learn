// Реалізуйте функцію generateKey(length, characters), 
//  яка повертає рядок випадкових символів із набору characters довжиною length.

// Наприклад:

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(5, characters);

function generateKey(length, characters) {
    let str = '';
    for(let i = 0; i < length ; i++) {
        let index = Math.round(Math.random() * characters.split('').length);
        str += characters[index];
    }
    return str;
}
console.log(key);