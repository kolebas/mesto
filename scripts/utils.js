function closePopupEsc(event){
  if(event.key === "Escape"){
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

function closePopupOverlay(event){
  if(event.target.classList.contains('popup_opened')){
    closePopup(event.target);
  }
}

function closePopup(popup){
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
  document.removeEventListener('mousedown', closePopupOverlay);
}

function openPopup(popup){
  document.addEventListener('keydown', closePopupEsc);
  document.addEventListener('mousedown', closePopupOverlay);
  popup.classList.add('popup_opened');
}

export {closePopup, closePopupEsc, closePopupOverlay, openPopup}