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
// Находим кнопку открытия popup
const openAddButton = document.querySelector(".profile__add-button");
// Находим кнопку закрытия popup
const elementCloseButton = popupNewElement.querySelector(".popup__close");
// Находим обработчик отправки формы
const addNewElementButton = popupNewElement.querySelector(".popup__submit-button");
const elements = document.querySelector(".elements");
const elementTemplate = document.querySelector('#elementTemplate').content;
// Находим popup_type_image
const imagePopup = document.querySelector(".popup_type_image");
// Находим кнопку закрытия popup_type_image
const imagePopupCloseButton = imagePopup.querySelector(".popup__close");
// находим изображение попапа просмотра
const imagePopupImg = imagePopup.querySelector(".popup__image");
// находим название изображения попапа просмотра
const imagePopupName = imagePopup.querySelector(".popup__figcaption");
// Открыть popup
const openPopup = (popup) => {
  popup.classList.add("popup_opened");
}
// Закрыть popup 
const closePopup = (popup) => {
  popup.classList.remove("popup_opened");
}
function createCard(titleValue, imageValue) {
  const cardElement = elementTemplate.querySelector('.element').cloneNode(true);
  const elementImage = cardElement.querySelector(".element__image");
  const elementTitle = cardElement.querySelector(".element__title");
  const elementLikeButton = cardElement.querySelector(".element__button-like");
  const deleteButton = cardElement.querySelector(".element__button-delete");
  elementTitle.textContent = titleValue;
  elementImage.src = imageValue;
  elementImage.alt = titleValue;
// Обработчик кнопки лайк
  elementLikeButton.addEventListener("click", (evt) => {
    evt.target.classList.toggle("element__button-like_active");
  });
// Обработчик кнопки Delete
deleteButton.addEventListener("click", deleteButtonClick);
//функция открытия попапа просмотра изображений
const openimagePopup = () => {
  openPopup(imagePopup);
  imagePopupImg.src = elementImage.src;
  imagePopupImg.alt = elementImage.alt;
  imagePopupName.textContent = elementTitle.textContent;
};
// листенер открытия попапа просмотра изображения
elementImage.addEventListener("click", openimagePopup);
// листенер закрытия попапа просмотра изображения
imagePopupCloseButton.addEventListener("click",() => {
    closePopup(imagePopup)
});
  // возвращаем готовую карточку
return cardElement
}
function createElement(title, image) {
  // const newElement = createCard(title, image)
  elements.prepend(createCard(title, image));
}
const renderInitialCards = (arr) => {
  arr.map((el) => {
  return createElement(el.title, el.image);
  });
};
// Удвляем елемент
function deleteButtonClick(event) {
  // Находим элемент
  const button = event.target;
  const element = button.closest(".element");
  // Удаляем элемент
  element.remove();
}
// Обработчик отправки формы
function handlerElementFormSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const title = form.querySelector("#title").value;
  const image = form.querySelector("#image").value;
  const element = {
    title,
    image,
  };
  // Очищаем поля ввода
  form.reset();
  // Создаем новый элемент
  createElement(title, image);
  // Закрываем popup
  closePopup(popupNewElement);
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
popupNewElement.addEventListener("submit", handlerElementFormSubmit);
// Обработчики событий
profileEditButton.addEventListener("click", () => {
  openPopup(popupProfile);
  fillProfileInputs();
})
profileCloseButton.addEventListener('click', () => {
  closePopup(popupProfile);
})
openAddButton.addEventListener('click', () => {
  openPopup(popupNewElement);
})
elementCloseButton.addEventListener('click', () => {
  closePopup(popupNewElement);
})
// автоматическая загрузка карточек на страницу
renderInitialCards(initialCards);