// Модифікувати інтернет-магазин таким чином, щоб була можливість переглянути всі збережені замовлення 
// навіть після оновлення сторінки (використати localStorage).
// На сторінці спочатку під списком категорій відображається також кнопка “Мої замовлення”.
// При кліку на “Мої замовлення”:
// - замість категорій відображається список усіх замовлень користувача (дата та сума)
// - при кліку на замовлення в середній частині відображаються деталі замовлення.
// - в правій частині відображаються дані про товар з замовлення
// Також реалізувати можливість видалення замовлення зі списку. 
// Потрібно реалізувати можливість видаляти замовлення по одному, 
// тобто напроти кожного рядку зі збереженим заказом повинна бути кнопка для видалення цього рядку. 
// (Підказка - можна використовувати значення `Date.now()` на момент збереження замовлення у якості айдішника замовлення. 
// Потім при виведенні списка замовлень цей айдішник додати як дата атрибут.
// Таким чином можна буде обробляти кліки по кнопках видалення рідків з замовленнями)

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
    image: 'https://pickledplum.com/wp-content/uploads/2017/08/Chinese-eggplant-with-garlic-sauce-1200.webp',
    description:
      "Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
  },
  {
    id: 2,
    category_id: 5,
    name: "Jagermeister",
    price: 12.99,
    image: 'https://www.lidl.de/assets/353f23cbccd2ce0c51320e99b9494652.jpeg',
    description:
      "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
  },
  {
    id: 3,
    category_id: 2,
    name: "Wine - Lou Black Shiraz",
    price: 14.95,
    image: 'https://cdn.shopify.com/s/files/1/0554/9011/7686/products/17633_AS_f641b478-1e55-446b-af44-25aa2b202a88_325x.png',
    description:
      "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
  },
  {
    id: 4,
    category_id: 3,
    name: "Beef - Ox Tongue",
    price: 52.50,
    image: 'https://cdn.shopify.com/s/files/1/0280/0563/0045/products/T-Bone_Steak_Bio_Rindfleisch_Land.Luft_Onlineshop_1080x.jpg',
    description:
      "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
  },
  {
    id: 5,
    category_id: 3,
    name: "Beef - Bones, Marrow",
    price: 137.25,
    image: 'https://www.otto-gourmet.de/media/catalog/product/cache/12/image/800x/17f82f742ffe127f42dca9de82fb58b1/m/a/markknochen-black-hg.jpg',
    description:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  },
  {
    id: 6,
    category_id: 2,
    name: "Appetizer - Shrimp Puff",
    price: 34.90,
    image: 'https://www.lobsterking.de/pub/media/catalog/product/cache/560b622255c2a9958d4de91859c047c6/l/o/lobsterking-vegane-crispy-shrimps-garnelen-in-knuspriger-zitronenpanade-1kg-1009001000_r.jpg',
    description:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
  },
  {
    id: 7,
    category_id: 4,
    name: "Appetizer - Shrimp Puff",
    price: 34.90,
    image: 'https://www.lobsterking.de/pub/media/catalog/product/cache/560b622255c2a9958d4de91859c047c6/l/o/lobsterking-vegane-crispy-shrimps-garnelen-in-knuspriger-zitronenpanade-1kg-1009001000_r2.jpg',
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
  },
  {
    id: 8,
    category_id: 1,
    name: "Ecolab - Ster Bac",
    price: 64.91,
    image: 'https://static.praxisdienst.com/out/pictures/generated/product/1/1200_1200_40/140407_spitacid_5l.jpg',
    description: "Integer ac leo. Pellentesque ultrices mattis odio.",
  },
  {
    id: 9,
    category_id: 4,
    name: "Vegetable - Base",
    price: 8.39,
    image: 'https://m.media-amazon.com/images/I/710d7RGlolL._SY679_PIbundle-20,TopRight,0,0_SX509SY679SH20_.jpg',
    description:
      "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
  },
  {
    id: 10,
    category_id: 3,
    name: "Flour - Corn, Fine",
    price: 25,
    image: 'https://www.altmarkmehl.de/wp-content/uploads/2021/08/weizenmehl-typ-550-25kg.png',
    description:
      "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
  },
  {
    id: 11,
    category_id: 1,
    name: "Beer - Guiness",
    price: 19.99,
    image: 'https://m.media-amazon.com/images/I/81BylUsTwhL._AC_SY879_.jpg',
    description:
      "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    id: 12,
    category_id: 4,
    name: "Napkin White",
    price: 76.48,
    image: 'https://sklep.bfresh.pl/environment/cache/images/500_500_productGfx_5147/Napkins-40x40-duni-elegance-lily-white-sklep_bfresh_pl.jpg',
    description:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
  },
  {
    id: 13,
    category_id: 2,
    name: "Oil - Truffle, White",
    price: 36,
    image: 'https://cdn.shopify.com/s/files/1/0567/3595/7039/products/3_28f581af-d92d-4c3b-b68c-37a5646622e9_1024x1024.jpg',
    description:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
  },
  {
    id: 14,
    category_id: 5,
    name: "Wine - Puligny Montrachet A.",
    price: 15.55,
    image: 'https://www.krote.de/media/image/product/6038/md/2021-sancerre-domaine-les-chaumes-jean-jacques-bardin-weisswein~2.png',
    description:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
  },
  {
    id: 15,
    category_id: 5,
    name: "Tomatoes Tear Drop",
    price: 4.80,
    image: 'https://www.kaleandme.de/thumbnail/3c/39/dc/1657634247/03_Tommy%20Tomato%20%281%29_1920x1920.png',
    description:
      "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
  },
];

const categoriesWr     = document.getElementById('categories'); // категорії
const bag              = document.getElementById('bag'); // показуємо що в локалсторедж
const selectedProducts = document.getElementById('selected-products'); //всі збережені замовлення
const productsWr       = document.getElementById('products'); //продукти
const detailsProduct   = document.getElementById('details-product'); //деталі по замовленню
const description      = document.getElementById('description'); //опис товару
const message          = document.getElementById('message');
const button           = document.getElementById('buy-button');
const form             = document.getElementById('form');
const nameId           = document.getElementById('nameId');
const city             = document.getElementById('city');
const composition      = document.getElementById('composition');
const payment          = document.querySelectorAll('[name="payment"]');
const paymentError     = document.getElementById('payment-error');
const count            = document.getElementById('count');
const submit           = document.getElementById('submit'); // додаємо в локалсторедж
const infoProductWr    = document.getElementById('info-product'); 

// cleer categories
categoriesWr.innerHTML = '';
// clear products
productsWr.innerHTML   = '';
// clear description
description.innerHTML  = '';
// clear message
message.innerHTML      = '';

createCat();

button.setAttribute('disabled', true);
// create list categorie item
function createCat(){
  categories.forEach(el => {
    const item = document.createElement('li');
    item.setAttribute(`data-category-id`, el.id);
    item.setAttribute(`class`, 'list-group-item');
    item.textContent = el.category;
    categoriesWr.append(item);
  })
}

function filterCategory(event) {
  productsWr.classList.remove('d-none');
  productsWr.innerHTML = '';
  const catId = Number(event.target.getAttribute('data-category-id'));
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
  const visual = document.createElement('img');
  const title  = document.createElement('h2');
  const text   = document.createElement('p');
  const price  = document.createElement('strong');
  title.setAttribute('id','title');
  description.classList.remove('d-none');
  products.forEach(el => {
    if(productId === el.id){
      title.textContent = el.name;
      visual.setAttribute('src', el.image);
      visual.setAttribute('alt', 'image');
      visual.setAttribute('height', '100');
      text.textContent  = el.description;
      price.textContent = `${el.price}€`;
      description.append(title);
      description.append(visual);
      description.append(text);
      description.append(price);
    }
  });
  
  button.removeAttribute('disabled');
}

function productRegistration(event){
  event.preventDefault();
  form.classList.remove('d-none');
  this.classList.add('d-none');
}

const arr = getLs();
function selectValidation(event){
  event.preventDefault();
  const obj   = {};
  const title = document.querySelector('#description h2');
  const text  = document.querySelector('#description p');
  const price = document.querySelector('#description strong');
  const image = document.querySelector('#description img');
  const city  = document.querySelector('.form-select');
  const date  = Date.now();

  let nameIdVal = nameId.value.trim();
  if(nameIdVal !== ''){
    nameId.classList.remove('border-danger');
    nameId.classList.add('border-success');
  } else {
    nameId.classList.remove('border-success');
    nameId.classList.add('border-danger');
    return false;
  }

  if(city.selectedIndex) {
    city.classList.remove('border-danger');
    city.classList.add('border-success');
  } else {
    city.classList.remove('border-success');
    city.classList.add('border-danger');
    return false;
  }

  if(Number(composition.value) > 0){
    composition.classList.remove('border-danger');
    composition.classList.add('border-success');
  } else {
    composition.classList.remove('border-success');
    composition.classList.add('border-danger');
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

  if(Number(count.value) >= 0 && count.value != ''){
    count.classList.remove('border-danger');
    count.classList.add('border-success');
  } else {
    count.classList.remove('border-success');
    count.classList.add('border-danger');
    return false;
  }

  form.classList.add('d-none');
  const regex = /\d+\.\d+/;
  let priceInc = regex.exec(price.textContent);

  obj.id          = date;
  obj.title       = title.textContent;
  obj.description = text.textContent;
  obj.price       = `${(priceInc[0] * Number(count.value)).toFixed(2)}€`;
  obj.name        = nameId.value;
  obj.city        = city.value;
  obj.payment     = paymentValue;
  obj.composition = composition.value;
  obj.count       = count.value;
  obj.image       = image.getAttribute('src');
  obj.time        = new Date();
  
  arr.push(obj);

  setLs(arr);

  description.textContent = '';
  description.classList.add('d-none');
  message.classList.remove('d-none');
  message.textContent    = 'The product has been added to the basket';
  nameId.value           = '';
  city.value             = '';
  composition.value      = '';
  count.value            = '';
  productsWr.textContent = '';
  bag.classList.remove('d-none');
}

function getLs() {
  if(localStorage.getItem('products')){
    return JSON.parse(localStorage.getItem('products'));
  }

  return [];
}

function setLs(el) {
  localStorage.setItem('products', JSON.stringify(el));
}

function showBag() {
  categoriesWr.classList.add('d-none');
  productsWr.classList.add('d-none');
  description.classList.add('d-none');
  message.classList.add('d-none');

  const bagProducts = getLs();
  bagProducts.forEach(el => {
    const li    = document.createElement('li');
    const h3    = document.createElement('h3');
    const head  = document.createElement('div');
    const div   = document.createElement('div');
    const time  = document.createElement('span');
    const price = document.createElement('p');
    const close = document.createElement('i');

    head.classList.add('d-flex', 'justify-content-between');
    div.classList.add('d-flex', 'justify-content-between');

    li.classList.add('list-group-item', 'item-product');
    li.setAttribute('data-id', el.id);
    close.classList.add('del', 'bi', 'bi-x-circle', 'text-danger');

    h3.textContent    = el.title;
    time.textContent  = el.time;
    price.textContent = el.price;

    head.append(h3);
    head.append(close);
    div.append(time);
    div.append(price);
    li.append(head);
    li.append(div);

    selectedProducts.append(li);
  })

  bag.classList.add('d-none');
}

if(Object.keys(getLs()).length != 0){
  bag.classList.remove('d-none');
}

function itemDetail(event){
  const itemProduct   = event.target.closest('.item-product');
  const itemProductId = itemProduct.dataset.id;
  const arr           =  getLs();
  const li            = document.createElement('li');
  
  li.classList.add('list-group-item', 'item-product');

  detailsProduct.classList.remove('d-none');
  infoProductWr.classList.remove('d-none');

  detailsProduct.textContent = '';
  infoProductWr.textContent = '';

  arr.forEach(el => {
    if(itemProductId == el.id ){
      const customer    = document.createElement('h3');
      const time        = document.createElement('i');
      const cityItem    = document.createElement('p');
      const shiping     = document.createElement('p');
      const payment     = document.createElement('p');
      const count       = document.createElement('p');
      const price       = document.createElement('p');
      
      const title       = document.createElement('h3');
      const image       = document.createElement('img');
      const description = document.createElement('p');

      image.setAttribute('alt', 'image');
      image.setAttribute('height', '100');

      customer.textContent    = `Замовник : ${el.name}`;
      time.textContent        = `Дата та час замовлення : ${el.time}`;
      cityItem.textContent    = `Місто : ${el.city}`;
      shiping.textContent     = `Склад нової пошти : ${el.composition}`;
      payment.textContent     = `Спосіб оплати : ${el.payment}`;
      count.textContent       = `Кількість товару : ${el.count}`;
      price.textContent       = `Вартість товару : ${el.price}`;
   
      title.textContent       = `Назва товару : ${el.title}`;
      image.setAttribute('src', el.image);
      description.textContent = `Назва товару : ${el.description}`;
 
      detailsProduct.append(customer);
      detailsProduct.append(time);
      detailsProduct.append(cityItem);
      detailsProduct.append(shiping);
      detailsProduct.append(payment);
      detailsProduct.append(count);
      detailsProduct.append(price);

      infoProductWr.append(title);
      infoProductWr.append(image);
      infoProductWr.append(description);
    }
  })
}

function deleteItem(event) {
  const del = event.target.closest('.del');
  const arr = getLs();

  if(del){
    let indexEl;
    const itemProduct = event.target.closest('.item-product');
    const itemId      = itemProduct.dataset.id;

    arr.forEach((el,index) => {
      if(el.id === itemId){
        indexEl = el.id;
      }
    })

    arr.splice(indexEl, 1);

    detailsProduct.textContent = '';
    infoProductWr.textContent = '';
    selectedProducts.textContent = '';

    detailsProduct.classList.add('d-none');
    infoProductWr.classList.add('d-none');

    setLs(arr);
    showBag();

    if (Object.keys(arr).length == 0) {
      console.log('пуст');
      detailsProduct.textContent = '';
      infoProductWr.textContent = '';
      detailsProduct.classList.add('d-none');
      infoProductWr.classList.add('d-none');

      categoriesWr.classList.remove('d-none');
    }

    console.log('arr 2 = ', arr)
    
  }
}

categoriesWr.addEventListener('click', filterCategory);
productsWr.addEventListener('click', infoProduct);
button.addEventListener('click', productRegistration);
submit.addEventListener('click', selectValidation);
bag.addEventListener('click', showBag);
selectedProducts.addEventListener('click', itemDetail);
selectedProducts.addEventListener('click', deleteItem);
