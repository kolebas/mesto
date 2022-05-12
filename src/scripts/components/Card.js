import Api from './Api.js';

export default class Card {
  constructor(cardData, cardTemplate, handleCardClick){
    this._cardTemplate = cardTemplate;
    this._title = cardData.name;
    this._image = cardData.link;
    this._likeCount = cardData.likes ? cardData.likes.length : 0;
    this._handleCardClick = handleCardClick;
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.card__image');
    this._cardTitle = this._element.querySelector('.card__title');
    this._cardDeleteButton = this._element.querySelector('.card__delete-button');
    this._cardLikeButton = this._element.querySelector('.card__like-button');
    this._cardLikeCounter = this._element.querySelector('.card__like-counter');
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardTemplate)
      .content
      .querySelector('.card')
      .cloneNode(true);
    return cardElement;
  }

  generateCard(){
    this._cardTitle.textContent = this._title;
    this._cardImage.alt = this._title;
    this._cardImage.src = this._image;
    this._cardLikeCounter.textContent = this._likeCount;        
    this._setEventListeners();
    return this._element; 
  }

  _toggleLike(evt){
    evt.target.classList.toggle('card__like-button_active');
  }

  _deleteCard(evt){
    console.log(evt.target.closest('.card'))
    evt.target.closest('.card').remove();
  }
  
  _setEventListeners(){
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick({name: this._title, link: this._image})
    });
    this._cardDeleteButton.addEventListener('click', (evt) => {
      this._deleteCard(evt)
    });
    this._cardLikeButton.addEventListener('click', (evt) =>{ 
      this._toggleLike(evt)
    }); 
  }
};