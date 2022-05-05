import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(element){
    super(element);
    this._title = document.querySelector('#card-title');
    this._image = document.querySelector('#card-image');
  }

  open(data){
    this._title.alt = data.name; 
    this._image.src = data.link;
    this._title.textContent = data.name;
    super.open();
  }

}

export { PopupWithImage }