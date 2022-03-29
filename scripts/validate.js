function enableValidation(formData) {
  const forms = Array.from(document.querySelectorAll(formData.formSelector));

  forms.forEach((form) => {
      form.addEventListener('submit', (event) => handleFormSubmit(event, form));
      form.addEventListener('input', (event) => handleFormInput(event, form, formData));
  })
}


function handleFormSubmit(event){
  event.preventDefault();
}

function handleFormInput(event, form, formData){
  const input= event.target;
  showFieldError(input, formData);
  setInputError(input, formData);
  setButton(form, formData);
}

function setInputError(input, formData){
  const validity = input.validity;
  if(validity.valid){    
    input.classList.remove(formData.inputErrorClass);
  } else {    
    input.classList.add(formData.inputErrorClass);
  }
}

function showFieldError(input){
  const span = document.querySelector(`#${input.id}-error`);
  span.textContent = input.validationMessage;
}

function setButton(form, formData){
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

enableValidation(
  {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  }
);  