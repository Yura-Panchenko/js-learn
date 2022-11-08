// ДЗ 19. Багатоквартирний будинок 
// Створити та описати сутності Багатоквартирного будинку, квартири, мешканця.
// Додати можливість створювати нові будинки на певну кількість квартир.
// Не обмежувати кількість мешканців у квартирі

// Що потрібно зробити

// 1. Створити клас Людина
//     властивості 
//         імʼя
//         стать
//     методи
//         конструктор, який приймає два параметри: імʼя та стать
// 2. клас Квартира
//     властивості 
//         конструктор не потрібен
//         масив жителів, який при створенні пустий
//     методи 
//         додати жителя - метод повинен приймати екземпляр класу Людина, та додавати до масиву жителів
// 3. клас Будинок 
//     властивості 
//         масив квартир, який при створенні пустий
//         максимальна кількість квартир
//     методи
//         конструктор, який приймає один параметр: максимальну кількість квартир
//         додати квартиру - метод повинен приймати екземпляр класу Квартира, перевіряти, чи не буде кількість перевищувати максимальну кількість квартир, і якщо це так, додати квартиру, в іншому випадку виводить у консоль відповідне повідомлення

// в якості демонстраціїї створити:
//     декілька екземплярів класу Людина
//     декілька екземплярів класу Квартира
//     додадити екземпляри класу Людина до екземплярів класу Квартира
//     екземпляр класу Будинок
//     додадити екземпляри класу Квартира до екземплярів класу Будинок

class User {
    name = "Name";
    gender = "Gender";

    constructor(name,gender) {
        this.name = name;
        this.gender = gender;
    }
}

const pety =  new User('Pety', 'M');
const pety1 =  new User('Pety2', 'M');
const pety2 =  new User('Pety3', 'M');
const pety3 =  new User('Pety3', 'M');
const pety4 =  new User('Pety3', 'M');

class Flat {
    peoples = [];

    showFlat(){
        console.log(this.peoples);
    }

    allPeoples(user) {
        this.peoples.push(user);
    }
}

const flat = new Flat();
const flat1 = new Flat();
const flat2 = new Flat();
const flat3 = new Flat();
const flat4 = new Flat();

flat.allPeoples(pety);
flat.allPeoples(pety1);
flat.allPeoples(pety2);
flat.allPeoples(pety3);
flat.allPeoples(pety4);
flat.showFlat();

class Home {
    flats = [];
    maxFlat;

    constructor(maxFlat){
        this.maxFlat = maxFlat;
    }

    
    allFlat(flat){
        if(this.flats.length < this.maxFlat) {
            this.flats.push(flat);
        }else{
            console.log('Перевищена кількість квартир');
        }
    }
    
    showFlat(){
        console.log(this.flats);
    }
}

const home = new Home(3);

home.allFlat(flat);
home.allFlat(flat1);
home.allFlat(flat2);
home.allFlat(flat3);
home.allFlat(flat4);

home.showFlat();