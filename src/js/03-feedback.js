import throttle from 'lodash.throttle';
const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  message: document.querySelector('.feedback-form textarea'),
};

const formData = {
  email: '',
  message: '',
};
const STORAGE_KAY = 'feedback-form-state';

refs.email.addEventListener('input', throttle(onFormInput, 500));
refs.message.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);
addTextToInput();

function onFormInput(e) {
  formData.email = refs.email.value;
  formData.message = refs.message.value;

  localStorage.setItem(STORAGE_KAY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();

  if (localStorage.getItem(STORAGE_KAY)) {
    console.log(`email: ${refs.email.value}, message: ${refs.message.value}`);
  }
  e.target.reset();
  localStorage.removeItem(STORAGE_KAY);
}

function addTextToInput() {
  const saveInput = JSON.parse(localStorage.getItem(STORAGE_KAY));
  if (saveInput) {
    refs.email.value = saveInput.email || '';
    refs.message.value = saveInput.message || '';
  }
}
