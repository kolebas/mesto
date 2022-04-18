import {closePopupEsc, closePopupOverlay} from "./utils.js";
class Card {
  constructor(cardData, cardTemplate){
    this._cardTemplate = cardTemplate;
    this._title = cardData.name;
    this._image = cardData.link;
    this._popupShowCard = document.querySelector('#popup-show-card');
    this._titleShowCard = this._popupShowCard.querySelector('#card-title');
    this._imageShowCard = this._popupShowCard.querySelector('#card-image');
  }

  _getTemplate() {
    const cardElement = document
      .querySelector('#card')
      .content
      .querySelector('.card')
      .cloneNode(true);

    return cardElement;
  }

  generateCard(){
    this._element = this._getTemplate();    
    this._element.querySelector('.card__title').textContent = this._title;
    this._element.querySelector('.card__image').alt = this._title;
    this._element.querySelector('.card__image').src = this._image;
        
    this._setEventListeners();
    return this._element; 
  }

  _handleOpenPopup(){
    this._popupShowCard.classList.add('popup_opened');
    this._titleShowCard.textContent = this._title;
    this._titleShowCard.alt = this._title; 
    this._imageShowCard.src = this._image; 
    document.addEventListener('keydown', closePopupEsc);
    document.addEventListener('mousedown', closePopupOverlay);    
  }

  _toggleLike(evt){
    evt.target.classList.toggle('card__like-button_active');
  }

  _deleteCard(evt){
    evt.target.closest('.card').remove();
  }
  
  _setEventListeners(){
    this._element.querySelector('.card__image').addEventListener('click', () => {
      this._handleOpenPopup()
    });
    this._element.querySelector('.card__delete-button').addEventListener('click', (evt) => {
      this._deleteCard(evt)
    });
    this._element.querySelector('.card__like-button').addEventListener('click', (evt) =>{ 
      this._toggleLike(evt)
    }); 
  }
};

export {Card}