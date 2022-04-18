import {closePopup, openPopup} from "./utils.js";
import {Card} from "./Card.js";
import {FormValidator} from "./FormValidator.js";
const buttonEditProfile = document.querySelector('.discover__edit-button');
const buttonNewCard = document.querySelector('.profile__add-button');
const cardTemplate = '#card';
const popupShowCard = document.querySelector('#popup-show-card');
const titleShowCard = popupShowCard.querySelector('#card-title');
const imageShowCard = popupShowCard.querySelector('#card-image');
const popupProfile = document.querySelector('#popup-edit-profile');
const popupNewCard = document.querySelector('#popup-new-card');
const cardsSection = document.querySelector('.cards');
const discoverName = document.querySelector('.discover__title');
const discoverJob = document.querySelector('.discover__subtitle');
const inputDiscoverName = popupProfile.querySelector('#discover');
const inputDiscoverJob = popupProfile.querySelector('#job');
const formNewCard = popupNewCard.querySelector('.popup__form');
const popups = document.querySelectorAll('.popup');
const titleNewCard = popupNewCard.querySelector('#title');
const linkNewCard = popupNewCard.querySelector('#link');
const formData =   {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}
const formValidators = {}

function renderCard(cards){
  cards.forEach((item) => {
    cardsSection.prepend(createCard(item));
  })
}

function createCard(cardData){
  const card = new Card(cardData, cardTemplate, handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
}

function handleCardClick(name, link){
  titleShowCard.textContent = name;
  imageShowCard.alt = name; 
  imageShowCard.src = link;   
  openPopup(popupShowCard);
}

function validationForm(formData){
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement)
    const formName = formElement.getAttribute('name')
    formValidators[formName] = validator;
   validator.enableValidation(formElement);
  });
};
enableValidation(formData);
}

function showFormEdit(){ 
  inputDiscoverName.value = discoverName.textContent;
  inputDiscoverJob.value  = discoverJob.textContent;   
  openPopup(popupProfile)
}

function showFormNewCard(){
  openPopup(popupNewCard);
}

function saveProfile (evt) {
  evt.preventDefault();
  discoverName.textContent = inputDiscoverName.value;
  discoverJob.textContent = inputDiscoverJob.value;
  closePopup(popupProfile);
}

function saveCard(evt, form){
  evt.preventDefault();
  const title = titleNewCard.value
  const link = linkNewCard.value; 
  const card = [{
    name: title,
    link: link,
  }] 
  renderCard(card);
  form.reset();
  disableSaveButton(form);
  closePopup(popupNewCard);
}

function disableSaveButton(){
  formValidators['profile'].resetValidation();
  formValidators['new-card'].resetValidation();
}




buttonEditProfile.addEventListener('click', () =>showFormEdit('#edit-profile'));
buttonNewCard.addEventListener('click', () => showFormNewCard('#add-card'));
popupProfile.querySelector('.popup__form').addEventListener('submit', saveProfile );
formNewCard.addEventListener('submit', (evt) => { saveCard (evt, formNewCard)} );
popups.forEach((item) => {
  item.querySelector('.popup__close-button').addEventListener('click', () => { closePopup(item) });
}) 
renderCard(initialCards);
validationForm(formData);