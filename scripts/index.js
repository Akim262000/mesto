import {initialCards, popupProfile, profileEditButton, profileCloseButton, profileForm,
  nameInput, jobInput, profileName, profileDescription, popupNewElement, elementForm, titleInput,
   imageInput, openAddButton, elementCloseButton, elements, buttonElement, imagePopup, 
   imagePopupCloseButton, imagePopupImg, imagePopupName, config} from './constants.js';
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
// Открыть popup
const openPopup = (popup) => {
  popup.classList.add("popup_opened");
  document.addEventListener('keyup', handleEscape);
};
// Закрыть popup
const closePopup = (popup) => {
  popup.classList.remove("popup_opened");
  document.removeEventListener('keyup', handleEscape);
};
// Функция закрытия popup кликом на Esc
const handleEscape = (evt) => {
  evt.preventDefault();
  if(evt.key === 'Escape') {
    const popupActive = document.querySelector('.popup_opened');
    closePopup(popupActive);
  }
}
// Функция закрытия popup кликом на Overlay
const closeByOverlayClick = (evt) => {
  const popupActive = document.querySelector('.popup_opened');
  if (evt.target.classList.contains('popup')) {
    closePopup(popupActive);
  }
};


// function createCard(titleValue, imageValue) {
//   const cardElement = elementTemplate.querySelector(".element").cloneNode(true);
//   const elementImage = cardElement.querySelector(".element__image");
//   const elementTitle = cardElement.querySelector(".element__title");
//   const elementLikeButton = cardElement.querySelector(".element__button-like");
//   const deleteButton = cardElement.querySelector(".element__button-delete");
//   elementTitle.textContent = titleValue;
//   elementImage.src = imageValue;
//   elementImage.alt = titleValue;
//   // Обработчик кнопки лайк
//   elementLikeButton.addEventListener("click", (evt) => {
//     evt.target.classList.toggle("element__button-like_active");
//   });
//   // Обработчик кнопки Delete
//   deleteButton.addEventListener("click", deleteButtonClick);
//   //функция открытия попапа просмотра изображений
//   const openImagePopup = () => {
//     openPopup(imagePopup);
//     imagePopupImg.src = elementImage.src;
//     imagePopupImg.alt = elementImage.alt;
//     imagePopupName.textContent = elementTitle.textContent;
//   };
//   // Обработчик открытия попапа просмотра изображения
//   elementImage.addEventListener("click", openImagePopup);
//   // возвращаем готовую карточку
//   return cardElement;
// }


// function createElement(title, image) {
//   // const newElement = createCard(title, image)
//   elements.prepend(createCard(title, image));
// }
// const renderInitialCards = (arr) => {
//   arr.map((el) => {
//     return createElement(el.title, el.image);
//   });
// };


const createCard = (title, image) => {
  const card = new Card(title, image,'.element-template', openPopup, closePopup).generateCard();
  elements.prepend(card);
}

const renderInitialCards = (arr) => {
  arr.forEach((item) => {
    createCard(item.title, item.image);
  })
};


// // Удвляем елемент
// function deleteButtonClick(event) {
//   // Находим элемент
//   const button = event.target;
//   const element = button.closest(".element");
//   // Удаляем элемент
//   element.remove();
// }


// Обработчик отправки формы
function handlerCardFormSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const title = titleInput.value;
  const image = imageInput.value
  // Очищаем поля ввода
  form.reset();
  // Создаем новый элемент
  createCard(title, image);
    // находим кнопку submit и деактивируем ее после создания карточки
  // Закрываем popup
  closePopup(popupNewElement);
  cardFormValidator.toggleButtonState();
}
// Вносим данные в форму
function fillProfileInputs() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
}
// Обработчик отправки формы
function handlerProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  // Закрываем popup
  closePopup(popupProfile); 
}

// Прикрепляем обработчик к форме
profileForm.addEventListener("submit", handlerProfileFormSubmit);
// Прикрепляем обработчик к форме
popupNewElement.addEventListener("submit", handlerCardFormSubmit);


// Обработчики событий
// Обработчик открытия попапа редактирования профиля
profileEditButton.addEventListener("click", () => {
  openPopup(popupProfile);
  fillProfileInputs();
});
// Обработчик закрытия попапа редактирования профиля
profileCloseButton.addEventListener("click", () => {
  closePopup(popupProfile);
});
// Обработчик открытия попапа создания элемента
openAddButton.addEventListener("click", () => {
  // buttonElement.setAttribute('disabled', 'disabled');
  cardFormValidator.toggleButtonState();
  openPopup(popupNewElement);
});
// Обработчик закрытия попапа создания элемента
elementCloseButton.addEventListener("click", () => {
  closePopup(popupNewElement);
  // evt.target.reset();
});


// Обработчик закрытия попапа просмотра изображения
imagePopupCloseButton.addEventListener("click", () => {
  closePopup(imagePopup);
});


// Обработчик закрытия попапа редактирования профиля кликом на overlay
popupProfile.addEventListener('mousedown', closeByOverlayClick);
// Обработчик закрытия попапа создания элемента кликом на overlay
popupNewElement.addEventListener('mousedown', closeByOverlayClick);
// Обработчик закрытия попапа просмотра изображения кликом на overlay
imagePopup.addEventListener('mousedown', closeByOverlayClick);

// автоматическая загрузка карточек на страницу
renderInitialCards(initialCards);

// валидация формы редактирования профиля
const profileFormValidator = new FormValidator(config, profileForm);
profileFormValidator.enableValidation();

// валидация формы добавления новой карточки
const cardFormValidator = new FormValidator(config, popupNewElement);
cardFormValidator.enableValidation();