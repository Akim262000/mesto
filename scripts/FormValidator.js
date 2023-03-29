export class FormValidator {
  constructor(config, form) {
    this._config = config;
    this._form = form;
    this._inputList = this._form.querySelectorAll(this._config.inputSelector);
    this._submitButton = this._form.querySelector(this._config.submitButtonSelector);
  };
  // функция, которая добавляет класс с ошибкой
  _showInputError(input, errorSelector, errorTextElement, validationMessage, activeErrorClass) {
    input.classList.add(this._config.errorSelector);
    errorTextElement.textContent = validationMessage;
    errorTextElement.classList.add(activeErrorClass);
  };
  
  // функция, которая удаляет класс с ошибкой
  _hideInputError(input, errorTextElement) {
    input.classList.remove(this._config.errorSelector);
    errorTextElement.classList.remove(this._config.activeErrorClass);
    errorTextElement.textContent = "";
  };
  
  _disableButton(submitButton, validSubmitButtonClass) {
    submitButton.classList.remove(this._config.validSubmitButtonClass);
    submitButton.disabled = true;
  };
  
  _enableButton(submitButton, validSubmitButtonClass) {
    submitButton.classList.add(this._config.validSubmitButtonClass);
    submitButton.disabled = false;
  };
  // добавление или удаление текста ошибки в зависимости от валидности поля ввода
  _checkInputValidity(input, errorClass, activeErrorClass) {
    const errorTextElement = this._form.querySelector(`${errorClass}${input.id}`);
  
    if (!input.validity.valid) {
      showInputError(input, this._config.errorSelector, errorTextElement, input.validationMessage, activeErrorClass);
    } else {
      hideInputError(input, this._config.errorSelector, errorTextElement);
    }
  };
  // функция, которая проверяет валидность поля ввода
  _hasInvaalidInput() {
  return Array.from(this._inputList).some((input) => !input.validity.valid);
}
  // функция, которая отключает и включает кнопку
  toggleButtonState() {
    if (!hasInvaalidInput(this._inputList)) {
      enableButton(this._submitButton, this._config.validSubmitButtonClass);
    } else {
      disableButton(this._submitButton, this._config.validSubmitButtonClass);
    }
  };
  // функция, которая принимает элемент формы и добавляет ее полям нужные обработчики
  _setEventListeners() {
  this._form.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  this._inputList.forEach((input) => {
    input.addEventListener("input", (e) => {
      this._checkInputValidity(input, this._config.errorSelector, this._config.errorClass, this._config.activeErrorClass);
      this.toggleButtonState(this._config.submitButton, this._config.validSubmitButtonClass, this._config.inputList);
    });
  });
}
  // валидация формы
  enableValidation() {
    this._setEventListeners();
  };
}