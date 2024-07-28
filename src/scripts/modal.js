export function openPopup(popup) {
  popup.classList.add("popup_is-animated");
  setTimeout(() => popup.classList.add("popup_is-opened"), 100);
  document.addEventListener("keydown", handleCLosePopupByEsc);
  popup.addEventListener("click", closePopupOverlay);
}

export function closePopup(popup) {
  setTimeout(() => popup.classList.remove("popup_is-animated"), 600);
  document.removeEventListener("keydown", handleCLosePopupByEsc);
  popup.removeEventListener("click", closePopupOverlay);
  popup.classList.remove("popup_is-opened");
}

export function handleCLosePopupByEsc(evt) {
  if (evt.key === "Escape") {
    const popupOpen = document.querySelector(".popup_is-opened");
    closePopup(popupOpen);
  }
}

export function closePopupOverlay(evt) {
  if (evt.currentTarget === evt.target) {
    closePopup(evt.currentTarget);
  }
}
