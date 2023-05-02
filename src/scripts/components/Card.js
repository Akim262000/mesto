export default class Card {
  constructor({data, cardSelector, userId, handleOpenImagePopup, handleDeleteCard, handleSetLike, handleRemoveLike }) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleOpenImagePopup = handleOpenImagePopup;
    this._userId = userId;
    this._cardId = data._id;
    this._cardOwnerId = data.owner._id;
    this._handleDeleteCard = handleDeleteCard;
    this._likes = data.likes;
    this._handleSetLike = handleSetLike;
    this._handleRemoveLike = handleRemoveLike;
  }

  _getTemplate() {
    this._card = document
      .querySelector(this._cardSelector)
      .content
      .querySelector(".element")
      .cloneNode(true);

    return this._card;
  }

  // Метод слушателя кнопки Delete
  deleteCard() {
    this._element.remove();
    this._element = null;
  }
  
  _setEventListeners() {
  // Обработчик открытия попапа просмотра изображения
  this._elementImage.addEventListener('click', () => {
   this._handleOpenImagePopup(this._name, this._link);

  })
  // Слушатель кнопки удаления карточки
  this._deleteButton.addEventListener('click', () => {
    this._handleDeleteCard(this._cardId);
  })
    // Слушатель кнопки Like
  this._elementLikeButton.addEventListener('click', () => {
    if(this._elementLikeButton.classList.contains('element__button-like_active')) {
      this._handleRemoveLike(this._cardId);
    } else {
      this._handleSetLike(this._cardId);
    }

  })
  }

  // Метод создания карточки
  generateCard() {
    this._element = this._getTemplate();
    this._elementLikeButton = this._element.querySelector('.element__button-like');
    this._elementImage = this._element.querySelector('.element__image');
    this._deleteButton = this._element.querySelector('.element__button-delete');
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
    this._likesNumber = this._element.querySelector('.element__like-number');
    this._element.querySelector('.element__title').textContent = this._name; 
    this._hasDeleteButton();
    this._isCardLiked();
    this._likesNumber.textContent = this._likes.length;
    this._setEventListeners();
    return this._element;
  }

// Проверка лайка
  _isCardLiked() {
    if(this._likes.some((user) => {
      return this._userId === user._id;
    })) {
      this._elementLikeButton.classList.add('element__button-like_active');
    }
  }

// Изменение количества лайков
  handleLikeCard(data) {
    this._likes = data.likes;
    this._likesNumber.textContent = this._likes.length;
    this._elementLikeButton.classList.toggle('element__button-like_active');
  }

// Проверка создателя карточки
  _hasDeleteButton() {
    if(this._userId !== this._cardOwnerId) {
      this._deleteButton.remove();
    }
  }
}

