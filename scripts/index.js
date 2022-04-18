import {closePopup, closePopupEsc, closePopupOverlay} from "./utils.js";
import {Card} from "./Card.js";
import {FormValidator} from "./FormValidator.js";
const buttonEditProfile = document.querySelector('.discover__edit-button');
const buttonNewCard = document.querySelector('.profile__add-button');
const cardTemplate = '#card';
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


function renderCard(cards){
  cards.forEach((item) => {
    const card = new Card(item, cardTemplate);
    const cardElement = card.generateCard();
    cardsSection.prepend(cardElement);
  })
}

function validationForm(formData){
  const forms = Array.from(document.querySelectorAll(formData.formSelector));
  forms.forEach((item) => {
    const form = new FormValidator(formData, item);
    form.enableValidation(item);
})
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

function disableSaveButton(form){
  const button = form.querySelector('.popup__button');
  button.classList.add('popup__button_disabled');
  button.setAttribute("disabled", "disabled");
}

function openPopup(popup){
  document.addEventListener('keydown', closePopupEsc);
  document.addEventListener('mousedown', closePopupOverlay);
  popup.classList.add('popup_opened');
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