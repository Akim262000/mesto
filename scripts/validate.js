// функция, которая добавляет класс с ошибкой
function showInputError(errorTextElement, validationMessage, activeErrorClass) {
  errorTextElement.textContent = validationMessage;
  errorTextElement.classList.add(activeErrorClass);
}
// функция, которая удаляет класс с ошибкой
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
// функция, которая возвращает или убирает текст ошибки в зависимости от валидности поля ввода
function checkInputValidity(input, errorClass, activeErrorClass) {
  const errorTextElement = document.querySelector(`${errorClass}${input.name}`);
  if(!input.validity.valid){
    showInputError(errorTextElement, input.validationMessage, activeErrorClass);
  } else {
    hideInputError(errorTextElement);
  }
}
// функция, которая проверяет валидность поля ввода
function hasInvaalidInput(inputList) {
  return Array.from(inputList).some((input) => !input.validity.valid);
}
// функция, которая отключает и включает кнопку
function toggleButtonState(submitButton, validSubmitButtonClass, inputList) {
  if(!hasInvaalidInput(inputList)) {
    enableButton(submitButton, validSubmitButtonClass);
  } else {
    disableButton(submitButton, validSubmitButtonClass);
  }
}

// функция, которая принимает элемент формы и добавляет ее полям нужные обработчики
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
// функция, которая находит все формы на странице и обрабатывает их
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
  validSubmitButtonClass: 'popup__submit-button_valid',
});