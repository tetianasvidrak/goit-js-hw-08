import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');

let formData = {
  email: '',
  message: '',
};

const storageData = JSON.parse(localStorage.getItem('feedback-form-state'));

if (storageData) {
  formData = { ...storageData };
  const [email, message] = formRef.elements;
  email.value = formData.email;
  message.value = formData.message;
}

const onInputFormHandler = event => {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const onSubmitBtnHandler = event => {
  event.preventDefault();
  console.log(formData);
  formData = {
    email: '',
    message: '',
  };
  formRef.reset();
  localStorage.removeItem('feedback-form-state');
};

formRef.addEventListener('input', throttle(onInputFormHandler, 500));
formRef.addEventListener('submit', onSubmitBtnHandler);
