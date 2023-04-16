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
  open(title, image) {
    super.open();
    this._popupImage.src = image;
    this._popupImage.alt = title;
    this._popupTitle.textContent = title;
  }
}