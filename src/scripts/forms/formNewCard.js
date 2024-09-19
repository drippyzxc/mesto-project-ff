import { postCard } from "../api.js";
import { createCard } from "../card.js";
import { closePopup } from "../modal.js";
import {
  newCardPopup,
  newPlaceNameInput,
  newLinkInput,
  placesList,
} from "../variables.js";
import { handleSubmit } from "./formUtils.js";

export function handleFormNewCardSubmit(evt, callbacksObject, userId) {
  function makeRequest() {
    return postCard(newPlaceNameInput.value, newLinkInput.value).then(
      (card) => {
        const createNewCard = createCard(card, callbacksObject, userId);
        placesList.prepend(createNewCard);
        closePopup(newCardPopup);
      }
    );
  }

  handleSubmit(makeRequest, evt);
}
