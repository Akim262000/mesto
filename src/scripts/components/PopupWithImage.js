import Popup from "../components/Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector){
    super(popupSelector);
    // находим изображение попапа просмотра
    this._popupImage = this._popup.querySelector(".popup__image");
    // находим название изображения попапа просмотра
    this._popupTitle = this._popup.querySelector(".popup__figcaption");
  }

  // Метод слушателя открытия попапа просмотра изображения
  open(name, link) {
    this._popupImage.src = link;
    this._popupImage.alt = name;
    this._popupTitle.textContent = name;
    super.open();
  }
}