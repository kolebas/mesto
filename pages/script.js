// Находим форму в DOM
let formElement = document.querySelector('.popup');
let editButton = document.querySelector('.discover__edit-button');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                        // Так мы можем определить свою логику отправки.
                        // О том, как это делать, расскажем позже.

  // Находим поля формы в DOM
  let nameInput = '';// Воспользуйтесь инструментом .querySelector()
  let jobInput = '';// Воспользуйтесь инструментом .querySelector()

  

  // Получите значение полей из свойства value

  // Выберите элементы, куда должны быть вставлены значения полей

  // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
editButton.addEventListener('click', formEdit);


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
    card.innerHTML = card.innerHTML+`
      <div class="cards__item">
        <img class="card__image" src="` + element['image'] + `" alt="">
        <div class="card__rectangle">
          <h2>` + element['title'] + `</h2>
          <img src="/images/card-heart.svg" alt=""/>
        </div>
      </div>`,     
    sectionCards.appendChild(card) 
  )           

}
function formEdit(){
  formElement.classList.add('popup_show');
  
}

document.body.onload = createCards;
