// Запитати у користувача рік народження.
// Запитати в нього, в якому місті він живе.
// Запитати його улюблений вид спорту.
// При натисканні на ОК показуємо вікно, де має бути відображена наступна інформація:
// Його вік.
// Якщо користувач вкаже Київ, Вашингтон чи Лондон, то показати йому повідомлення - "Ти живеш у столиці..." і на місце точок підставляємо країну, столицею якої є місто. Інакше показуємо йому “ти живеш у місті…” і місце точок – введене місто.
// Вибираємо самі три види спорту та три чемпіони у цих видах. Відповідно, якщо користувач вкаже один із цих видів спорту, то показуємо йому повідомлення “Круто! Хочеш стати …? і підставляємо на місце точок ім'я та прізвище чемпіона.
// Все це має бути відображено в одному вікні (алерті).
// Якщо в якомусь випадку він не захоче вводити інформацію і натисне Скасувати, показати йому повідомлення – “Шкода, що Ви не захотіли ввести свій(ю) …” і вказуємо, що він не захотів вводити – дату народження, місто чи вид спорту .

let year = +prompt("В якому році ти народився: ", '');

const CURRENT_YEAR = 2022;
let old = 0;
let city = "";
let sport = "";
let champion = "";

if(year === 0) {
    alert("Шкода, що Ви не захотіли ввести свій вік.")
}else {
    old = `Твій вік: ${CURRENT_YEAR - year}`;
    city = prompt("В якому населенному пункті ти проживаєш?: ", "" );
    if(city === null || city === "") {
        alert(`${old}\nШкода, що Ви не захотіли ввести свoє місто.`);
    }else {
        switch (city.toLowerCase()) {
            case 'київ':
                city = `Ти живеш у столиці України в місті - ${city} `;
                break;
            case 'вашингтон':
                city = `Ти живеш у столиці США в місті - ${city} `;
            case 'лондон':
                city = `Ти живеш у столиці Англії в місті - ${city} `;
                break;
            default:
                city = `Ти живеш у місті - ${city}`;
        }
        sport = prompt("Твій улюблений вид спорту: ", '');
        if(sport === null || sport === ""){
            alert(`${old} \n${city}\nШкода, що Ви не захотіли ввести свій улюблений вид спорту.`);
        } else {
            switch (sport) {
                case 'Футбол':
                    champion = `Круто! Хочеш стати як Андрій Шевченко`;
                    break;
                case 'Бокс':
                    champion = `Круто! Хочеш стати як Олександр Усік`;
                    break;
                case 'Греко-римська боротьба':
                    champion = `Круто! Хочеш стати як Жан Беленюк`;
                    break;
                default:
                    champion = `Підшукаємо чемпіона для цього віду спорту пізніше.`;
            }
            alert(`${old} \n${city} \n${champion} ?`);
        }
    }
}

