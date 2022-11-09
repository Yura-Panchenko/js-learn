// Таблиця
// Вивести на сторінку таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється за допомогою JavaScript).
// У HTML файлі для тих, хто забув, наведено приклад, як виглядає структура таблиці
// Стартові файли для проекту можна знайти за посиланням: https://github.com/vb-oiko/group-2022-09-28/tree/main/homeworks/hw22

const container = document.querySelector('.container');

addTable(container,10,10);

function addTable(container,x,y){
    let str = '<table><tr>';

    for(let i = 1; i <= x*y; i++){
        if(i === x*y){
            str+= `<td>${i}</td>`;
        }else if(!(i%x*y)){
            str+= `<td>${i}</td></tr><tr>`;
        }
        else{
            str+= `<td>${i}</td>`;
        }
    }
    str += '</tr></table>';
    container.innerHTML = str;
}

//
// варіант 2, не знаю який вірний(
let element = document.querySelector('.container');

//createTable(element,10,10)

function addTable(parent,x,y){
    let table = document.createElement('table');
    let k = 1;

    for(let i = 1; i <= x; i++){
        let tr = document.createElement('tr');

        for(let j = 1; j <= y; j++){
            let td = document.createElement('td');
            tr.appendChild(td).innerHTML = k;
            k++;
        }
        table.appendChild(tr);
    }
    
    parent.appendChild(table);
}