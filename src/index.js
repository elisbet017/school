// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// const refs = {
//   button: document.querySelector('#btn'),
//   input: document.querySelector('#user-num-input'),
// };
// const randomNum = Math.floor(Math.random() * 100);

// let count = 0;

// refs.button.addEventListener('click', onRandom);

// function onRandom() {
//   count += 1;

//   if (Number(refs.input.value) > randomNum) {
//     Notify.failure('Введене число більше');
//   }
//   if (Number(refs.input.value) < randomNum) {
//     Notify.failure('Введене число менше');
//   }
//   if (Number(refs.input.value) === randomNum) {
//     Notify.success('Вгадали');
//   }
//   Notify.info(`Кількість спроб: ${count}`);
// }

const refs = {
  button: document.querySelector('#btn'),
  input: document.querySelector('#user-num-input'),
  result: document.querySelector('#result'),
};
const randomNum = Math.floor(Math.random() * 100);

let count = 0;

refs.button.addEventListener('click', onRandom);

function onRandom() {
  count += 1;

  if (Number(refs.input.value) > randomNum) {
    alert('Введене число більше');
  }
  if (Number(refs.input.value) < randomNum) {
    refs.result.innerHTML += 'Введене число менше';
    alert('Введене число менше');
  }
  if (Number(refs.input.value) === randomNum) {
    refs.result.innerHTML += 'Вгадали';
    alert('Вгадали');
  }
      alert(`Кількість спроб: ${count}`);
}

