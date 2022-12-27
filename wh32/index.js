// Використовуючи API https://jsonplaceholder.typicode.com/ зробити пошук поста за ід.
// Ід має бути введений в інпут (валідація: ід від 1 до 100) Якщо знайдено пост, то 
// вивести на сторінку блок з постом і зробити кнопку для отримання комкоментарів до посту.
// Зробити завдання використовуючи проміси, перехопити помилки.

const postNumber = document.getElementById('search');
const button     = document.querySelector('[type="submit"]');
const postWrap   = document.getElementById('post-wrap');
const postHold   = document.getElementById('post-hold');
const form       = document.querySelector('form');
const textarea   = document.getElementById('textarea');
const send       = document.getElementById('send');

const getPost = (url) => 
  new Promise((resolve, reject) => 
    fetch(url)
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(error => reject(error))
  )
  
function validateInput(event) {
  event.preventDefault();

  const value = postNumber.value;

  if (value>0 && value<=100) {
    postNumber.classList.add('bg-success');
    postNumber.classList.remove('bg-danger');
  }else{
    postNumber.classList.add('bg-danger');
    postNumber.classList.remove('bg-success');
    return false;
  }

  getPost(`https://jsonplaceholder.typicode.com/posts/${Number(value)}`)
    .then(post => {
      console.log(post)
      postWrap.setAttribute('id', post.id);
      postWrap.classList.remove('d-none');
      const title = document.createElement('h2');
      const p     = document.createElement('p');

      title.textContent = post.title;
      p.textContent = post.body;

      postHold.append(title);
      postHold.append(p);

      form.classList.add('d-none');

      return postHold;
    })
    .catch(error => console.error('error = ', error))
}

function addMessage(event) {
  event.preventDefault();
  const p = document.createElement('p')
  if(textarea.value) {
    textarea.classList.remove('bg-danger');
  }else{
    textarea.classList.add('bg-danger');
    return false;
  }
  p.textContent = textarea.value;
  postHold.append(p);
  textarea.value = '';
}

button.addEventListener('click', validateInput);
send.addEventListener('click', addMessage);