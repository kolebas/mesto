import { imageShowCard, titleShowCard } from '../utils/constants.js';
import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(data, element){
    super(element);
    this._title = data.name;
    this._image = data.link; 
  }

  open(){
    imageShowCard.alt = this._title; 
    imageShowCard.src = this._image;
    titleShowCard.textContent = this._title;
    super.open();
    super._setEventListeners();
  }

}

export { PopupWithImage }