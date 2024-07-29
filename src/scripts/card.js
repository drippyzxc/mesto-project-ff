export function createCard(cardData, removeCard) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  cardElement.querySelector(".card__title").textContent = cardData.name;
  const cardImage = cardElement.querySelector(".card__image");
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  const deleteButton = cardElement.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", () => removeCard(cardElement));
  const likeButton = cardElement.querySelector(".card__like-button");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_is-active");
  });
  const popupImageOpen = document.querySelector(".popup_type_image");
  const popupImage = document.querySelector(".popup__image");
  const popupText = document.querySelector(".popup__caption");
  cardImage.addEventListener("click", () => {
    popupImage.src = cardData.link;
    popupImage.alt = cardData.name;
    popupText.textContent = cardData.name;
    openPopup(popupImageOpen);
  });
  return cardElement;
}
export function removeCard(cardElement) {
  cardElement.remove();
}

export function likeCard() {}
