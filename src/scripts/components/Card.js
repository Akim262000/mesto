export default class Card {
  constructor({data, handleOpenImagePopup}, cardSelector) {
    this._title = data.title;
    this._image = data.image;
    this._cardSelector = cardSelector;
    this._handleOpenImagePopup = handleOpenImagePopup;
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
    this._elementLikeButton.classList.toggle('element__button-like_active');
  }

  // Метод слушателя кнопки Delete
  _handleDeleteCard() {
    this._element.remove();
    this._element = null;
  }
  
  _setEventListeners() {
  // Обработчик открытия попапа просмотра изображения
  this._elementImage.addEventListener('click', () => {
   this._handleOpenImagePopup(this._title, this._image);

  })
  // Слушатель кнопки удаления карточки
  this._element.querySelector('.element__button-delete').addEventListener('click', () => {
    this._handleDeleteCard();
  })
  this._elementLikeButton.addEventListener('click', () => {
    this._handleLikeCard();
  })
  }

  // Метод создания карточки
  generateCard() {
    this._element = this._getTemplate();
    this._elementLikeButton = this._element.querySelector('.element__button-like');
    this._elementImage = this._element.querySelector('.element__image');
    this._elementImage.src = this._image;
    this._elementImage.alt = this._title;
    this._element.querySelector('.element__title').textContent = this._title; 
    this._setEventListeners();
    return this._element;
  }
}

