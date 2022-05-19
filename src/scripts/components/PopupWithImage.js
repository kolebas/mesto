import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(element){
    super(element);
    this._popup = element;
    this._title = this._popup.querySelector('#card-title');
    this._image = this._popup.querySelector('#card-image');
  }

  open(data){
    this._title.alt = data.name; 
    this._image.src = data.link;
    this._title.textContent = data.name;
    super.open();
  }
}

export { PopupWithImage }