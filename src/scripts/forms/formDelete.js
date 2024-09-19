import { deleteOwnCard } from "../api.js";
import { openPopup, closePopup } from "../modal.js";
import { deletePopup } from "../variables.js";

let selectedCard;
let id;
export const openPopupDelete = (cardElement, cardId) => {
  selectedCard = cardElement;
  id = cardId;
  openPopup(deletePopup);
};

const closePopupDelete = () => {
  closePopup(deletePopup);
};

export function removeCard(selectedCard, id) {
  deleteOwnCard(id)
    .then(() => {
      selectedCard.remove();
      closePopupDelete();
    })
    .catch((err) => {
      console.error(
        "Не удалось удалить карточку. Пожалуйста, попробуйте еще раз:",
        err
      );
    });
}

export function handleCardDelete(evt) {
  evt.preventDefault();
  removeCard(selectedCard, id);
}
