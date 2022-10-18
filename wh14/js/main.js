// Реалізуйте функцію generateKey(length, characters), 
//  яка повертає рядок випадкових символів із набору characters довжиною length.

// Наприклад:

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(5, characters);

function generateKey(length, characters) {
    let chArr = characters.split('');
    // let nevArr = [];
    let str = '';
    for(let i = 0; i < length ; i++) {
        let index = Math.round(Math.random() * chArr.length);
        // nevArr.push(chArr[index]);
        str += characters[index];
    }
    // return nevArr.join('');
    return str;
}
console.log(key);