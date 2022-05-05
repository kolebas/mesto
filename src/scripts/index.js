import '../pages/index.css';
import Card from "./components/Card.js";
import FormValidator from "./components/FormValidator.js";
import Section from './components/Section.js';
import Popup from './components/Popup.js';
import PopupWithImage from './components/PopupWithImage.js';
import PopupWithForm from './components/PopupWithForm.js';
import UserInfo from "./components/UserInfo.js";
import {
  cardsData,
  buttonEditProfile,
  buttonNewCard,
  cardTemplate,
  popupCard,
  popupProfile,
  popupNewCard,
  cardsSection,
  discoverName,
  discoverJob,
  inputDiscoverName,
  inputDiscoverJob,
  formData,
  formValidators,
} from './utils/constants.js';

const popupEditProfile = new PopupWithForm(saveProfile, popupProfile);
popupEditProfile.setEventListeners();
const popupAddCard = new PopupWithForm(saveCard, popupNewCard);
popupAddCard.setEventListeners();
const popupShowCard = new PopupWithImage(popupCard);
popupShowCard.setEventListeners();

function createCard(item) {
  const card = new Card(item, cardTemplate, handleCardClick);
  const cardElement = card.generateCard();
  return cardElement
}

const cards = new Section({
  items: cardsData,
  renderer: (item) => {
    const cardElement = createCard(item);
    cards.addItem(cardElement);
  } 
}, cardsSection)

const values = new UserInfo(
  {
    name: discoverName,
    title: discoverJob
  }
);

function handleCardClick(data){
  const popupOpened = popupShowCard.open(data);
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
  formValidators['profile'].resetValidation();
  const {name, title} = values.getUserInfo()
  inputDiscoverName.value = name;
  inputDiscoverJob.value  = title 
  const popupOpened = popupEditProfile.open();
  return popupOpened;
}

function showFormNewCard(){
  formValidators['new-card'].resetValidation();
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
  const cardElement = createCard(data);
  cards.addItem(cardElement);
}

buttonEditProfile.addEventListener('click', () => showFormEdit());
buttonNewCard.addEventListener('click', () => showFormNewCard());
validationForm(formData);    
cards.renderCards();