export default class Popup {
  constructor(popup){
    this._popup = popup
  }
  open(){
    this._popup.classList.add('popup_opened');
  }

  close(){
    document.removeEventListener('keydown', this._handleEscClose);
    document.removeEventListener('mousedown', this._handleCloseOverlay);    
    this._popup.classList.remove('popup_opened');
  }

  _handleEscClose(event){
    if(event.key === "Escape"){
      this.close();
    }
  }

  _handleCloseOverlay(event){
    if(event.target.classList.contains('popup_opened')){
      this.close(event.target);
    }
  }

  _setEventListeners(){
    this._popup.querySelector('.popup__close-button').addEventListener('click', () => {
      this.close();
    });
    document.addEventListener('keydown', (event) => { 
      this._handleEscClose(event); 
    });
    document.addEventListener('mousedown', (event) => { 
      this._handleCloseOverlay(event); 
    });
  }
}

export { Popup }