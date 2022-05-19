import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(handleSubmit, element){
    super(element);
    this._popup = element;
    this._handleSubmit = handleSubmit;    
    this._form = this._popup.querySelector('.popup__form');
    this._submitButton = this._popup.querySelector('.popup__button');
  }

  _getInputValues(){
    const inputs = Array.from(this._form.elements);
    return inputs;
  }

  setEventListeners(){
    this._form.addEventListener('submit', (event) => {
      this._handleSubmit(event, this._getInputValues());
    });
    super.setEventListeners();
  }

  close(){
    this._form.reset();
    super.close();
  }
}