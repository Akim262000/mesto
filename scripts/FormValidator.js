export class FormValidator {
  constructor(config, form) {
    this._config = config;
    this.form = form;
    this._inputList = this.form.querySelectorAll(this._config.inputSelector);
    this._buttonElement = this.form.querySelectorAll(this._config.submitButtonSelector);
  }

  _showInputError(form, input) {
    input.classList.add(this._config.errorSelector);
    errorTextElement.textContent = validationMessage;
    errorTextElement.classList.add(this._config.activeErrorClass);
  }

  _hideInputError() {
    input.classList.remove(this._config.errorSelector);
    errorTextElement.classList.remove(this._config.activeErrorClass);
    errorTextElement.textContent = "";
  }

  _disableButton(submitButton, validSubmitButtonClass) {
    submitButton.classList.remove(this._config.validSubmitButtonClass);
    submitButton.disabled = true;
  }

  _enableButton(submitButton, validSubmitButtonClass) {
    submitButton.classList.add(this._config.validSubmitButtonClass);
    submitButton.disabled = false;
  }

  _checkInputValidity(input, errorSelector, errorClass, activeErrorClass) {
    const errorTextElement = this.form.querySelector(`${errorClass}${input.id}`);

    if (!input.validity.valid) {
      showInputError(input, errorSelector, errorTextElement, input.validationMessage, activeErrorClass);
    } else {
      hideInputError(input, errorSelector, errorTextElement);
    }
  }

  _hasInvaalidInput() {
    return Array.from(this._inputList).some((input) => !input.validity.valid);
  }

  toggleButtonState(submitButton, validSubmitButtonClass, inputList) {
    if (!hasInvaalidInput(this._inputList)) {
      enableButton(submitButton, validSubmitButtonClass);
    } else {
      disableButton(submitButton, validSubmitButtonClass);
    }
  }

  _setEventListeners(form, inputList, errorSelector, errorClass, activeErrorClass, validSubmitButtonClass, submitButton) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });

    inputList.forEach((input) => {
      input.addEventListener("input", (e) => {
        this._checkInputValidity(input, errorSelector, errorClass, activeErrorClass);
        this.toggleButtonState(submitButton, validSubmitButtonClass, inputList);
      });
    });
  }

  // функция, которая находит все формы на странице и обрабатывает их
  enableValidation(config) {
    const formList = document.querySelectorAll(config.formSelector);
    formList.forEach((form) => {
      const inputList = form.querySelectorAll(config.inputSelector);
      const submitButton = form.querySelector(config.submitButtonSelector);

      setEventListeners(
        form,
        inputList,
        config.errorSelector,
        config.errorClass,
        config.activeErrorClass,
        config.validSubmitButtonClass,
        submitButton
      );
    });
  }
}
