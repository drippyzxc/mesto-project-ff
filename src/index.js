import "./pages/index.css";
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

function renderInitialCards() {
  initialCards.forEach((cardData) => {
    placesList.append(
      createCard(cardData, removeCard, openImage, handleLikeCard)
    );
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
}

addButton.addEventListener("click", function () {
  openPopup(newCardPopup);
});

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
