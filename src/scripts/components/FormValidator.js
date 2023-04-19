export default class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
    this._inputList = this._formElement.querySelectorAll(this._config.inputSelector);
    this._submitButton = this._formElement.querySelector(this._config.submitButtonSelector);
  }

    // функция, которая добавляет класс с ошибкой
  _showInputError(input, validationMessage, activeErrorClass) {
    const errorTextElement = this._formElement.querySelector(`${this._config.errorClass}${input.id}`);
    input.classList.add(this._config.errorSelector);
    errorTextElement.textContent = validationMessage;
    errorTextElement.classList.add(activeErrorClass);
  }

  // функция, которая удаляет класс с ошибкой
  _hideInputError(input, activeErrorClass) {
    const errorTextElement = this._formElement.querySelector(`${this._config.errorClass}${input.id}`);
    input.classList.remove(this._config.errorSelector);
    errorTextElement.classList.remove(activeErrorClass);
    errorTextElement.textContent = "";
  }

    // функция, которая возвращает или убирает текст ошибки в зависимости от валидности поля ввода
  _checkInputValidity(input) {
    // const errorTextElement = document.querySelector(`${this._config.errorClass}${input.id}`);

    if (!input.validity.valid) {
      this._showInputError(input, input.validationMessage);
    } else {
      this._hideInputError(input);
    }
  }

  // функция, которая проверяет валидность поля ввода
  _hasInvaalidInput() {
    return Array.from(this._inputList).some((input) => !input.validity.valid);
  }

  // функция, которая отключает и включает кнопку
  toggleButtonState() {
  if (this._hasInvaalidInput()) {
    this._submitButton.setAttribute('disabled', 'disabled');
  } else {
    this._submitButton.removeAttribute('disabled');
  }
}

// функция, которая принимает элемент формы и добавляет ее полям нужные обработчики
  _setEventListeners() {

  this._inputList.forEach((input) => {
    input.addEventListener("input", (e) => {
      this._checkInputValidity(input);
      this.toggleButtonState();
    });
  });
}
enableValidation() {
  this._setEventListeners();
};
}