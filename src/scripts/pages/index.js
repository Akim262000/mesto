import './index.css';

import {profileEditButton, profileForm,
  nameInput, jobInput, popupNewElement, openAddButton, avatarForm, avatarEditButton, avatar, config} from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from '../components/PopupWithImage.js';
import Section from "../components/Section.js";
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api';
import PopupWithConformation from '../components/PopupWithConformation';

// API
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-65',
  headers: {
    authorization: 'fd37681a-44a9-4fd1-a72b-1b69f417c0ca',
    'Content-Type': 'application/json'
  }
});

let userId;

//Загрузка готовых карточек с сервера
Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then(([initialCards, userData]) => {
    profileInfo.setUserInfo(userData);
    userId = userData._id;
    cardsList.renderItems(initialCards);
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`);
  });

// создание экземпляра класса, отвечающего за отображение информации о пользователе
const profileInfo = new UserInfo({
  name: '.profile__name',
  description: '.profile__description',
  avatar: '.profile__avatar'
});

// Заносим данные в форму попапа редактирования профиля
function fillInEditProfileFormInputs({name, description}) {
  nameInput.value = name;
  jobInput.value = description;
};

// Попап редактирования аватара
const editAvatarPopup = new PopupWithForm({
  popupSelector: '.popup_type_avatar',
  handleFormSubmit: (data) => {
    editAvatarPopup.loading(true);
    api.editAvatar(data)
    .then((data) => {
      avatar.src = data.avatar;
      editAvatarPopup.close();
    })
    .catch((err) => {
      console.log(`Ошибка ${err}`);
    })
    .finally(() => {
      editAvatarPopup.loading(false);
    });
  }
});
editAvatarPopup.setEventListeners();

avatarEditButton.addEventListener('click', () => {
  avatarFormValidator.toggleButtonState();
  editAvatarPopup.open();
});


profileEditButton.addEventListener('click', () => {
  const info = profileInfo.getUserInfo();
  fillInEditProfileFormInputs({
    name: info.name,
    description: info.description
  });
  editProfilePopup.open();
});



// Создание новой карточки
const createCard = (data) => {
  const card = new Card({
    data: data,
    cardSelector: '.element-template',
    userId: userId,
    handleOpenImagePopup: (name, link) => {
      viewImagePopup.open(name, link);
    },
    handleDeleteCard: (cardId) => {
      deleteCardPopup.open();
      deleteCardPopup.submitCallback(() => {
        api.deleteCard(cardId)
          .then(() => {
            deleteCardPopup.close();
            card.deleteCard();
          })
          .catch((err) => {
            console.log(`Ошибка ${err}`);
          });
      });
    },
    handleSetLike: (cardId) => {
      api.setLike(cardId)
        .then((data) => {
          card.handleLikeCard(data);
        })
        .catch((err) => {
          console.log(`Ошибка ${err}`);
        });
    },
    handleRemoveLike: (cardId) => {
      api.deleteLike(cardId)
        .then((data) => {
          card.handleLikeCard(data);
        })
        .catch((err) => {
          console.log(`Ошибка ${err}`);
        });
    }
  });
  const cardElement = card.generateCard();
  return cardElement;
};

// Создание карточек из массива
const cardsList = new Section({
  renderer: (card) => {
    cardsList.addItem(createCard(card));
  },
}, '.elements');


// Попам подтверждения удаления карточки
const deleteCardPopup = new PopupWithConformation({
  popupSelector: '.popup_type_delete'
});
deleteCardPopup.setEventListeners();

// Создание попапа редактирования профиля
const editProfilePopup = new PopupWithForm({
  popupSelector: '.popup_type_profile',
  handleFormSubmit: (dataForm) => {
    editProfilePopup.loading(true);
    api.editUserInfo(dataForm)
    .then((dataForm) => {
      profileInfo.setUserInfo(dataForm);
      editProfilePopup.close();
    })
    .catch((err) => {
      console.log(`Ошибка ${err}`);
    })
    .finally(() => {
      editProfilePopup.loading(false);
    });
  }
});
editProfilePopup.setEventListeners();



// Создание попапа добавления новой карточки
const addCardPopup = new PopupWithForm({
  popupSelector: ".popup_type_element",
  handleFormSubmit: (formData) => {
    addCardPopup.loading(true);
    api.addCard(formData)
    .then((formData) => {
      cardsList.addItem(createCard(formData));
      addCardPopup.close();
    })
    .catch((err) => {
      console.log(`Ошибка ${err}`);
    })
    .finally(() => {
      addCardPopup.loading(false);
    });
  }
});
// добавляем слушатели этому попапу:
addCardPopup.setEventListeners();

openAddButton.addEventListener('click', () => {
  cardFormValidator.toggleButtonState();
  addCardPopup.open();
})

const viewImagePopup = new PopupWithImage('.popup_type_image');
viewImagePopup.setEventListeners();

// валидация формы редактирования профиля
const profileFormValidator = new FormValidator(config, profileForm);
profileFormValidator.enableValidation();

// валидация формы добавления новой карточки
const cardFormValidator = new FormValidator(config, popupNewElement);
cardFormValidator.enableValidation();

// валидация формы редактирования аватара
const avatarFormValidator = new FormValidator(config, avatarForm);
avatarFormValidator.enableValidation();
