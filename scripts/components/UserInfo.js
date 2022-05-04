export default class UserInfo {
  constructor(){
    this._name = document.querySelector('.discover__title'),
    this._title = document.querySelector('.discover__subtitle')
  }

  getUserInfo(){
    const data = {
      name: this._name.textContent,
      title: this._title.textContent,
    }
    return data;
  }

  setUserInfo(data){
    this._name.textContent = data.name;
    this._title.textContent = data.title;
  }
}

export { UserInfo }