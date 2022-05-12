import '../pages/index.css';
import Card from "./components/Card.js";
import FormValidator from "./components/FormValidator.js";
import Section from './components/Section.js';
import Api from './components/Api.js';
import PopupWithImage from './components/PopupWithImage.js';
import PopupWithForm from './components/PopupWithForm.js';
import UserInfo from "./components/UserInfo.js";
import {
  url,
  headers,
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
const api = new Api({
  baseUrl: url,
  headers: headers,
  method: 'GET',
});
let cards = null;

const values = new UserInfo(
  {
    name: discoverName,
    about: discoverJob
  }
);

popupShowCard.setEventListeners();

function createCard(item) {
  const card = new Card(item, cardTemplate, handleCardClick);
  const cardElement = card.generateCard();
  return cardElement
}

api.getInitialCards()
  .then(data => {
    renderCards(data)
  })
  .catch((err) => {
    console.log(err); 
  });

api.editProfile('GET')
  .then(data => {
    values.setUserInfo(data)
  })
  .catch((err) => {
    console.log(err);
  });  

function renderCards(data){
  cards = new Section({
    items: data,
    renderer: (item) => {
      const cardElement = createCard(item);
      cards.addItem(cardElement);
    } 
  }, cardsSection)  
  cards.renderCards();
}

function handleCardClick(data){
  popupShowCard.open(data);
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
  const {name, about} = values.getUserInfo()
  inputDiscoverName.value = name;
  inputDiscoverJob.value  = about; 
  popupEditProfile.open();
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
    about: inputs.find(item => item.name === "job").value
  }
  api.editProfile('PATCH', data)
  .then(res => {
    if (res) {      
      values.setUserInfo(data);
    }
  })
  .catch((err) => {
    console.log(err);
  });
}

function saveCard(evt, inputs){
  evt.preventDefault();
  const data = {
    name: inputs.find(item => item.name === "title").value,
    link: inputs.find(item => item.name === "link").value
  }
  const cardElement = createCard(data);
  cards.addItem(cardElement);
  api.addCard('POST', data).then(res => {
    if (res.ok) {
      cards.addItem(cardElement);
    }
  })
}

buttonEditProfile.addEventListener('click', () => showFormEdit());
buttonNewCard.addEventListener('click', () => showFormNewCard());
validationForm(formData);    
