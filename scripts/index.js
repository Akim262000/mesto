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

const elements = document.querySelector('.elements');

cards.forEach(function(card) {
  const newCard = document.querySelector('#elementTemplate').content.cloneNode(true);
  const cardTitle = newCard.querySelector('.element__title');
  cardTitle.textContent = card.title;
  const cardImage = newCard.querySelector('.element__image');
  cardImage.setAttribute('src', card.image);
  elements.append(newCard);
})

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

// let popupNewCard = document.querySelector('.popup_new_card')

// let profileAddButton = document.querySelector('.profile__add-button');

// // Находим поля формы в DOM
// let titleInput = form.querySelector('#title');
// let linkInput = form.querySelector('#image');
// // Находим поля профиля
// let elementTitle = document.querySelector('.element__title');
// let elementImage = document.querySelector('.element__image');


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
// profileAddButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
