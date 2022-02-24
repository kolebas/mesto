// Находим форму в DOM
let formDiv = document.querySelector('.popup');
let formElement = formDiv.querySelector('.popup__container');
let editButton = document.querySelector('.discover__edit-button');
let closeButton = formElement.querySelector('.popup__close-button');
let inputDiscoverName = formElement.querySelector('#name');
let inputDiscoverJob = formElement.querySelector('#job');
let discoverName = document.querySelector('.discover__title');
let discoverJob = document.querySelector('.discover__subtitle');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function saveForm (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                        // Так мы можем определить свою логику отправки.
                        // О том, как это делать, расскажем позже.


  discoverName.textContent = inputDiscoverName.value;
  discoverJob.textContent = inputDiscoverJob.value;
  

  // Получите значение полей из свойства value

  // Выберите элементы, куда должны быть вставлены значения полей

  // Вставьте новые значения с помощью textContent
  closeFormEdit();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»

function showFormEdit(){  
  formDiv.classList.add('popup_opened');
  inputDiscoverName.value = discoverName.textContent;
  inputDiscoverJob.value = discoverJob.textContent;  
}

function closeFormEdit(){
  formDiv.classList.remove('popup_opened');
}

editButton.addEventListener('click', showFormEdit);
formElement.addEventListener('submit', saveForm);
closeButton.addEventListener('click', closeFormEdit);
