
let popup = document.querySelector('.popup');
let popupCloseButton = popup.querySelector('.popup__close');
let profileEditButton = document.querySelector('.profile__edit-button');

function togglePopup() {
  popup.classList.toggle('popup_opened');
}

profileEditButton.addEventListener('click', togglePopup);
popupCloseButton.addEventListener('click', togglePopup);
