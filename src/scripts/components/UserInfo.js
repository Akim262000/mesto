
export default class UserInfo {
  constructor({name, description, avatar}) {
    this._name = document.querySelector(name);
    this._description = document.querySelector(description);
    this._avatar = document.querySelector(avatar);
  }
  // возвращает объект с данными пользователя
  getUserInfo() {
    const profileInfo = {
      name: this._name.textContent,
      description: this._description.textContent,
      avatar: this._avatar.src
    }
    return profileInfo;
  }
  
  // принимает новые данные пользователя и добавляет их на страницу
  setUserInfo(data){
    this._name.textContent = data.name;
    this._description.textContent = data.about;
    this._avatar.src = data.avatar;
  }
}