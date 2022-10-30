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
console.log('pow = ',pow(5,3));