import Popup from "./Popup";

export default class PopupWithConformation extends Popup {
  constructor() {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
  }
}