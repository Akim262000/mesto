export class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
    this._formList = document.querySelectorAll(this._config.formSelector);
    this._formList.forEach(() => {
    this._inputList = this._formElement.querySelectorAll(this._config.inputSelector);
    this._submitButton = this._formElement.querySelector(this._config.submitButtonSelector);

    this._setEventListeners(this._formElement);
  });
  }

    // функция, которая добавляет класс с ошибкой
  _showInputError(input, errorTextElement, validationMessage, activeErrorClass) {
    input.classList.add(this._config.errorSelector);
    errorTextElement.textContent = validationMessage;
    errorTextElement.classList.add(activeErrorClass);
  }

  // функция, которая удаляет класс с ошибкой
  _hideInputError(input, errorTextElement, activeErrorClass) {
    input.classList.remove(this._config.errorSelector);
    errorTextElement.classList.remove(activeErrorClass);
    errorTextElement.textContent = "";
  }

  _disableButton() {
    this._submitButton.classList.remove(this._config.validSubmitButtonClass);
    this._submitButton.disabled = true;
  }

  _enableButton() {
    this._submitButton.classList.add(this._config.validSubmitButtonClass);
    this._submitButton.disabled = false;
  }

    // функция, которая возвращает или убирает текст ошибки в зависимости от валидности поля ввода
  _checkInputValidity(input, activeErrorClass) {
    const errorTextElement = document.querySelector(`${this._config.errorClass}${input.id}`);

    if (!input.validity.valid) {
      this._showInputError(input, errorTextElement, input.validationMessage, activeErrorClass);
    } else {
      this._hideInputError(input, errorTextElement);
    }
  }

  // функция, которая проверяет валидность поля ввода
  _hasInvaalidInput() {
    return Array.from(this._inputList).some((input) => !input.validity.valid);
  }

  // функция, которая отключает и включает кнопку
  toggleButtonState() {
  if (!this._hasInvaalidInput(this._inputList)) {
    this._enableButton(this._submitButton, this._config.validSubmitButtonClass);
  } else {
    this._disableButton(this._submitButton, this._config.validSubmitButtonClass);
  }
}

// функция, которая принимает элемент формы и добавляет ее полям нужные обработчики
  _setEventListeners(activeErrorClass) {
    this._formElement.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  this._inputList.forEach((input) => {
    input.addEventListener("input", (e) => {
      this._checkInputValidity(input, this._config.errorSelector, this._config.errorClass, activeErrorClass);
      this.toggleButtonState();
    });
  });
}
enableValidation(activeErrorClass) {
  this._setEventListeners(this._formElement, activeErrorClass);
};
}