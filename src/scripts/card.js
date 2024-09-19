<<<<<<< HEAD
import { deleteLike, setLike } from "./api.js";
import { popupImageOpen, popupImage, popupText } from "./variables.js";

export function createCard(cardData, callbacksObject, userId) {
  const { deleteCardCallback, openImageCallback, handleLikesCallback } =
    callbacksObject;
=======
export function createCard(cardData, removeCard, openImage) {
>>>>>>> 3064162b4ea692adbd80a9c07f3b8b184540a276
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");
  const cardLikeCounter = cardElement.querySelector(".card__like-counter");
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
<<<<<<< HEAD
  cardTitle.textContent = cardData.name;
  cardLikeCounter.textContent = cardData.likes.length;
  const deleteButton = cardElement.querySelector(".card__delete-button");
  if (userId !== cardData.owner._id) {
    deleteButton.style.display = "none";
  } else {
    deleteButton.addEventListener("click", () => {
      const cardId = cardData._id;
      deleteCardCallback(cardElement, cardId);
    });
  }
  const isLiked = cardData.likes.some((like) => like._id === userId);
  if (isLiked) {
    likeButton.classList.add("card__like-button_is-active");
  }
  likeButton.addEventListener("click", () => {
    handleLikesCallback(cardLikeCounter, likeButton, cardData);
  });

  cardImage.addEventListener("click", () => {
    openImageCallback(cardImage, popupImage, popupText, popupImageOpen);
  });

  return cardElement;
}

export function handleLikeCard(cardLikeCounter, likeButton, cardData) {
  if (likeButton.classList.contains("card__like-button_is-active")) {
    deleteLike(cardData._id)
      .then((res) => {
        likeButton.classList.toggle("card__like-button_is-active");
        cardLikeCounter.textContent = res.likes.length;
      })
      .catch((err) => {
        console.error(
          "Не удалось убрать лайк. Пожалуйста, попробуйте еще раз:",
          err
        );
      });
  } else {
    setLike(cardData._id)
      .then((res) => {
        likeButton.classList.toggle("card__like-button_is-active");
        cardLikeCounter.textContent = res.likes.length;
      })
      .catch((err) => {
        console.error(
          "Не удалось добавить лайк. Пожалуйста, попробуйте еще раз:",
          err
        );
      });
  }
=======

  const deleteButton = cardElement.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", () => removeCard(cardElement));
  const likeButton = cardElement.querySelector(".card__like-button");
  likeButton.addEventListener("click", handleLikeCard);
  cardImage.addEventListener("click", openImage);
  return cardElement;
}

export function handleLikeCard(evt) {
  evt.target.classList.toggle("card__like-button_is-active");
}

export function removeCard(cardElement) {
  cardElement.remove();
>>>>>>> 3064162b4ea692adbd80a9c07f3b8b184540a276
}
