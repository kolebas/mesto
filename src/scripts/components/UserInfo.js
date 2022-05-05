export default class UserInfo {
  constructor(data){
    this._name = data.name,
    this._title = data.title
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