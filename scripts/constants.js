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
// Находим кнопку закрытия popup
const profileCloseButton = popupProfile.querySelector(".popup__close");
// Находим форму в DOM
const profileForm = popupProfile.querySelector(".popup__form");
// Находим поля формы в DOM
const nameInput = profileForm.querySelector("#name");
const jobInput = profileForm.querySelector("#description");
// Находим поля профиля
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
// Находим popup_type_element
const popupNewElement = document.querySelector(".popup_type_element");
// Находим форму в DOM
const elementForm = popupNewElement.querySelector(".popup__form");
// Находим поля формы в DOM
const titleInput = elementForm.querySelector("#title");
const imageInput = elementForm.querySelector("#image");
// Находим кнопку открытия popup
const openAddButton = document.querySelector(".profile__add-button");
// Находим кнопку закрытия popup
const elementCloseButton = popupNewElement.querySelector(".popup__close");
// Находим обработчик отправки формы
// const addNewElementButton = popupNewElement.querySelector(".popup__submit-button");
const elements = document.querySelector(".elements");
// const elementTemplate = document.querySelector("#elementTemplate").content;
// Находим кнопку сохранения popup
const buttonElement = popupNewElement.querySelector('.popup__submit-button');
// Находим popup_type_image
const imagePopup = document.querySelector(".popup_type_image");
// Находим кнопку закрытия popup_type_image
const imagePopupCloseButton = imagePopup.querySelector(".popup__close");
// находим изображение попапа просмотра
const imagePopupImg = imagePopup.querySelector(".popup__image");
// находим название изображения попапа просмотра
const imagePopupName = imagePopup.querySelector(".popup__figcaption");


export {initialCards, popupProfile, profileEditButton, profileCloseButton, profileForm,
   nameInput, jobInput, profileName, profileDescription, popupNewElement, elementForm, titleInput,
    imageInput, openAddButton, elementCloseButton, elements, buttonElement, imagePopup, 
    imagePopupCloseButton, imagePopupImg, imagePopupName};