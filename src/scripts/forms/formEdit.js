import { editProfileInfo } from "../api.js";
import { closePopup } from "../modal.js";
import {
  nameInput,
  jobInput,
  profileTitle,
  profileDescription,
} from "../variables.js";
import { handleSubmit } from "./formUtils.js";

export function handleEditProfileClick() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
}

export function handleFormSubmit(evt) {
  function makeRequest() {
    const name = nameInput.value;
    const about = jobInput.value;
    return editProfileInfo(name, about).then((dataUser) => {
      profileTitle.textContent = dataUser.name;
      profileDescription.textContent = dataUser.about;
      console.dir(name, about);
      handleEditProfileClick();
      closePopup(evt.target.closest(".popup_is-opened"));
    });
  }

  handleSubmit(makeRequest, evt);
}
