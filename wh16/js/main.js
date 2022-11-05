// Реалізувати рекурсивну функцію, яка зводить число в ступінь.
// Ступінь передається як другий аргумент у функцію
// pow (num, degree)



// let count = 0;

// function func(){
//     if(count === 10) {
//         return 'DONE';
//     }
//     count++;
//     console.log(count);
//     return func();
// }
// console.log(func());
// console.log('count = ', count);

function pow(x,y){
    if(y === 0) {
        return 1;
    }
    console.log(x);
    return x * pow(x, y-1);
}
let res = pow(5,3);
console.log(res);
//////
const elem = document.getElementById("element")
function logNode(node) {
    console.log(node.innerText);
    
}