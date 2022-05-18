export default class UserInfo {
  constructor(data){
    this._name = data.name,
    this._about = data.about,
    this._avatar = data.avatar
  }

  getUserInfo(){
    const data = {
      name: this._name.textContent,
      about: this._about.textContent,
      avatar: this._avatar.src,
    }
    return data;
  }

  setUserInfo(data){
    this._name.textContent = data.name;
    this._about.textContent = data.about;
    this._avatar.src = data.avatar;
  }
  
  setAvatar(data){
    this._avatar.src = data.avatar;
  }
}