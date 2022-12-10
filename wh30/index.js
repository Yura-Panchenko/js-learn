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
const userName = document.getElementById('name');
const data = document.getElementById('data');
const city = document.getElementById('city');
const address = document.getElementById('address');
const sex = document.querySelectorAll('input[name="sex"]');
const lang = document.querySelectorAll('input[name="lang"]');
const infoWrap = document.getElementById('info');
const info = document.querySelector('.table tbody tr');
const obj = {};

function createTable(event) {
    event.preventDefault();

    if(userName.value != '') {
        obj.userName = userName.value;
        userName.classList.remove('border-danger');
        userName.classList.add('border-success');
    }else{
        userName.classList.add('border-danger');
        userName.classList.remove('border-success');
        return false;
    }

    if(data.value != '') {
        obj.data = data.value;
        data.classList.remove('border-danger');
        data.classList.add('border-success');
    }else{
        data.classList.add('border-danger');
        data.classList.remove('border-success');
        return false;
    }

    sex.forEach(el => {
        if(el.checked){
            obj.sex = el.value;
        }
    })

    if(city.selectedIndex) {
        obj.city = city.value;
        city.classList.remove('border-danger');
        city.classList.add('border-success');
    }else{
        city.classList.add('border-danger');
        city.classList.remove('border-success');
        return false;
    }

    if(address.value) {
        obj.address = address.value;
        address.classList.remove('border-danger');
        address.classList.add('border-success');
    }else{
        address.classList.add('border-danger');
        address.classList.remove('border-success');
        return false;
    }

    let langStr = '<ol>';
    lang.forEach(el => {
        if(el.checked) {
            langStr += `<li>${el.value}</li>`;
        }
    })
    langStr += '</ol>';
    obj.languiges = langStr;

    register.classList.add('d-none')
    infoWrap.classList.remove('d-none');

    const tdUser = document.createElement('td');
    tdUser.textContent = obj.userName
    const tdData = document.createElement('td');
    tdData.textContent = obj.data
    const tdSex = document.createElement('td');
    tdSex.textContent = obj.sex
    const tdCity = document.createElement('td');
    tdCity.textContent = obj.city
    const tdAddress = document.createElement('td');
    tdAddress.textContent = obj.address
    const tdLanguiges = document.createElement('td');
    tdLanguiges.innerHTML = obj.languiges;

    info.append(tdUser);
    info.append(tdData);
    info.append(tdSex);
    info.append(tdCity);
    info.append(tdAddress);
    info.append(tdLanguiges);
}

save.addEventListener('click', createTable);