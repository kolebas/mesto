export default class Section {
  constructor({ items, renderer }, selector){
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(selector);
  }

  renderCards(){
    while (this._container.firstChild) {
      this._container.removeChild(this._container.firstChild);
    }
    this._items.forEach(item => {
      this._renderer(item);
    });
  }

  addItem(element){
    this._container.prepend(element);
  }
}