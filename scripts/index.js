import {initialCards, profileEditButton, profileForm,
  nameInput, jobInput, popupNewElement, openAddButton, config} from './constants.js';
import Card from './Card.js';
import { FormValidator } from './FormValidator.js';
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from '../components/PopupWithImage.js';
import Section from "../components/Section.js";
import UserInfo from '../components/UserInfo.js';


// // Открыть popup
// const openPopup = (popup) => {
//   popup.classList.add("popup_opened");
//   document.addEventListener('keyup', handleEscape);
// };
// // Закрыть popup
// const closePopup = (popup) => {
//   popup.classList.remove("popup_opened");
//   document.removeEventListener('keyup', handleEscape);
// };
// // Функция закрытия popup кликом на Esc
// const handleEscape = (evt) => {
//   evt.preventDefault();
//   if(evt.key === 'Escape') {
//     const popupActive = document.querySelector('.popup_opened');
//     closePopup(popupActive);
//   }
// }
// // Функция закрытия popup кликом на Overlay
// const closeByOverlayClick = (evt) => {
//   const popupActive = document.querySelector('.popup_opened');
//   if (evt.target.classList.contains('popup')) {
//     closePopup(popupActive);
//   }
// };

// const createCard = (title, image) => {
//   return new Card(title, image,'.element-template', openPopup, closePopup).generateCard();
// }

// const renderInitialCards = (arr) => {
//   arr.forEach((item) => {
//     const card = createCard(item.title, item.image);
//     elements.prepend(card);
//   })
// };

function fillInEditProfileFormInputs({name, job}) {
  nameInput.value = name;
  jobInput.value = job;
};


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
  job: '.profile__discription'
});


const editProfilePopup = new PopupWithForm({
  popupSelector: '.popup_type_profile',
  handleFormSubmit: (dataForm) => {
    profileInfo.setUserInfo({
      name: dataForm.name,
      job: dataForm.job
    });
    editProfilePopup.close();
  }
});
editProfilePopup.setEventListeners();

profileEditButton.addEventListener('click', () => {
  const info = profileInfo.getUserInfo();
  fillInEditProfileFormInputs({
    name: info.name,
    job: info.job
  });
  editProfilePopup.open();
});




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
  addCardPopup.close();
})


// // // Обработчик отправки формы
// // function handlerCardFormSubmit(event) {
// //   event.preventDefault();
// //   const form = event.target;
// //   const title = titleInput.value;
// //   const image = imageInput.value
// //   // Очищаем поля ввода
// //   form.reset();
// //   // Создаем новый элемент
// //   const card = createCard(title, image);
// //   elements.prepend(card);
// //     // находим кнопку submit и деактивируем ее после создания карточки
// //   // Закрываем popup
// //   closePopup(popupNewElement);
// //   cardFormValidator.toggleButtonState();
// // }





// // // Вносим данные в форму
// // function fillProfileInputs() {
// //   nameInput.value = profileName.textContent;
// //   jobInput.value = profileDescription.textContent;
// // }
// // // Обработчик отправки формы
// // function handlerProfileFormSubmit(evt) {
// //   evt.preventDefault();
// //   profileName.textContent = nameInput.value;
// //   profileDescription.textContent = jobInput.value;
// //   // Закрываем popup
// //   closePopup(popupProfile); 
// // }

// // // Прикрепляем обработчик к форме
// // profileForm.addEventListener("submit", handlerProfileFormSubmit);
// // // Прикрепляем обработчик к форме
// // popupNewElement.addEventListener("submit", handlerCardFormSubmit);


// // Обработчики событий
// // Обработчик открытия попапа редактирования профиля
// profileEditButton.addEventListener("click", () => {
//   openPopup(popupProfile);
//   fillProfileInputs();
// });
// // Обработчик закрытия попапа редактирования профиля
// profileCloseButton.addEventListener("click", () => {
//   closePopup(popupProfile);
// });
// // Обработчик открытия попапа создания элемента
// openAddButton.addEventListener("click", () => {
//   cardFormValidator.toggleButtonState();
//   openPopup(popupNewElement);
// });
// // Обработчик закрытия попапа создания элемента
// elementCloseButton.addEventListener("click", () => {
//   closePopup(popupNewElement);
// });

// // Обработчик закрытия попапа просмотра изображения
// imagePopupCloseButton.addEventListener("click", () => {
//   closePopup(imagePopup);
// });

// // Обработчик закрытия попапа редактирования профиля кликом на overlay
// popupProfile.addEventListener('mousedown', closeByOverlayClick);
// // Обработчик закрытия попапа создания элемента кликом на overlay
// popupNewElement.addEventListener('mousedown', closeByOverlayClick);
// // Обработчик закрытия попапа просмотра изображения кликом на overlay
// imagePopup.addEventListener('mousedown', closeByOverlayClick);

const cardsList = new Section({
  items: initialCards,
  renderer: (item) => {
    cardsList.addItem(createCard(item));
  },
}, '.elements');
cardsList.renderItems();




// // автоматическая загрузка карточек на страницу
// renderInitialCards(initialCards);


const viewImagePopup = new PopupWithImage('.popup_type_image');
viewImagePopup.setEventListeners();

// валидация формы редактирования профиля
const profileFormValidator = new FormValidator(config, profileForm);
profileFormValidator.enableValidation();

// валидация формы добавления новой карточки
const cardFormValidator = new FormValidator(config, popupNewElement);
cardFormValidator.enableValidation();