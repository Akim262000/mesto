import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({popupSelector, handleFormSubmit}){
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popup.querySelector('.popup__form');
    this._inputList = this._popupForm.querySelectorAll('.popup__input');
    this._submitFormButton = this._popupForm.querySelector('.popup__submit-button');
    this._submitFormButtonText = this._submitFormButton.textContent;
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    })

    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    })
  }

// Закрытие попапа
  close() {
    super.close();
    this._popupForm.reset();
  }

// Изменение кнопки во время загрузки
  loading(isLoading) {
    if(isLoading) {
      this._submitFormButton.textContent = 'Сохранение...'
    } else {
      this._submitFormButton.textContent = this._submitFormButtonText;
    }
  }
}