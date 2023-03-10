function showInputError(errorTextElement, validationMessage, activeErrorClass) {
  errorTextElement.textContent = validationMessage;
  errorTextElement.classList.add(activeErrorClass);
}

function hideInputError(errorTextElement, activeErrorClass) {
  errorTextElement.classList.remove(activeErrorClass);
  errorTextElement.textContent = "";
}

function disableButton(submitButton, validSubmitButtonClass) {
  submitButton.classList.remove(validSubmitButtonClass);
  submitButton.disabled = true;
}

function enableButton(submitButton, validSubmitButtonClass) {
  submitButton.classList.add(validSubmitButtonClass);
  submitButton.disabled = false;
}

function checkInputValidity(input, errorClass, activeErrorClass) {
  const errorTextElement = document.querySelector(`${errorClass}${input.name}`);
  if(!input.validity.valid){
    showInputError(errorTextElement, input.validationMessage, activeErrorClass);
  } else {
    hideInputError(errorTextElement);
  }
}

function hasInvaalidInput(inputList) {
  return Array.from(inputList).some((input) => !input.validity.valid);
}

function toggleButtonState(submitButton, validSubmitButtonClass, inputList) {
  if(!hasInvaalidInput(inputList)) {
    enableButton(submitButton, validSubmitButtonClass);
  } else {
    disableButton(submitButton, validSubmitButtonClass);
  }
}


function setEventListeners(form, inputList, errorClass, activeErrorClass, validSubmitButtonClass, submitButton) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  inputList.forEach((input) => {
    input.addEventListener("input", (e) => {
      checkInputValidity(input, errorClass, activeErrorClass);
      toggleButtonState(submitButton, validSubmitButtonClass, inputList);
    });
  });
}

function enableValidation(config) {
  const form = document.querySelector(config.formSelector);
  const inputList = form.querySelectorAll(config.inputSelector);
  const submitButton = form.querySelector(config.submitButtonSelector);

  setEventListeners(form, inputList, config.errorClass, config.activeErrorClass, config.validSubmitButtonClass, submitButton);
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  errorClass: '.popup__input-error_type_',
  activeErrorClass: 'popup__input-error_active',
  submitButtonSelector: '.popup__submit-button',
  validSubmitButtonClass: 'popup__submit-button_valid'
  // submitButtonSelector: '.popup__button',
  // inactiveButtonClass: 'popup__button_disabled',
  // inputErrorClass: 'popup__input_type_error',
  // errorClass: 'popup__error_visible'
});