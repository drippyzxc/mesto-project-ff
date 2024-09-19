import "./pages/index.css";
<<<<<<< HEAD
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
  closePopupButton,
} from "./scripts/variables.js";
import {
  enableValidation,
  clearValidation,
  validationSettings,
} from "./scripts/validation.js";
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

enableValidation(validationSettings);
=======
import { createCard, removeCard, handleLikeCard } from "./scripts/card.js";
import { initialCards } from "./scripts/cards.js";
import {
  openPopup,
  closePopup,
  handleCLosePopupByEsc,
  closePopupOverlay,
} from "./scripts/modal.js";

const content = document.querySelector(".content");
const placesList = document.querySelector(".places__list");
const cardItem = document.querySelector(".places__item");
const popup = document.querySelector(".popup");
const editProfilePopup = document.querySelector(".popup_type_edit");
const newCardPopup = document.querySelector(".popup_type_new-card");
const popupImageOpen = document.querySelector(".popup_type_image");
const popupImage = popupImageOpen.querySelector(".popup__image");
const popupText = popupImageOpen.querySelector(".popup__caption");
const editProfileOpenButton = document.querySelector(".profile__edit-button");
const newCardOpenButton = document.querySelector(".new-card-button");
const closePopupButton = document.querySelectorAll(".popup__close");
const editProfileForm = document.forms["edit-profile"];
const newPlaceForm = document.forms["new-place"];
const profileTitle = document.querySelector(".profile__title");
const newCardForm = document.querySelector('.popup__form[name="new-place"]');
const profileDescription = document.querySelector(".profile__description");
const placeNameInput = newPlaceForm.querySelector(
  ".popup__input_type_card-name"
);
const linkInput = newPlaceForm.querySelector(".popup__input_type_url");
const addButton = document.querySelector(".profile__add-button");
const formElement = document.querySelector(".popup__form");
const nameInput = formElement.querySelector(".popup__input_type_name");
const jobInput = formElement.querySelector(".popup__input_type_description");
>>>>>>> 3064162b4ea692adbd80a9c07f3b8b184540a276

const callbacksObject = {
  deleteCardCallback: openPopupDelete,
  openImageCallback: openImage,
  handleLikesCallback: handleLikeCard,
};

function renderInitialCards(initialCards, callbacksObject, userId) {
  placesList.innerHTML = "";
  initialCards.forEach((cardData) => {
<<<<<<< HEAD
    const cardElement = createCard(cardData, callbacksObject, userId);
    placesList.appendChild(cardElement);
  });
}

function openImage(cardImg, popupImage, popupText, popupImageOpen) {
  popupImage.src = cardImg.src;
  popupImage.alt = cardImg.alt;
  popupText.textContent = cardImg.alt;
  openPopup(popupImageOpen);
=======
    placesList.append(createCard(cardData, removeCard, openImage));
  });
}

renderInitialCards();

function handleEditProfileClick() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  openPopup(editProfilePopup);
}

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  console.log("Форма отправлена");
}

editProfileOpenButton.addEventListener("click", handleEditProfileClick);
editProfileForm.addEventListener("submit", handleEditProfileSubmit);

function openImage(evt) {
  if (evt.target.classList.contains("card__image")) {
    popupImage.src = evt.target.src;
    popupImage.alt = evt.target.alt;
    popupText.textContent = evt.target.alt;
    openPopup(popupImageOpen);
  }
>>>>>>> 3064162b4ea692adbd80a9c07f3b8b184540a276
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

<<<<<<< HEAD
avatarImage.addEventListener("click", () => {
  clearValidation(avatarForm, validationSettings);
  openPopup(avatarForm);
});

closePopupButton.forEach((evt) => {
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
=======
closePopupButton.forEach((evt) => {
  const popup = evt.closest(".popup");
  evt.addEventListener("click", () => {
    closePopup(popup);
  });
});

function handleEditProfileFormSubmit(evt) {
  evt.preventDefault();
  const nameValue = nameInput.value;
  const jobValue = jobInput.value;

  profileTitle.textContent = nameValue;
  profileDescription.textContent = jobValue;
  closePopup(editProfilePopup);
}

function handleNewCardFormSubmit(evt) {
  evt.preventDefault();
  const titleValue = placeNameInput.value;
  const linkValue = linkInput.value;
  const newCardData = { name: titleValue, link: linkValue };
  const newCardElement = createCard(
    newCardData,
    removeCard,
    openImage,
    handleLikeCard
  );
  placesList.prepend(newCardElement);
  closePopup(newCardPopup);
  newCardForm.reset();
}

formElement.addEventListener("submit", handleEditProfileFormSubmit);
newCardForm.addEventListener("submit", handleNewCardFormSubmit);
>>>>>>> 3064162b4ea692adbd80a9c07f3b8b184540a276
