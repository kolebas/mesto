import '../pages/index.css';
import Card from "../scripts/components/Card.js";
import FormValidator from "../scripts/components/FormValidator.js";
import Section from '../scripts/components/Section.js';
import Api from '../scripts/components/Api.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from "../scripts/components/UserInfo.js";
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
} from '../scripts/utils/constants.js';
import PopupWithSubmit from '../scripts/components/PopupWithSubmit';

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
let userId = null;

const cards = new Section({
  renderer: (item) => {
    const cardElement = createCard(item, userId);
    cards.addItem(cardElement);
  } 
}, cardsSection)  

const userInfo = new UserInfo(
  {
    name: discoverName,
    about: discoverJob,
    avatar: avatar,
    _id: null,
  }
);

popupShowCard.setEventListeners();

function createCard(item, owner) {
  const card = new Card(item, cardTemplate, handleCardClick, handleDeleteIconClick, handleLikeClick);
  const cardElement = card.generateCard(owner);
  return cardElement
}

function loadCards(){
  api.getInitialCards()
    .then(data => {
      renderCards(data)
    })
    .catch((err) => {
      console.log(err); 
    });
}

api.setProfile()
  .then(data => {
    userInfo.setProfile(data);
    userId = data._id;
    loadCards();
  })
  .catch((err) => {
    console.log(err);
  });  

function renderCards(data){
  cards.renderCards(data);
}

function handleCardClick(data){
  popupShowCard.open(data);
}

function handleDeleteIconClick(data){
  popupWithSubmit.open();
  popupWithSubmit.setCardId(data);
}

function deleteCard(card){
  renderLoading(popupSubmit, true);
  console.log(popupSubmit)
  api.deleteCard('DELETE',card._id)
  .then(() => {    
    card.deleteCard(card)
    popupWithSubmit.close();
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    renderLoading(popupSubmit, false, "Да");
  });
}

function handleLikeClick(card){  
  let action = null;
  if(card.isLiked()){    
    action = api.changeLikeCard('DELETE',card._id);
  } else {
    action = api.changeLikeCard('PUT',card._id);
  }  
  action
  .then((res) => {
    card.updateLikes(res)
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
  const {name, about} = userInfo.getUserInfo()
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
  renderLoading(popupAvatar, true);
  evt.preventDefault();
  const data = {
    avatar: inputs.find(item => item.name === "avatar-link").value
  }
  api.updateAvatar(data)
  .then(res => {
    if (res) {      
      userInfo.setProfile(res);      
      popupEditAvatar.close();
    }
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    renderLoading(popupSubmit, false);
  });
}

function saveProfile (evt, inputs) {
  renderLoading(popupProfile, true);
  evt.preventDefault();
  const data = {
    name: inputs.find(item => item.name === "discover").value,
    about: inputs.find(item => item.name === "job").value,
  }
  api.updateUserInfo(data)
  .then(res => {
    if (res) { 
      userInfo.setProfile(res);             
      popupEditProfile.close();
    }
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    renderLoading(popupSubmit, false);
  });
}

function renderLoading(popup, status, message = 'Сохранить'){
  const button = popup.querySelector('.popup__button');
  if(status){
    button.textContent = 'Сохранение...';
  } else {
    button.textContent = message;
  }
}

function saveCard(evt, inputs){
  renderLoading(popupNewCard, true);
  evt.preventDefault();
  const data = {
    name: inputs.find(item => item.name === "title").value,
    link: inputs.find(item => item.name === "link").value
  }
  api.addCard('POST', data)
  .then(res => {
    if (res) {
      const cardElement = createCard(res, userId);
      cards.prependItem(cardElement);
      popupAddCard.close();
    }
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    renderLoading(popupSubmit, false);
  });
}

buttonEditProfile.addEventListener('click', () => showFormEdit());
buttonNewCard.addEventListener('click', () => showFormNewCard());
avatar.addEventListener('click', () => showFormAvatar());
validationForm(formData);    
