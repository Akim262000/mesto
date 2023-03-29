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
      .querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }

  // Метод слушателя кнопки Like
  _handleLikeCard() {
    const elementLikeButton = this._element.querySelector('.element__button-like');
    elementLikeButton.classList.toggle('element__button-like_active');
  }

  // Метод слушателя кнопки Delete
  _handleDeleteCard() {
    this._element.remove();
    this._element = null;
  }

  // Метод слушателя открытия попапа просмотра изображения
  _handleOpenImagePopup() {
    this._openPopup(imagePopup);
    imagePopupImg.src = this._image;
    imagePopupImg.alt = this._title;
    imagePopupName.textContent = this._title;
  }

  // Метод слушателя закрытия попапа просмотра изображения
  _handleCloseImagePopup() {
    this._closePopup(imagePopup);
  }


  _setEventListeners() {
  // Обработчик открытия попапа просмотра изображения
  this._element.querySelector('.element__image').addEventListener('click', () => {
    this._handleOpenImagePopup();
  })
  // Обработчик открытия попапа просмотра изображения
  imagePopupCloseButton.addEventListener('click', () => {
    this._handleCloseImagePopup();
  })
  // Слушатель кнопки удаления карточки
  this._element.querySelector('.element__button-delete').addEventListener('click', () => {
    this._handleDeleteCard();
  })
  this._element.querySelector('.element__button-like').addEventListener('click', () => {
    this._handleLikeCard();
  })
  }

  // Метод создания карточки
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
  
    this._element.querySelector('.element__image').src = this._image;
    this._element.querySelector('.element__image').alt = this._title;
    this._element.querySelector('.element__title').textContent = this._title; 

    return this._element;
  }
}
