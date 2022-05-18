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
  avatar,
  buttonEditProfile,
  buttonNewCard,
  cardTemplate,
  popupAvatar,
  popupSubmit,
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
import PopupWithSubmit from './components/PopupWithSubmit';

const popupEditProfile = new PopupWithForm(saveProfile, popupProfile);
popupEditProfile.setEventListeners();
const popupAddCard = new PopupWithForm(saveCard, popupNewCard);
popupAddCard.setEventListeners();
const popupWithSubmit = new PopupWithSubmit(deleteCard, popupSubmit);
popupWithSubmit.setEventListeners();
const popupEditAvatar = new PopupWithForm(saveAvatar, popupAvatar);
popupEditAvatar.setEventListeners();
const popupShowCard = new PopupWithImage(popupCard);
const api = new Api({
  baseUrl: url,
  headers: headers,
  method: 'GET',
});
let cards = null;
let userId = null;

const values = new UserInfo(
  {
    name: discoverName,
    about: discoverJob,
    avatar: avatar,
  }
);

popupShowCard.setEventListeners();

function createCard(item, owner) {
  const card = new Card(item, cardTemplate, handleCardClick, handleDeleteIconClick, handleLikeClick);
  const cardElement = card.generateCard(owner);
  return cardElement
}

function loadCards(owner){
  api.getInitialCards()
    .then(data => {
      renderCards(data, owner)
    })
    .catch((err) => {
      console.log(err); 
    });
}

api.editProfile('GET')
  .then(data => {
    values.setUserInfo(data);
    userId = data._id;
    loadCards(userId);
  })
  .catch((err) => {
    console.log(err);
  });  

function renderCards(data, owner){
  cards = new Section({
    items: data,
    renderer: (item) => {
      const cardElement = createCard(item, owner);
      cards.addItem(cardElement);
    } 
  }, cardsSection)  
  cards.renderCards();
}

function handleCardClick(data){
  popupShowCard.open(data);
}

function handleDeleteIconClick(data){
  popupWithSubmit.open();
  popupWithSubmit._setCardId(data);
}

function deleteCard(data){
  preloader(popupSubmit, true);
  api.deleteCard('DELETE',data.id)
  .then(() => {    
    popupWithSubmit.close();
    preloader(popupSubmit, false, 'Да');
    loadCards(userId)
  })
  .catch((err) => {
    console.log(err);
  });
}

function handleLikeClick(data){
  const card = data.card;
  const cardLikeButton = card.querySelector('.card__like-button');
  const cardLikeCounter = this._element.querySelector('.card__like-counter');
  let action = null;
  if(cardLikeButton.classList.contains('card__like-button_active')){    
    action = api.changeLikeCard('DELETE',data.id);
    cardLikeCounter.textContent = data.likes - 1;
  } else {
    action = api.changeLikeCard('PUT',data.id);
    cardLikeCounter.textContent = data.likes + 1;
  }  
  action
  .then(() => {    
    cardLikeButton.classList.toggle('card__like-button_active');
  })
  .catch((err) => {
    console.log(err);
  });
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

function showFormAvatar(){
  formValidators['edit-avatar'].resetValidation();
  popupEditAvatar.open();
}

function saveAvatar(evt, inputs){  
  preloader(popupAvatar, true);
  evt.preventDefault();
  const data = {
    name: discoverName.textContent,
    about: discoverJob.textContent,
    avatar: inputs.find(item => item.name === "avatar-link").value
  }
  api.editProfile('PATCH', data, '/users/me/avatar')
  .then(res => {
    if (res) {      
      values.setAvatar(data);      
      popupEditAvatar.close();
      preloader(popupAvatar, false);
    }
  })
  .catch((err) => {
    console.log(err);
  });
}

function saveProfile (evt, inputs) {
  preloader(popupProfile, true);
  evt.preventDefault();
  const data = {
    name: inputs.find(item => item.name === "discover").value,
    about: inputs.find(item => item.name === "job").value,
    avatar: avatar.src
  }
  api.editProfile('PATCH', data)
  .then(res => {
    if (res) { 
      values.setUserInfo(data);            
      popupEditProfile.close();
      preloader(popupProfile, false);
    }
  })
  .catch((err) => {
    console.log(err);
  });
}

function preloader(popup, status, message = 'Сохранить'){
  const button = popup.querySelector('.popup__button');
  if(status){
    button.textContent = 'Сохранение...';
  } else {
    button.textContent = message;
  }
}

function saveCard(evt, inputs){
  preloader(popupNewCard, true);
  evt.preventDefault();
  const data = {
    name: inputs.find(item => item.name === "title").value,
    link: inputs.find(item => item.name === "link").value
  }
  api.addCard('POST', data).then(res => {
    if (res) {    
      popupShowCard.close();
      preloader(popupNewCard, false);      
      loadCards(userId);  
    }
  })
}

buttonEditProfile.addEventListener('click', () => showFormEdit());
buttonNewCard.addEventListener('click', () => showFormNewCard());
avatar.addEventListener('click', () => showFormAvatar());
validationForm(formData);    
