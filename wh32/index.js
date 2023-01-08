// Використовуючи API 
//  зробити пошук поста за ід.
// Ід має бути введений в інпут (валідація: ід від 1 до 100) Якщо знайдено пост, то 
// вивести на сторінку блок з постом і зробити кнопку для отримання комкоментарів до посту.
// Зробити завдання використовуючи проміси, перехопити помилки.

const postNumber      = document.getElementById('search');
const button          = document.querySelector('[type="submit"]');
const postWrap        = document.getElementById('post-wrap');
const postHold        = document.getElementById('post-hold');
const form            = document.querySelector('form');
const textarea        = document.getElementById('textarea');
const send            = document.getElementById('send');
const commentsWrap    = document.getElementById('comments-wrap');
const getCommentsPost = document.getElementById('get-comment');
const url             = 'https://jsonplaceholder.typicode.com/posts';

function validate(event) {
  event.preventDefault();
  postWrap.innerHTML = '';
  const value = Number(postNumber.value);

  if (value>0 && value<=100) {
    postNumber.classList.add('bg-success');
    postNumber.classList.remove('bg-danger');
    fetchPosts(value);
  }else{
    postNumber.classList.add('bg-danger');
    postNumber.classList.remove('bg-success');
    return false;
  }
}

async function fetchPosts(numberPost){
  try {
    const response = await fetch(url)
    const data     = await response.json()
    postWrap.classList.remove('d-none')
    data.forEach((el) => {
      if(Number(numberPost) === el.id){
        const id                = document.createElement('i');
        const title             = document.createElement('h2');
        const body              = document.createElement('p');
        const buttonGetComments = document.createElement('button');
        
        id.textContent    = `Post ID: ${el.id}`;
        title.textContent = el.title;
        body.textContent  = el.body;
        buttonGetComments.classList.add('btn', 'btn-primary');
        buttonGetComments.textContent = 'Get Comments';
        
        postWrap.append(id);
        postWrap.append(title);
        postWrap.append(body);
        postWrap.append(buttonGetComments);

        buttonGetComments.addEventListener('click', ()=>{
          const urlPost = `https://jsonplaceholder.typicode.com/posts/${numberPost}/comments`;
          async function commentsPost() {
            try {
              const responsePost = await fetch(urlPost)
              const dataPost     = await responsePost.json(); 
              const commentsWrap = document.createElement('div');
              commentsWrap.classList.add('mt-3', 'p-3', 'bg-primary', 'bg-opacity-10', 'text-dark', 'rounded-3');

              dataPost.forEach((el)=> {
                const itemMessage = document.createElement('div');
                itemMessage.classList.add('my-3','p-2', 'bg-primary', 'bg-opacity-40', 'text-dark', 'rounded-3');
                const idMessage = document.createElement('i');
                idMessage.textContent = `Message Id:${el.id}`;
                const nameMessage = document.createElement('h3');
                nameMessage.textContent = el.name;
                const bodyMessage = document.createElement('p');
                bodyMessage.textContent = el.body;
                const email = document.createElement('a');
                email.classList.add('text-white');
                email.setAttribute('href',`mailto:${el.email}`);
                email.textContent = el.email;

                itemMessage.append(idMessage);
                itemMessage.append(nameMessage);
                itemMessage.append(email);
                itemMessage.append(bodyMessage);

                commentsWrap.append(itemMessage);
              })
              postWrap.append(commentsWrap)

            }catch (error) {
              console.error(error);
            }
          }
          commentsPost();
        })
      }
    });
  } catch (error) {
    console.error(error);
  }
}

button.addEventListener('click', validate);