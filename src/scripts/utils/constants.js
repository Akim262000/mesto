import SaintPetersburg from "../../images/Saint-Petersburg.jpg";
import RostovOnDon from "../../images/Rostov-on-Don.jpg";
import Elbrus from "../../images/Elbrus.jpg";
import Pervomayskiy from "../../images/Pervomayskiy.jpg";
import Taganrog from "../../images/Taganrog.jpg";
import Kushevskaya from "../../images/Kushevskaya.jpg";


const initialCards = [
  {
    image: SaintPetersburg,
    title: "Санкт-Петербург",
  },
  {
    image: RostovOnDon,
    title: "Ростов-на-Дону",
  },
  {
    image: Elbrus,
    title: "Гора Эльбрус",
  },
  {
    image: Pervomayskiy,
    title: "п. Первомайский",
  },
  {
    image: Taganrog,
    title: "Таганрог",
  },
  {
    image: Kushevskaya,
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