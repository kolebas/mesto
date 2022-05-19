export default class FormValidator{
  constructor(formData, formElement){
    this._formData = formData;
    this._form = formElement;
    this._sendFormButton = this._form.querySelector(this._formData.submitButtonSelector);
    this._inputList = this._form.querySelectorAll(this._formData.inputSelector);
  }

  _handleFormSubmit(event){
    event.preventDefault();
  }
  
  _handleFormInput(event){
    const input= event.target;
    this._showFieldError(input);
    this._setInputError(input);
    this._toggleButtonState();
  }

  resetValidation() {
    this._toggleButtonState();
    this._inputList.forEach((input) => {
      input.classList.remove(this._formData.inputErrorClass); 
    });
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
    const span = this._form.querySelector(`#${input.id}-error`);
    span.textContent = input.validationMessage;
  }
  
  _toggleButtonState(){
    const button =  this._sendFormButton;
    const isValid = this._form.checkValidity();
    if(isValid){
      button.classList.remove(this._formData.inactiveButtonClass);
      button.removeAttribute("disabled", "disabled");
    } else {
      button.classList.add(this._formData.inactiveButtonClass);    
      button.setAttribute("disabled", "disabled");
    }
  }
  enableValidation(){
    this._form.addEventListener('submit', (event) => this._handleFormSubmit(event));
    this._form.addEventListener('input', (event) => this._handleFormInput(event));
  }
}