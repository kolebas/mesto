export default class Api{
  constructor(options){
    this._url = options.baseUrl,
    this._headers = options.headers
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } 
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then((data) => {
        return data
      }) 
  }

  addCard(method,data){
    return fetch(`${this._url}/cards`, {
      method: method,
      headers: this._headers,
      body: JSON.stringify(data)
    })
      .then(res => {
        if (!res.ok) {
          return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json(); 
      }) 
  }

  deleteCard(method,cardId){
    return fetch(`${this._url}/cards/${cardId}`, {
      method: method,
    })
  }

  editProfile(method, data){
    return fetch(`${this._url}/users/me`, {
      method: method,
      headers: this._headers,
      body: JSON.stringify(data)
    })
      .then(res => {
        if (!res.ok) {          
          return Promise.reject(`Ошибка: ${res.status}`);
        } 
        return res.json();
      })
      .then(data => {
        return data;
      })  
  }
}
