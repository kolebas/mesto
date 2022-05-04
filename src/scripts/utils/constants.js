export const cardsData = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
export const buttonEditProfile = document.querySelector('.discover__edit-button');
export const buttonNewCard = document.querySelector('.profile__add-button');
export const cardTemplate = '#card';
export const popupShowCard = document.querySelector('#popup-show-card');
export const titleShowCard = popupShowCard.querySelector('#card-title');
export const imageShowCard = popupShowCard.querySelector('#card-image');
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