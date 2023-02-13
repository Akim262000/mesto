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
// Обработчики событий
profileEditButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
// Обработчик отправки формы
function submitFormHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
// Закрываем popup
  closePopup();
}
// Прикрепляем обработчик к форме
form.addEventListener('submit', submitFormHandler);