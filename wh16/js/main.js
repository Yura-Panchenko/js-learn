// Реалізувати рекурсивну функцію, яка зводить число в ступінь.
// Ступінь передається як другий аргумент у функцію
// pow (num, degree)

function pow(num,degree) {
    if(degree == 1) {
        return num;
    } else {
        return num * pow(num,degree - 1);
    }
}

let res = pow(5,3);
console.log(res);

const elem = document.getElementById("element")
function logNode(node) {
    console.log(node.innerText);
    
}
