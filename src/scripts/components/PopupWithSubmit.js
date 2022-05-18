import Popup from "./Popup.js";

export default class PopupWithSubmit extends Popup {
  constructor(handleSubmit, element){
    super(element);
    this._popup = element;
    this._handleSubmit = handleSubmit;    
    this._form = this._popup.querySelector('.popup__form');
    this._button = this._popup.querySelector('.popup__button');
  }

  setEventListeners(){
    this._button.addEventListener('click', () => {
      this._handleSubmit(this._cardId);
    });
    super.setEventListeners();
  }

  _setCardId(data){
    this._cardId = data;
  }

  close(){
    super.close();
  }
}