import { Notify } from 'notiflix/build/notiflix-notify-aio';

const randomNum = Math.floor(Math.random() * 100);

const refs = {
  button: document.querySelector('#btn'),
  input: document.querySelector('#user-num-input').value,
};

refs.button.addEventListener('click', onRandom);

function onRandom() {
  if (randomNum < Number(refs.input)) {
    Notify.failure('Менше');
    return;
  }
  if (randomNum > Number(refs.input)) {
    Notify.failure('Більше');
    return;
  }
  if (randomNum === Number(refs.input)) {
    Notify.success('Вгадали');
    return;
  }
}
