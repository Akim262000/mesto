import './index.css';

import {initialCards, profileEditButton, profileForm,
  nameInput, jobInput, popupNewElement, openAddButton, config} from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from '../components/PopupWithImage.js';
import Section from "../components/Section.js";
import UserInfo from '../components/UserInfo.js';

// Заносим данные в форму попапа редактирования профиля
function fillInEditProfileFormInputs({name, description}) {
  nameInput.value = name;
  jobInput.value = description;
};

// Создание новой карточки
const createCard = (data) => {
  const card = new Card({
    data: data,
    handleOpenImagePopup: (title, image) => {
      viewImagePopup.open(title, image);
    }
  }, '.element-template');
  const cardElement = card.generateCard();
  return cardElement;
};

// создание экземпляра класса, отвечающего за отображение информации о пользователе
const profileInfo = new UserInfo({
  name: '.profile__name',
  description: '.profile__description'
});
// Создание попапа редактирования профиля
const editProfilePopup = new PopupWithForm({
  popupSelector: '.popup_type_profile',
  handleFormSubmit: (dataForm) => {
    profileInfo.setUserInfo({
      name: dataForm.name,
      description: dataForm.description
    });
    editProfilePopup.close();
  }
});
editProfilePopup.setEventListeners();

profileEditButton.addEventListener('click', () => {
  const info = profileInfo.getUserInfo();
  fillInEditProfileFormInputs({
    name: info.name,
    description: info.description
  });
  editProfilePopup.open();
});
// Создание попапа добавления новой карточки
const addCardPopup = new PopupWithForm({
  popupSelector: ".popup_type_element",
  handleFormSubmit: (formData) => {
    cardsList.addItem(createCard(formData));
    addCardPopup.close();
  }
});
// добавляем слушатели этому попапу:
addCardPopup.setEventListeners();

openAddButton.addEventListener('click', () => {
  cardFormValidator.toggleButtonState();
  addCardPopup.open();
})
// Создание карточек из массива
const cardsList = new Section({
  items: initialCards,
  renderer: (item) => {
    cardsList.addItem(createCard(item));
  },
}, '.elements');
cardsList.renderItems();

const viewImagePopup = new PopupWithImage('.popup_type_image');
viewImagePopup.setEventListeners();

// валидация формы редактирования профиля
const profileFormValidator = new FormValidator(config, profileForm);
profileFormValidator.enableValidation();

// валидация формы добавления новой карточки
const cardFormValidator = new FormValidator(config, popupNewElement);
cardFormValidator.enableValidation();