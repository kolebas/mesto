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

  addCard(method,data,addUrl = '/cards'){
    return fetch(this._url + addUrl, {
      method: method,
      headers: this._headers,
      body: JSON.stringify(data)
    })
      .then(res => {
        if (res.ok) {          
          return res.json();          
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      }) 
  }

  deleteCard(method,cardId){
    return fetch(`${this._url}/cards/${cardId}`, {
      headers: this._headers,
      method: method,
    })
    .then(res => {
      if (res.ok) {          
        return res.json();          
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }) 
  }

  changeLikeCard(method,cardId){
    return fetch(`${this._url}/cards/likes/${cardId}`, {
      headers: this._headers,
      method: method,
    })
    .then(res => {
      if (res.ok) {          
        return res.json();          
      }
      return Promise.reject(`Ошибка: ${res.status}`); 
    }) 
  }

  editProfile(method, data, addUrl = '/users/me'){
    return fetch(this._url + addUrl, {
      method: method,
      headers: this._headers,
      body: JSON.stringify(data)
    })
      .then(res => {
        if (res.ok) {          
          return res.json();          
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then(data => {
        return data;
      })  
  }
}
