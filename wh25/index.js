// Створити програму для відображення результатів голосування.
// З наступними умовами:
// Як варіанти відповіді - смайлики. За замовчуванням, 5шт.
// Виведення даних - смайлики в один рядок, під ними - кількість тих, хто проголосував за кожен смайл.
// При натисканні на смайл - під ним змінюється значення лічильника.
// Реалізувати таким чином, щоб додавання нових варіантів відповіді не вело до додавання нових функцій.
// Додаткові смайлики можна взяти тут https://emojipedia.org/ 
// Підказка - треба використати event delegation
// https://github.com/vb-oiko/group-2022-09-28/tree/main/homeworks/hw25

const reactions = ["👍", "👎", "💚", "💩", "🤣", "🔥"];

const container = document.querySelector(".container");

const reactionElements = reactions.map((reaction) => {
  const wrapper = document.createElement("div");
  wrapper.classList.add('wrap-reaction');

  const button = document.createElement("button");
  button.classList.add('button');
  button.innerText = reaction;

  const counter = document.createElement("div");
  counter.classList.add("counter");

  counter.innerText = 0;
  wrapper.append(button, counter);

  return wrapper;
});

const elementTarget = (event) => {
  const target = event.target.closest('.wrap-reaction');
  
  let textCounter = target.getElementsByClassName('counter');
  let text = textCounter[0].textContent;
  
  textCounter[0].textContent = ++text;
  
  if(!target){
    return;
  }
}

reactionElements.forEach((elem) => container.appendChild(elem));
container.addEventListener('click', elementTarget);