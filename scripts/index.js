const editButtonProfile = document.querySelector('.discover__edit-button');
const addButtonNewCard = document.querySelector('.profile__add-button');
const cardTemplate = document.querySelector('#card');
const popupProfile = document.querySelector('#popup-edit-profile');
const popupNewCard = document.querySelector('#popup-new-card');
const popupShowCard = document.querySelector('#popup-show-card');
const cardsSection = document.querySelector('.cards');
const discoverName = document.querySelector('.discover__title');
const discoverJob = document.querySelector('.discover__subtitle');
const inputDiscoverName = popupProfile.querySelector('#name');
const inputDiscoverJob = popupProfile.querySelector('#job');

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
  openPopup(popupProfile);
  inputDiscoverName.value = discoverName.textContent;
  inputDiscoverJob.value  = discoverJob.textContent;
  popupProfile.querySelector('.popup__form').addEventListener('submit', saveProfile );  
  closePopup(popupProfile); 
}

function showFormAddCard(){
  openPopup(popupNewCard);
  popupForm = popupNewCard.querySelector('.popup__form');
  popupForm.addEventListener('submit', (evt) => { saveCard (evt, popupForm)} );  
  closePopup(popupNewCard);
}

function showCard(text, img){
  const title = popupShowCard.querySelector('#card-title');
  const image = popupShowCard.querySelector('#card-image');  
  cardsSection.after(popupShowCard);
  title.textContent = text;
  title.classList.add('popup__title_show-card');
  image.alt = text; 
  image.src = img; 
  image.classList.add('card__image_show-card');
  popupShowCard.querySelector('.popup__container').classList.add('popup__container_show-card');
  popupShowCard.classList.add('popup_opened', 'popup_show-card');
  closePopup(popupShowCard); 
}

function saveProfile (evt) {
  evt.preventDefault();
  discoverName.textContent = inputDiscoverName.value;
  discoverJob.textContent = inputDiscoverJob.value;
  closePopup(popupProfile); 
}

function saveCard(evt, form){
  evt.preventDefault();
  const title = popupNewCard.querySelector('#title').value
  const link = popupNewCard.querySelector('#link').value; 
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
  const saveButton = popup.querySelector('.popup__button');
  if(saveButton){
    saveButton.addEventListener('click', () => {popup.classList.remove('popup_opened')});
  }  
  popup.querySelector('.popup__close-button').addEventListener('click', () => {popup.classList.remove('popup_opened')});
}

function addLike(evt){
  evt.target.classList.toggle('card__like-button_active');
  evt.stopPropagation();
}

editButtonProfile.addEventListener('click', () =>showFormEdit('#edit-profile'));
addButtonNewCard.addEventListener('click', () => showFormAddCard('#add-card'));
renderCard(initialCards);