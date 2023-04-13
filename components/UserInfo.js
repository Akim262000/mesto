export default class UserInfo {
  constructor({name, description}){
    this._name = document.querySelector('#name');
    this._description = document.querySelector('#description');
  }
  // возвращает объект с данными пользователя
  getUserInfo() {
    const profileInfo = {
    name: this._name.textContent,
    description: this._description.textContent
    }
    return profileInfo;
  }
  // принимает новые данные пользователя и добавляет их на страницу
  setUserInfo({name, description}){
    this._name.textContent = name;
    this._description.textContent = description;
  }
}