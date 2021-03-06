export const url = 'https://mesto.nomoreparties.co/v1/cohort-41';
export const headers = {
  authorization: '4045a2f6-6d0f-4850-b94d-3526b10ebe4b',
  'Content-Type': 'application/json'
};
export const buttonEditProfile = document.querySelector('.discover__edit-button');
export const avatar = document.querySelector('.discover__avatar');
export const buttonNewCard = document.querySelector('.profile__add-button');
export const cardTemplate = '#card';
export const popupCard = document.querySelector('#popup-show-card');
export const titleShowCard = popupCard.querySelector('#card-title');
export const imageShowCard = popupCard.querySelector('#card-image');
export const popupAvatar = document.querySelector('#popup-edit-avatar');
export const popupSubmit = document.querySelector('#popup-submit');
export const popupProfile = document.querySelector('#popup-edit-profile');
export const popupNewCard = document.querySelector('#popup-new-card');
export const cardsSection = '.cards';
export const discoverName = document.querySelector('.discover__title');
export const discoverJob = document.querySelector('.discover__subtitle');
export const inputDiscoverName = popupProfile.querySelector('#discover');
export const inputDiscoverJob = popupProfile.querySelector('#job');
export const formNewCard = popupNewCard.querySelector('.popup__form');
export const popups = document.querySelectorAll('.popup');
export const titleNewCard = popupNewCard.querySelector('#title');
export const linkNewCard = popupNewCard.querySelector('#link');
export const formData =   {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}
export const formValidators = {}