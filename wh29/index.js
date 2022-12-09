// Робимо на підставі дз 26.
// В праву частину з описом товару додати кнопку "купити".
// При натисканні на кнопку нижче з'являється форма оформлення замовлення з наступними полями:
// - ПІБ покупця
// - Місто (вибір зі списку декількох міст)
// - Склад Нової пошти для надсилання (числове поле)
// - Спосіб оплати: післяплата або оплата на банківську картку
// - Кількість продукції, що купується
// Реалізувати валідацію форми за допомогою JS, щоб всі поля були заповнені.
// При валідаціїї поля ПІБ видаляти зайві пробіли (за допомогою String.trim()).
// Якщо дані у формі некоректні, вивести повідомлення про це під формою.
// Дані замовлення зберегти у обʼєкті. До обʼєкту також додати властивості з даними про дату створення та суму замовлення.
// Якщо дані у формі коректні, вивести інформацію про замовлення під формою у форматі JSON.
// Підказка - щоб красиво вивести дані на сторінку можна використати тег `pre`:
//  innerHTML = `<pre>${JSON.stringify(data, null, 4)}<pre>`
// Щоб розрахувати суму замовлення потрібно додати властивість зі значенням ціни до кожного товару.
// Щоб занадто не ускладнювати завдання будемо вважати, що замовлення може складатися лише з одного виду товару.

const categories = [
  {
    id: 1,
    category: "Toys",
  },
  {
    id: 2,
    category: "Sports",
  },
  {
    id: 3,
    category: "Toys",
  },
  {
    id: 4,
    category: "Grocery",
  },
  {
    id: 5,
    category: "Garden",
  },
];

const products = [
  {
    id: 1,
    category_id: 2,
    name: "Eggplant - Asian",
    price: 10.25,
    description:
      "Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
  },
  {
    id: 2,
    category_id: 5,
    name: "Jagermeister",
    price: 125,
    description:
      "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
  },
  {
    id: 3,
    category_id: 2,
    name: "Wine - Lou Black Shiraz",
    price: 1250.50,
    description:
      "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
  },
  {
    id: 4,
    category_id: 3,
    name: "Beef - Ox Tongue",
    price: 250,
    description:
      "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
  },
  {
    id: 5,
    category_id: 3,
    name: "Beef - Bones, Marrow",
    price: 2350,
    description:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  },
  {
    id: 6,
    category_id: 2,
    name: "Appetizer - Shrimp Puff",
    price: 40,
    description:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
  },
  {
    id: 7,
    category_id: 4,
    name: "Appetizer - Shrimp Puff",
    price: 75,
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
  },
  {
    id: 8,
    category_id: 1,
    name: "Ecolab - Ster Bac",
    price: 50.50,
    description: "Integer ac leo. Pellentesque ultrices mattis odio.",
  },
  {
    id: 9,
    category_id: 4,
    name: "Vegetable - Base",
    price: 60.5,
    description:
      "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
  },
  {
    id: 10,
    category_id: 3,
    name: "Flour - Corn, Fine",
    price: 550,
    description:
      "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
  },
  {
    id: 11,
    category_id: 1,
    name: "Beer - Guiness",
    price: 100,
    description:
      "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    id: 12,
    category_id: 4,
    name: "Napkin White",
    price: 200,
    description:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
  },
  {
    id: 13,
    category_id: 2,
    name: "Oil - Truffle, White",
    price: 150,
    description:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
  },
  {
    id: 14,
    category_id: 5,
    name: "Wine - Puligny Montrachet A.",
    price: 145.50,
    description:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
  },
  {
    id: 15,
    category_id: 5,
    name: "Tomatoes Tear Drop",
    price: 800,
    description:
      "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
  },
];

const categoriesWr = document.getElementById('categories');
const productsWr = document.getElementById('products');
const description = document.getElementById('description');
const button = document.getElementById('buy-button');
const message = document.getElementById('message');
const form = document.getElementById('form');
const inputs = document.querySelectorAll('input[required]');
const city = document.getElementById('city');
const submit = document.getElementById('submit');
const total = document.getElementById('total');
const payment = document.querySelectorAll('[name="payment"]');
const paymentError = document.getElementById('payment-error');
const count = document.getElementById('count');

// cleer categories
categoriesWr.innerHTML = '';
// clear products
productsWr.innerHTML = '';
// clear description
description.innerHTML = '';
// clear message
message.innerHTML = '';

button.setAttribute('disabled', true);
// create list categorie item
const categoryAll = categories.forEach(el => {
  const item = document.createElement('li');
  item.setAttribute(`data-category-id`, el.id);
  item.setAttribute(`class`, 'list-group-item');
  item.textContent = el.category;
  categoriesWr.append(item);
})

function filterCategory(event) {
  productsWr.innerHTML = '';
  const catId = +event.target.getAttribute('data-category-id');
  products.forEach(el => {
    if(el.category_id === catId){
      const result = document.createElement('li');
      result.setAttribute(`data-product-id`, el.id);
      result.setAttribute('class', 'list-group-item');
      result.textContent = el.name;
      productsWr.append(result);
    }
  })
  // clear message
  message.innerHTML = '';
  message.classList.add('d-none');
  button.classList.remove('d-none');
}

function infoProduct(event){
  const productId = Number(event.target.getAttribute('data-product-id'));
  description.textContent = '';
  const title = document.createElement('h2');
  const text = document.createElement('p');
  const price = document.createElement('strong');
  title.setAttribute('id','title');
  description.classList.remove('d-none');
  products.forEach(el => {
    if(productId === el.id){
      title.textContent = el.name;
      text.textContent = el.description;
      price.textContent = el.price;
      description.append(title);
      description.append(text);
      description.append(price);
    }
  });
  
  button.removeAttribute('disabled');
}

function printItem() {
  total.innerHTML = `<pre>${JSON.stringify(data, null, 4)}<pre>`;
}

function addCart(event){
  event.preventDefault();
  message.classList.remove('d-none');
  message.textContent = 'The product has been added to the basket';
  event.target.setAttribute('default', true);
  form.classList.remove('d-none');
  this.classList.add('d-none');
}

function selectValidation(event){
  event.preventDefault();
  const obj = {};
  const title = document.querySelector('#description h2');
  const text = document.querySelector('#description p');
  const price = document.querySelector('#description strong');
  const nameId = document.querySelector('#nameId');
  const city = document.querySelector('.form-select');

  inputs.forEach((el)=>{
    let val = el.value.trim()
    if(el.value !== '' && val !== '') {
      el.classList.remove('border-danger');
      el.classList.add('border-success');
    } else {
      el.classList.remove('border-success');
      el.classList.add('border-danger');
      return false;
    }
  })
  
  if(city.selectedIndex) {
    city.classList.remove('border-danger');
    city.classList.add('border-success');
  } else {
    city.classList.remove('border-success');
    city.classList.add('border-danger');
    return false;
  }

  let validPayment = false;
  let paymentValue;

  for(el of payment) {
    if(el.checked){
      validPayment = true;
      paymentValue = el.value;
      break;
    }
  }
  
  if(validPayment) {
    paymentError.classList.add('d-none');
  }else{
    paymentError.classList.remove('d-none');
  }

  obj.title = title.textContent;
  obj.text = text.textContent;
  obj.price = price.textContent * Number(count.value);
  obj.name = nameId.value;
  obj.city = city.value;
  obj.payment = paymentValue;
  obj.count = count.value;
  
  total.innerHTML = `<pre>${JSON.stringify(obj)}<pre>`;
}

categoriesWr.addEventListener('click', filterCategory);
productsWr.addEventListener('click', infoProduct);
button.addEventListener('click', addCart);
submit.addEventListener('click', selectValidation)