export default class FormValidator{
  constructor(formData, formElement){
    this._formData = formData;
    this._form = formElement;
    this._sendFormButton = this._form.querySelector('.popup__button');
    this._inputList = this._form.querySelectorAll('.popup__input');
  }

  _handleFormSubmit(event){
    event.preventDefault();
  }
  
  _handleFormInput(event){
    const input= event.target;
    this._showFieldError(input, this._formData);
    this._setInputError(input, this._formData);
    this._setButton(this._form, this._formData);
  }

  resetValidation() {
    this._toggleButtonState();
    this._inputList.forEach((input) => {
      input.classList.remove(this._formData.inputErrorClass); 
    });

  }

  _toggleButtonState(){
    this._sendFormButton.classList.add('popup__button_disabled');
    this._sendFormButton.setAttribute("disabled", "disabled");
  }
  
  _setInputError(input){
    const validity = input.validity;
    if(validity.valid){    
      input.classList.remove(this._formData.inputErrorClass);
    } else {    
      input.classList.add(this._formData.inputErrorClass);
    }
  }
  
  _showFieldError(input){
    const span = document.querySelector(`#${input.id}-error`);
    span.textContent = input.validationMessage;
  }
  
  _setButton(form, formData){
    const button = form.querySelector(formData.submitButtonSelector);
    const isValid = form.checkValidity();
    if(isValid){
      button.classList.remove(formData.inactiveButtonClass);
      button.removeAttribute("disabled", "disabled");
    } else {
      button.classList.add(formData.inactiveButtonClass);    
      button.setAttribute("disabled", "disabled");
    }
  }
  enableValidation(form){
    form.addEventListener('submit', (event) => this._handleFormSubmit(event));
    form.addEventListener('input', (event) => this._handleFormInput(event));
  }
}