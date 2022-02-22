// Находим форму в DOM
let formSection = document.querySelector('.page__popup');
let formElement = document.querySelector('.popup');
let editButton = document.querySelector('.discover__edit-button');
let closeButton = document.querySelector('.popup__close-button');
var discoverName = document.querySelector('.discover__title');
var discoverJob = document.querySelector('.discover__subtitle');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                        // Так мы можем определить свою логику отправки.
                        // О том, как это делать, расскажем позже.


  discoverName.innerText = inputs[0].value;
  discoverJob.innerText = inputs[1].value;
  

  // Получите значение полей из свойства value

  // Выберите элементы, куда должны быть вставлены значения полей

  // Вставьте новые значения с помощью textContent
  closeFormEdit();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»

function showFormEdit(){  
  formElement.classList.add('popup_opened');  
  inputs = document.querySelectorAll('input');
  inputs[0].value = discoverName.textContent;
  inputs[1].value = discoverJob.textContent;  
}

function closeFormEdit(){
  formSection.classList.remove('popup_opened');
}

formElement.addEventListener('submit', formSubmitHandler);
editButton.addEventListener('click', showFormEdit);
closeButton.addEventListener('click', closeFormEdit);
