// Реалізовуємо форму для реєстрації.
// Поля:
// - Ім'я, Прізвище (Текстові поля)
// - Дата народження (Текстове поле)
// - Стать (radio)
// - Місто (select)
// - Адреса (textarea)
// - Мови, якими володіє (checkbox)
// - Кнопка “Зберегти”
// За натисканням на кнопку замість форми повинна виводитися “таблиця” з даними, які ввів користувач.

const register = document.getElementById('register');
const save = document.getElementById('save');

console.log(register.elements);

function createTable() {
    // const inputs = document.
}

save.addEventListener('click', createTable);