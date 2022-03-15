const buttonEditProfile = document.querySelector('.discover__edit-button');
const buttonNewCard = document.querySelector('.profile__add-button');
const cardTemplate = document.querySelector('#card');
const popupProfile = document.querySelector('#popup-edit-profile');
const popupNewCard = document.querySelector('#popup-new-card');
const popupShowCard = document.querySelector('#popup-show-card');
const cardsSection = document.querySelector('.cards');
const discoverName = document.querySelector('.discover__title');
const discoverJob = document.querySelector('.discover__subtitle');
const inputDiscoverName = popupProfile.querySelector('#name');
const inputDiscoverJob = popupProfile.querySelector('#job');
const formNewCard = popupNewCard.querySelector('.popup__form');
const titleShowCard = popupShowCard.querySelector('#card-title');
const imageShowCard = popupShowCard.querySelector('#card-image');
const popups = document.querySelectorAll('.popup');
const titleNewCard = popupNewCard.querySelector('#title');
const linkNewCard = popupNewCard.querySelector('#link');

function renderCard(cards){
  cards.forEach((item) => {
    cardsSection.prepend(createCard(item))
  })
}

function createCard(card) {
  const cardElement = cardTemplate.content.firstElementChild.cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  cardElement.querySelector('.card__title').textContent = card.name;
  cardImage.alt = card.name;
  cardImage.src = card.link;  
  cardElement.querySelector('.card__like-button').addEventListener('click', addLike); 
  cardElement.querySelector('.card__delete-button').addEventListener('click', (evt) => {evt.target.closest('.card').remove(); evt.stopPropagation()});  
  cardElement.addEventListener('click', () => showCard(card.name, card.link)); 
  return cardElement;
}

function showFormEdit(){  
  openPopup(popupProfile)
  inputDiscoverName.value = discoverName.textContent;
  inputDiscoverJob.value  = discoverJob.textContent;
}

function showFormNewCard(){
  openPopup(popupNewCard);
}

function showCard(text, img){
  titleShowCard.textContent = text;
  imageShowCard.alt = text; 
  imageShowCard.src = img; 
  openPopup(popupShowCard);
}

function saveProfile (evt) {
  evt.preventDefault();
  discoverName.textContent = inputDiscoverName.value;
  discoverJob.textContent = inputDiscoverJob.value;
}

function saveCard(evt, form){
  evt.preventDefault();
  const title = titleNewCard.value
  const link = linkNewCard.value; 
  let card = [{
    name: title,
    link: link,
  }] 
  renderCard(card);
  form.reset();
  card = null;
}

function openPopup(popup){
  popup.classList.add('popup_opened');
}

function closePopup(popup){
  popup.classList.remove('popup_opened');
}

function addLike(evt){
  evt.target.classList.toggle('card__like-button_active');
  evt.stopPropagation();
}

buttonEditProfile.addEventListener('click', () =>showFormEdit('#edit-profile'));
buttonNewCard.addEventListener('click', () => showFormNewCard('#add-card'));
popupProfile.querySelector('.popup__form').addEventListener('submit', saveProfile );
formNewCard.addEventListener('submit', (evt) => { saveCard (evt, formNewCard)} );
popups.forEach((item) => {
  const popupSaveButton = item.querySelector('.popup__button');
  if(popupSaveButton){
    item.querySelector('.popup__button').addEventListener('click', () => { closePopup(item) });
  }  
  item.querySelector('.popup__close-button').addEventListener('click', () => { closePopup(item) });
}) 
renderCard(initialCards);