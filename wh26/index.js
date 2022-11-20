// Дано 3 блоки
// В лівій частині сторінки - перелік категорій.
// При натисканні на категорію в середній блок виводиться список товарів 
// цієї категорії.
// Клік на товар - інформацію про товар у правому блоці.
// В інформації товару - кнопка “купити”. При натисканні на “купити” з'являється 
// повідомлення, що товар куплений і повернення у вихідний стан програми 
// (коли відображається лише список категорій).
// У файлі index.js додано масиви з даними категорій та товарів.
// У файлі index.html зроблено базову структуру сторінки.
// https://github.com/vb-oiko/group-2022-09-28/tree/main/homeworks/hw26
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
    description:
      "Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
  },
  {
    id: 2,
    category_id: 5,
    name: "Jagermeister",
    description:
      "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
  },
  {
    id: 3,
    category_id: 2,
    name: "Wine - Lou Black Shiraz",
    description:
      "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
  },
  {
    id: 4,
    category_id: 3,
    name: "Beef - Ox Tongue",
    description:
      "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
  },
  {
    id: 5,
    category_id: 3,
    name: "Beef - Bones, Marrow",
    description:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  },
  {
    id: 6,
    category_id: 2,
    name: "Appetizer - Shrimp Puff",
    description:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
  },
  {
    id: 7,
    category_id: 4,
    name: "Appetizer - Shrimp Puff",
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
  },
  {
    id: 8,
    category_id: 1,
    name: "Ecolab - Ster Bac",
    description: "Integer ac leo. Pellentesque ultrices mattis odio.",
  },
  {
    id: 9,
    category_id: 4,
    name: "Vegetable - Base",
    description:
      "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
  },
  {
    id: 10,
    category_id: 3,
    name: "Flour - Corn, Fine",
    description:
      "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
  },
  {
    id: 11,
    category_id: 1,
    name: "Beer - Guiness",
    description:
      "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    id: 12,
    category_id: 4,
    name: "Napkin White",
    description:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
  },
  {
    id: 13,
    category_id: 2,
    name: "Oil - Truffle, White",
    description:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
  },
  {
    id: 14,
    category_id: 5,
    name: "Wine - Puligny Montrachet A.",
    description:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
  },
  {
    id: 15,
    category_id: 5,
    name: "Tomatoes Tear Drop",
    description:
      "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
  },
];

const categoriesWr = document.getElementById('categories');
const productsWr = document.getElementById('products');
const description = document.getElementById('description');
const button = document.getElementById('buy-button');
const message = document.getElementById('message');

// cleer categories
categoriesWr.innerHTML = '';
// clear products
productsWr.innerHTML = '';
// clear description
description.innerHTML = '';
// clear message
message.innerHTML = '';

button.setAttribute('default', true);

// create list categorie item
console.log(categories)
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
}

function infoProduct(event){
  const productId = +event.target.getAttribute('data-product-id');
  products.forEach(el => {
    if(productId === el.id){
      description.textContent = el.description;
    }
  });
  button.removeAttribute('default');
}

function addCart(event){
  event.preventDefault();
  message.textContent = 'The product has been added to the basket';
  // clear products
  productsWr.innerHTML = '';
  // clear description
  description.innerHTML = '';
  event.target.setAttribute('default', true);
}

categoriesWr.addEventListener('click', filterCategory);
productsWr.addEventListener('click', infoProduct);
button.addEventListener('click', addCart);