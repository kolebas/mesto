import '../pages/index.css';
import Card from "./components/Card.js";
import FormValidator from "./components/FormValidator.js";
import Section from './components/Section.js';
import PopupWithImage from './components/PopupWithImage.js';
import PopupWithForm from './components/PopupWithForm.js';
import UserInfo from "./components/UserInfo.js";
import {
  cardsData,
  buttonEditProfile,
  buttonNewCard,
  cardTemplate,
  popupProfile,
  popupNewCard,
  cardsSection,
  inputDiscoverName,
  inputDiscoverJob,
  formData,
  formValidators,
} from './utils/constants.js';

const cards = new Section({
  items: cardsData,
  renderer: (item) => {
    const card = new Card(item, cardTemplate, handleCardClick);
    const cardElement = card.generateCard();
    cards.addItem(cardElement);
  } 
}, cardsSection)

const values = new UserInfo();

function handleCardClick(data, popupElement){
  const popup = new PopupWithImage(data, popupElement);
  const popupOpened = popup.open();
  return popupOpened;
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
  inputDiscoverName.value = values.getUserInfo().name;
  inputDiscoverJob.value  = values.getUserInfo().title;  
  const popup = new PopupWithForm(saveProfile, popupProfile);
  const popupOpened = popup.open();
  return popupOpened;
}

function showFormNewCard(){
  const popupAddCard = new PopupWithForm(saveCard, popupNewCard);  
  const popupOpened = popupAddCard.open();
  return popupOpened;
}

function saveProfile (evt, inputs) {
  evt.preventDefault();
  const data = {
    name: inputs.find(item => item.name === "discover").value,
    title: inputs.find(item => item.name === "job").value
  }
  values.setUserInfo(data);
}

function saveCard(evt, inputs){
  evt.preventDefault();
  const data = {
    name: inputs.find(item => item.name === "title").value,
    link: inputs.find(item => item.name === "link").value
  }
  cardsData.push(data);
  cards.renderCards();
  disableSaveButton();
}

function disableSaveButton(){
  formValidators['profile'].resetValidation();
  formValidators['new-card'].resetValidation();
}

buttonEditProfile.addEventListener('click', () => showFormEdit());
buttonNewCard.addEventListener('click', () => showFormNewCard());
validationForm(formData);    
cards.renderCards();