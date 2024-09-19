import "./pages/index.css";
import { openPopup, closePopup } from "./scripts/modal.js";
import { createCard, handleLikeCard } from "./scripts/card.js";
import {
  placesList,
  popups,
  editProfilePopup,
  newCardPopup,
  editProfileForm,
  editProfileOpenButton,
  profileTitle,
  profileDescription,
  profileAddButton,
  avatarForm,
  avatarImage,
  deleteCardForm,
  closePopupButtons,
} from "./scripts/variables.js";
import { enableValidation, clearValidation } from "./scripts/validation.js";
import { getUserInfo, getCards } from "./scripts/api.js";
import {
  handleCardDelete,
  openPopupDelete,
} from "./scripts/forms/formDelete.js";
import { handleFormAvatarSubmit } from "./scripts/forms/formAvatar.js";
import { handleFormNewCardSubmit } from "./scripts/forms/formNewCard.js";
import {
  handleFormSubmit,
  handleEditProfileClick,
} from "./scripts/forms/formEdit.js";

const callbacksObject = {
  deleteCardCallback: openPopupDelete,
  openImageCallback: openImage,
  handleLikesCallback: handleLikeCard,
};

const validationSettings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

enableValidation(validationSettings);

function renderInitialCards(initialCards, callbacksObject, userId) {
  placesList.innerHTML = "";
  initialCards.forEach((cardData) => {
    const cardElement = createCard(cardData, callbacksObject, userId);
    placesList.appendChild(cardElement);
  });
}

function openImage(cardImg, popupImage, popupImageCaption, popupImageOpen) {
  popupImage.src = cardImg.src;
  popupImage.alt = cardImg.alt;
  popupImageCaption.textContent = cardImg.alt;
  openPopup(popupImageOpen);
}

editProfileOpenButton.addEventListener("click", () => {
  clearValidation(editProfileForm, validationSettings);
  handleEditProfileClick();
  openPopup(editProfilePopup);
});

profileAddButton.addEventListener("click", () => {
  clearValidation(newCardPopup, validationSettings);
  openPopup(newCardPopup);
});

avatarImage.addEventListener("click", () => {
  clearValidation(avatarForm, validationSettings);
  openPopup(avatarForm);
});

closePopupButtons.forEach((evt) => {
  const popup = evt.closest(".popup");
  evt.addEventListener("click", () => {
    closePopup(popup);
  });
});

let userId = "";

function setUserInfo(user) {
  profileTitle.textContent = user.name;
  profileDescription.textContent = user.about;
  avatarImage.setAttribute("style", `background-image: url('${user.avatar}')`);
  userId = user._id;
}

editProfilePopup.addEventListener("submit", handleFormSubmit);
newCardPopup.addEventListener("submit", (event) => {
  handleFormNewCardSubmit(event, callbacksObject, userId);
});
avatarForm.addEventListener("submit", handleFormAvatarSubmit);
deleteCardForm.addEventListener("submit", handleCardDelete);

Promise.all([getUserInfo(), getCards()])
  .then(([user, initialCards]) => {
    setUserInfo(user);
    renderInitialCards(initialCards, callbacksObject, user._id);
  })
  .catch((err) => {
    console.error("Произошла ошибка при получении данных:", err);
  });
