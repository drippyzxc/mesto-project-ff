import { avatarForm, editAvatarElement, avatarImage } from "../variables.js";
import { updateAvatar } from "../api.js";
import { closePopup } from "../modal.js";
import { handleSubmit } from "./formUtils.js";
export function handleFormAvatarSubmit(evt) {
  function makeRequest() {
    const avatar = editAvatarElement.elements["avatar-link"].value;
    return updateAvatar(avatar).then((res) => {
      avatarImage.setAttribute(
        "style",
        `background-image: url('${res.avatar}')`
      );
      closePopup(avatarForm);
    });
  }

  handleSubmit(makeRequest, evt);
}
