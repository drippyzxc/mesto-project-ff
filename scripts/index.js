// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
// @todo: DOM узлы
const content = document.querySelector('.content');
const placesList = document.querySelector('.places__list');
// @todo: Функция создания карточки
function createCard (cardData, removeCard) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    cardElement.querySelector('.card__title').textContent = cardData.name;
  const cardImage = cardElement.querySelector('.card__image');
    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;
  const deleteButton = cardElement.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', () => removeCard(cardElement))  
      return cardElement;
}
// @todo: Функция удаления карточки
function removeCard (cardElement) {
  cardElement.remove();
}
// @todo: Вывести карточки на страницу
function renderInitialCards() {
  initialCards.forEach((cardData) => {
    placesList.append(createCard(cardData, removeCard));
  });
}
  renderInitialCards();