export default class UserInfo {
  constructor(data){
    this._name = data.name,
    this._about = data.about,
    this._avatar = data.avatar,
    this._id = data._id
  }

  getUserInfo(){
    const data = {
      name: this._name.textContent,
      about: this._about.textContent,
      avatar: this._avatar.src,
      _id: this._id
    }
    return data;
  }

  setProfile({ name, about, avatar, _id }){
    this._name.textContent = name;
    this._about.textContent = about;
    this._avatar.src = avatar;
    this._id = _id
  }
}