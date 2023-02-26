const cards = [
  {
    image: './images/Saint-Petersburg.jpg',
    title: 'Санкт-Петербург'
  },
  {
    image: './images/Rostov-on-Don.jpg',
    title: 'Ростов-на-Дону'
  },
  {
    image: './images/Elbrus.jpg',
    title: 'Гора Эльбрус'
  },
  {
    image: './images/Pervomayskiy.jpg',
    title: 'п. Первомайский'
  },
  {
    image: './images/Taganrog.jpg',
    title: 'Таганрог'
  },
  {
    image: './images/Kushevskaya.jpg',
    title: 'ст. Кущевская'
  }
]

let elementLikeButton;
const elements = document.querySelector('.elements');

const viewImagePopup = document.querySelector('.popup_type_image');


const viewImagePopupCloseBtn = viewImagePopup.querySelector('.popup__close');

const togglePopup = (somePopup) => {
  somePopup.classList.toggle('popup_opened');
};

// Создаем элемент
function createElement(element) {
  const newElement = document.querySelector('#elementTemplate').content.cloneNode(true);
  const elementTitle = newElement.querySelector('.element__title');
  elementTitle.textContent = element.title;
  const elementImage = newElement.querySelector('.element__image');
  elementImage.setAttribute('src', element.image);
  // Находим кнопку лайка
  elementLikeButton = newElement.querySelector('.element__button-like');
  // Добавляем активное состояние лайку
  elementLikeButton.addEventListener('click',(evt) => {
    evt.target.classList.toggle('element__button-like_active');
  });
  // находим изображение попапа просмотра
  const viewImagePopupImg = viewImagePopup.querySelector('.popup__image');
  // находим название изображения попапа просмотра
  const viewImagePopupName = viewImagePopup.querySelector('.popup__caption');


  //функция открытия попапа просмотра изображений
  const openViewImagePopup = () => {
    togglePopup(viewImagePopup);

    viewImagePopupImg.src = elementImage.src;
    viewImagePopupName.textContent = elementTitle.textContent;

    // листенер закрытия попапа просмотра изображения
    viewImagePopupCloseBtn.onclick = () => togglePopup(viewImagePopup);
  };

  // листенер открытия попапа просмотра изображения
  elementImage.addEventListener('click', openViewImagePopup);


  // Находим кнопку удаления
  const deleteButton = newElement.querySelector('.element__button-delete');
  deleteButton.addEventListener('click', deleteButtonClick);
  elements.prepend(newElement);
}

cards.forEach(createElement); 
// Удвляем елемент
function deleteButtonClick(event) {
// Находим элемент
  const button = event.target;
  const element = button.closest('.element');
// Удаляем элемент
  element.remove();
}

// Находим popup
let popup = document.querySelector('.popup');
// Находим кнопку открытия popup
let profileEditButton = document.querySelector('.profile__edit-button');
// Находим кнопку закрытия popup
let popupCloseButton = popup.querySelector('.popup__close');
// Находим форму в DOM
let form = popup.querySelector('.popup__form');
// Находим поля формы в DOM
let nameInput = form.querySelector('#name');
let jobInput = form.querySelector('#description');
// Находим поля профиля
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');



let popupNewCard = document.querySelector('.popup_new_card')

let openAddButton = document.querySelector('.profile__add-button');

const closeAddButton = popupNewCard.querySelector('.popup__close');

const addNewElementButton = popupNewCard.querySelector('.popup__submit-button');

const addElementForm = popupNewCard.querySelector('.popup__form');

// openAddButton.addEventListener('click',() => {
//   popupNewCard.classList.add('popup_opened');
// })

// closeAddButton.addEventListener('click',() => {
//   popupNewCard.classList.remove('popup_opened');
// })

openAddButton.addEventListener('click', openPopupNewCard);

closeAddButton.addEventListener('click',closePopupNewCard);

function openPopupNewCard() {
  popupNewCard.classList.add('popup_opened');
}
// Закрываем popup
function closePopupNewCard() {
  popupNewCard.classList.remove('popup_opened');
}
// // Находим поля формы в DOM
// let titleInput = form.querySelector('#title');
// let linkInput = form.querySelector('#image');
// // Находим поля профиля
// let elementTitle = document.querySelector('.element__title');
// let elementImage = document.querySelector('.element__image');

popupNewCard.addEventListener('submit',handleFormSubmit)

function handleFormSubmit(event) {
  event.preventDefault();
  form = event.target;
  const title = form.querySelector('#title').value;
  const image = form.querySelector('#image').value;
  const element = {
      title, image
  }
  event.target.reset(); 

  createElement(element);

  closePopupNewCard();
}

// Вносим данные в форму
function addValue() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
}
// Открываем popup
function openPopup() {
  popup.classList.add('popup_opened');
  addValue();
}
// Закрываем popup
function closePopup() {
  popup.classList.remove('popup_opened');
}
// Обработчик отправки формы
function submitFormHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  // Закрываем popup
  closePopup();
}
// Прикрепляем обработчик к форме
form.addEventListener('submit', submitFormHandler);
// Обработчики событий
profileEditButton.addEventListener('click', openPopup);

popupCloseButton.addEventListener('click', closePopup);
