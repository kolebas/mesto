const formDiv = document.querySelector('.popup');
const cardTemplate = document.querySelector('#card');
const popupTemplate = document.querySelector('#edit-profile');
const cardsSection = document.querySelector('.cards');
const discoverName = document.querySelector('.discover__title');
const discoverJob = document.querySelector('.discover__subtitle');
const initialCards = [
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

function renderPage(){
  initialCards.map(renderCard);
}

function renderCard(card) {
  const cardElement = cardTemplate.content.firstElementChild.cloneNode(true);
  cardElement.querySelector('.card__title').textContent = card.name;
  cardElement.querySelector('.card__image').alt = card.name;
  cardElement.querySelector('.card__image').src = card.link;
  cardsSection.prepend(cardElement);
  const likeButton = document.querySelector('.card__like-button');
  likeButton.addEventListener('click', addLike);
  cardElement.addEventListener('click', () => showCard('#show-card', card.name, card.link));  
  setCardActions(cardElement);
}

function removeCard(evt) {
  const card = evt.currentTarget.closest('.card'); 
  card.remove();
}

function showFormEdit(form){
  const popup = document.querySelector(form).content.firstElementChild.cloneNode(true);
  cardsSection.after(popup);
  popup.classList.add('popup_opened');
  popup.querySelector('#name').value = discoverName.textContent;
  popup.querySelector('#job').value  = discoverJob.textContent;
  popup.querySelector('.popup__form').addEventListener('submit', saveForm );  
  setPopupActions(); 
}

function showFormAddCard(form){
  const popup = document.querySelector(form).content.firstElementChild.cloneNode(true);
  cardsSection.after(popup);
  popup.classList.add('popup_opened');
  popup.querySelector('.popup__form').addEventListener('submit', saveCard );  
  setPopupActions(); 
}

function showCard(form, title, img){
  const popup = document.querySelector(form).content.firstElementChild.cloneNode(true);
  cardsSection.after(popup);
  popup.querySelector('#card-title').textContent = title;
  popup.querySelector('#card-title').classList.add('popup__title_show-card');
  popup.querySelector('#card-image').alt = title; 
  popup.querySelector('#card-image').src = img; 
  popup.querySelector('#card-image').classList.add('card__image_show-card');
  popup.querySelector('.popup__container').classList.add('popup__container_show-card');
  popup.classList.add('popup_opened', 'popup_show-card');
  setPopupActions(); 
}

function saveForm (evt) {
  evt.preventDefault();
  const popup = document.querySelector('.popup');
  let inputDiscoverName = popup.querySelector('#name');
  let inputDiscoverJob = popup.querySelector('#job');
  discoverName.textContent = inputDiscoverName.value;
  discoverJob.textContent = inputDiscoverJob.value;
  closeFormEdit();
}

function saveCard(evt, title, link){  
  evt.preventDefault();
  let card = {
    name: document.querySelector('#title').value,
    link: document.querySelector('#link').value,
  } 
  renderCard(card)
  closeFormEdit();
}

function closeFormEdit(){
  document.querySelector('.popup').classList.remove('popup_opened');
}

function addLike(evt){
  evt.target.classList.toggle('card__like-button_active')
}

function setCardActions(card) {
  card.querySelector('.card__delete-button').addEventListener('click', removeCard);
}

function setPopupActions(){
  document.querySelector('.popup__close-button').addEventListener('click', closeFormEdit);
}

document.querySelector('.profile__add-button').addEventListener('click', () => showFormAddCard('#add-card'));
document.querySelector('.discover__edit-button').addEventListener('click', () =>showFormEdit('#edit-profile'));
renderPage();



