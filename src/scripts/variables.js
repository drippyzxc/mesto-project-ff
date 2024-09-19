export const placesList = document.querySelector(".places__list");
export const popups = Array.from(document.querySelectorAll(".popup"));
export const editProfilePopup = document.querySelector(".popup_type_edit");
export const newCardPopup = document.querySelector(".popup_type_new-card");
export const popupImageOpen = document.querySelector(".popup_type_image");
export const popupImage = popupImageOpen.querySelector(".popup__image");
export const popupText = popupImageOpen.querySelector(".popup__caption");
export const editProfileOpenButton = document.querySelector(
  ".profile__edit-button"
);
export const profileTitle = document.querySelector(".profile__title");
export const profileDescription = document.querySelector(
  ".profile__description"
);
export const profileAddButton = document.querySelector(".profile__add-button");
export const avatarForm = document.querySelector(".popup_type_avatar");
export const deletePopup = document.querySelector(".popup_type_delete-card");
export const avatarImage = document.querySelector(".profile__image");
export const nameInput = document.querySelector(".popup__input_type_name");
export const jobInput = document.querySelector(
  ".popup__input_type_description"
);
export const closePopupButton = document.querySelectorAll(".popup__close");
export const editProfileForm = document.forms["edit-profile"];
export const newPlaceForm = document.forms["new-place"];
export const editAvatarElement = document.forms["edit-avatar"];
export const deleteCardForm = document.forms["delete-card"];
export const newPlaceNameInput = newPlaceForm.elements["place-name"];
export const newLinkInput = newPlaceForm.elements.link;
