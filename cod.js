const form = document.querySelector('form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (usernameInput.value === '') {
    setError(usernameInput, 'Please enter username');
  } else if (usernameInput.value !== 'new_user') {
    setError(usernameInput, 'Please enter a valid username');
  } else {
    setValid(usernameInput);
  }

  if (passwordInput.value === '') {
    setError(passwordInput, 'Please enter password');
  } else if (passwordInput.value !== '123456789') {
    setError(passwordInput, 'Please enter a valid password');
  } else {
    setValid(passwordInput);
  }

  const errors = document.querySelectorAll('.error');
  if (errors.length > 0) {
    const errorList = document.createElement('ul');
    errorList.classList.add('error-list');
    errors.forEach((error) => {
      const errorMessage = document.createElement('li');
      errorMessage.innerText = error.dataset.errorMessage;
      errorList.appendChild(errorMessage);
    });

    form.appendChild(errorList);
  } else {
    const successMessage = document.createElement('p');
    successMessage.innerText = 'Successful login!';
    successMessage.classList.add('success-message');
    form.appendChild(successMessage);
  }
});

function setError(input, message) {
  input.classList.remove('valid');
  input.classList.add('error');
  input.dataset.errorMessage = message;

  const errorIcon = document.createElement('i');
  errorIcon.classList.add('fas', 'fa-times', 'error-icon');
  input.insertAdjacentElement('afterend', errorIcon);
}

function setValid(input) {
  input.classList.remove('error');
  input.classList.add('valid');

  const validIcon = document.createElement('i');
  validIcon.classList.add('fas', 'fa-check', 'valid-icon');
  input.insertAdjacentElement('afterend', validIcon);
}
