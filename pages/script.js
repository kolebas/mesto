// Находим форму в DOM
let formElement = document.querySelector('.popup');
let editButton = document.querySelector('.discover__edit-button');
let closeButton = document.querySelector('.popup__close-button');
var discoverName = document.querySelector('.discover__title').textContent;
var discoverJob = document.querySelector('.discover__subtitle').textContent;

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                        // Так мы можем определить свою логику отправки.
                        // О том, как это делать, расскажем позже.

  // Находим поля формы в DOM
  let nameInput = document.querySelector('.discover__title').value;// Воспользуйтесь инструментом .querySelector()
  let jobInput = document.querySelector('.discover__subtitle').value;// Воспользуйтесь инструментом .querySelector()

  

  // Получите значение полей из свойства value

  // Выберите элементы, куда должны быть вставлены значения полей

  // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»

function createCards() {         
  let card = document.createElement ('div');
  card.className = "cards";  
  let sectionCards = document.querySelector('.page__cards');  
  let cards = [
    {
      title: "Карачевск",
      image: "./images/elbrus.jpg"
    },
    {
      title: "Гора Эльбрус",
      image: "./images/dombai.jpg"
    },
    {
      title: "Домбай",
      image: "./images/elbrus.jpg"
    },
    {
      title: "Гора Эльбрус",
      image: "./images/dombai.jpg"
    },
    {
      title: "Домбай",
      image: "./images/elbrus.jpg"
    },    
    {
      title: "Домбай",
      image: "./images/dombai.jpg"
    },
  ];
  cards.forEach(element => 
    sectionCards.insertAdjacentHTML('afterbegin',`
      <div class="cards__item">
        <img class="card__image" src="` + element['image'] + `" alt="">
        <div class="card__rectangle">
          <h2 class="card__title">` + element['title'] + `</h2>
          <img class="card__like-button" src="./images/card-heart.svg" alt=""/>
        </div>
      </div>`),     
  )           

}
function showFormEdit(){
  formElement.classList.add('popup_show');
  let inputs = document.querySelectorAll('input');
  inputs[0].value = discoverName;
  inputs[1].value = discoverJob;  
}

function closeFormEdit(){
  formElement.classList.remove('popup_show');
}

document.body.onload = createCards;

formElement.addEventListener('submit', formSubmitHandler);
editButton.addEventListener('click', showFormEdit);
closeButton.addEventListener('click', closeFormEdit);
