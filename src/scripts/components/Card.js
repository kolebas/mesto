export default class Card {
  constructor(cardData, cardTemplate, handleCardClick, handleDeleteIconClick, handleLikeClick){
    this._cardTemplate = cardTemplate;
    this._cardOwner = cardData.owner;
    this._title = cardData.name;
    this._id = cardData._id;
    this._image = cardData.link;
    this._likes = cardData.likes ? cardData.likes : [];
    this._handleCardClick = handleCardClick;
    this._handleDeleteIconClick = handleDeleteIconClick;
    this._handleLikeClick = handleLikeClick
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

  generateCard(owner){
    if(this._cardOwner && this._cardOwner._id === owner){  
      this._cardDeleteButton.classList.add('card__delete-button_show');
    }
    if(this._likes.some(item => item._id === owner)){
      this._cardLikeButton.classList.add('card__like-button_active'); 
    }
    this._cardTitle.textContent = this._title;
    this._cardImage.alt = this._title;
    this._cardImage.src = this._image;
    this._cardLikeCounter.textContent = this._likes.length;        
    this._setEventListeners();
    return this._element; 
  }

  updateLikes(data){
    this._cardLikeButton.classList.toggle('card__like-button_active');
    this._cardLikeCounter.textContent = data.likes.length;
  }

  deleteCard(data){
    data._element.remove();
  }
  
  _setEventListeners(){
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick({name: this._title, link: this._image})
    });
    this._cardDeleteButton.addEventListener('click', () => {
      this._handleDeleteIconClick(this)
    });
    this._cardLikeButton.addEventListener('click', () =>{ 
      this._handleLikeClick(this)
    }); 
  }
};