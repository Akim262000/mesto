const initialCards = [
  {
    image: "./images/Saint-Petersburg.jpg",
    title: "Санкт-Петербург",
  },
  {
    image: "./images/Rostov-on-Don.jpg",
    title: "Ростов-на-Дону",
  },
  {
    image: "./images/Elbrus.jpg",
    title: "Гора Эльбрус",
  },
  {
    image: "./images/Pervomayskiy.jpg",
    title: "п. Первомайский",
  },
  {
    image: "./images/Taganrog.jpg",
    title: "Таганрог",
  },
  {
    image: "./images/Kushevskaya.jpg",
    title: "ст. Кущевская",
  },
];

// Находим popup
const popupProfile = document.querySelector(".popup_type_profile");
// Находим кнопку открытия popup
const profileEditButton = document.querySelector(".profile__edit-button");
// Находим форму в DOM
const profileForm = popupProfile.querySelector(".popup__form");
// Находим поля формы в DOM
const nameInput = profileForm.querySelector("#name");
const jobInput = profileForm.querySelector("#description");
// Находим popup_type_element
const popupNewElement = document.querySelector(".popup_type_element");
// Находим форму в DOM
const elementForm = popupNewElement.querySelector(".popup__form");
// Находим кнопку открытия popup
const openAddButton = document.querySelector(".profile__add-button");

const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  errorClass: ".popup__input-error_type_",
  errorSelector: "popup__input-error_type",
  submitButtonSelector: ".popup__submit-button",
  validSubmitButtonClass: "popup__submit-button_valid",
};

export {initialCards, popupProfile, profileEditButton, profileForm,
   nameInput, jobInput, popupNewElement, elementForm, openAddButton, config};