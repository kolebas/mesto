function enableValidation(formData) {
  const forms = Array.from(document.querySelectorAll(formData.formSelector));

  forms.forEach((form) => {
      form.addEventListener('submit', (event) => handleFormSubmit(event, form));
      form.addEventListener('input', (event) => handleFormInput(event, form, formData));
  })
}


function handleFormSubmit(event, form){
  event.preventDefault();
  const isValid = form.checkValidity();
  console.log(isValid);
  if(isValid && form.name === 'new-card'){
    saveCard(event, form);
  }
  if(isValid && form.name === 'profile'){
    saveProfile(event);
  }
}

function handleFormInput(event, form, formData){
  const input= event.target;
  setError(input);  
  showFieldError(input);
  setButton(form, formData);
}

function setError(input) {
  const validity = input.validity;
  input.setCustomValidity('');

  if(validity.tooShort || validity.tooLong){
    const currentLength = input.value.length;
    const min = input.getAttribute('minlength');
    const max = input.getAttribute('maxlength');
  }

  if(validity.typeMismatch){
    showFieldError(input);
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