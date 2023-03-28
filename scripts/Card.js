import {imagePopupImg, imagePopupName, imagePopup, imagePopupCloseButton} from './constants.js';

export class Card {
  constructor(title, image, cardSelector, openPopup, closePopup) {
    this._container = document.querySelector(cardSelector);
    this._title = title;
    this._image = image;
    this._cardSelector = cardSelector;
    this._openPopup = openPopup;
    this._closePopup = closePopup;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);


  return cardElement;
  }

    // метод слушателя кнопки "лайк"
  _handleLikeCard() {
    const elementLikeButton = this._cardElement.querySelector(".element__button-like");
    elementLikeButton.classList.toggle("element__button-like_active");
  }

  // метод слушателя кнопки "удалить"
  _handleDeleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  // метод слушателя открытия попапа просмотра изображения
  _handleOpenPopup() {
    imagePopupImg.src = this._image;
    imagePopupImg.alt = this._title;
    imagePopupName.textContent = this._title;
    this._openPopup(imagePopup);
  }

  // метод слушателя закрытия попапа просмотра изображения
  _handleClosePopup() {
    imagePopupImg.src = '';
    imagePopupImg.alt = '';
    imagePopupName.textContent = '';
    this._closePopup(imagePopup);
  }

  _setEventListener() {
    this._cardElement.querySelector('.element__image').addEventListener('click', () => {
      this._handleOpenPopup();
    })

    imagePopupCloseButton.addEventListener('click', () => {
      this._handleClosePopup();
    })

    this._cardElement.querySelector('.element__button-delete').addEventListener('click', () => {
      this._handleDeleteCard();
    })

    this._cardElement.querySelector('.element__button-like').addEventListener('click', () => {
      this._handleLikeCard();
    })
  }

  generateCard() {
    this._cardElement = this._getTemplate();
    this._setEventListener();

    this._cardElement.querySelector('.element__image').src = this._image;
    this._cardElement.querySelector('.element__img').alt = this._title;
    this._cardElement.querySelector('.element__title').textContent = this._title;

    return this._cardElement;
  }
}