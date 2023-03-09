function showInputError(errorTextElement, validationMessage) {
  errorTextElement.textContent = validationMessage;
  errorTextElement.classList.add(activeErrorClass);
}

function hideInputError(errorTextElement, activeErrorClass) {
  errorTextElement.classList.remove(activeErrorClass);
}

function checkInputValidity(input, errorClass, activeErrorClass) {
  const errorTextElement = document.querySelector(`${errorClass}${input.name}`);
  console.log(errorTextElement);
  if(!input.validity.valid){
    showInputError(errorTextElement, input.validationMessage, activeErrorClass);
  } else {
    hideInputError(errorTextElement);
  }
}


function setEventListeners(form, inputList, errorClass, activeErrorClass) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  inputList.forEach((input) => {
    input.addEventListener("input", (e) => {
      checkInputValidity(input, errorClass, activeErrorClass);
    });
  });
}

function enableValidation(config) {
  const form = document.querySelector(config.formSelector);
  const inputList = form.querySelectorAll(config.inputSelector);

  setEventListeners(form, inputList, config.errorClass, config.activeErrorClass);
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  errorClass: '.popup__input-error_type_',
  activeErrorClass: 'popup__input-error',
  // submitButtonSelector: '.popup__button',
  // inactiveButtonClass: 'popup__button_disabled',
  // inputErrorClass: 'popup__input_type_error',
  // errorClass: 'popup__error_visible'
});