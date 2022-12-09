// На сторінці інпут та кнопка.
// При натисканні на кнопку - переходимо за посиланням, яке введено у інпут.
// Також треба реалізувати перевірку введеного значення, чи вказаний протокол http/https.
// Якщо протокол не вказаний - додаємо https
const button = document.getElementById('button');
const form = document.forms.send;

function sendUrl(event){
    event.preventDefault();
    
    const input = document.getElementById('url');
    let inputVal = input.value;

    if(inputVal.includes('http://') || inputVal.includes('https://')) {
        window.location.href = inputVal;
        return;
    }else if(inputVal === '') {
        console.log('Адресу не ввели');
        return;
    } else {
        inputVal = 'https://' + inputVal;
    };
    window.location.href = inputVal;
}

button.addEventListener('click', sendUrl);