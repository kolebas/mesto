export default class Popup {
  constructor(popup){
    this._popup = popup,
    this._handleEscClose = this._handleEscClose.bind(this)
  }
  open(){
    this._popup.classList.add('popup_opened');    
    document.addEventListener('keydown', this._handleEscClose);
  }

  close(){
    document.removeEventListener('keydown', this._handleEscClose); 
    this._popup.classList.remove('popup_opened');
  }

  _handleEscClose(event){
    if(event.key === "Escape"){
      this.close();
    }
  }

  _handleCloseOverlay(event){
    if(event.target.classList.contains('popup_opened')){
      this.close();
    }
  }

  setEventListeners(){
    this._popup.querySelector('.popup__close-button').addEventListener('click', () => {
      this.close();
    });
    this._popup.addEventListener('mousedown', (event) => { 
      this._handleCloseOverlay(event); 
    });
  }
}

export { Popup }