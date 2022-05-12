export default class UserInfo {
  constructor(data){
    this._name = data.name,
    this._about = data.about
  }

  getUserInfo(){
    const data = {
      name: this._name.textContent,
      about: this._about.textContent,
    }
    return data;
  }

  setUserInfo(data){
    this._name.textContent = data.name;
    this._about.textContent = data.about;
  }
}