const editProfileBtn = document.querySelector(".profile__button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = editProfileModal.querySelector("#profile-name-input");
const editProfileDescriptionInput = editProfileModal.querySelector("#profile-description-input");

const newPostBtn = document.querySelector(".profile__add-button");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");
const addNewPost = newPostModal.querySelector(".modal__form");
const addCardImageLink = newPostModal.querySelector("#card-image-input");
const addPostDescription = newPostModal.querySelector("#post-description-input");

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

const addImageLink = document.querySelector(".card__image");
const addPostCaption = document.querySelector(".card__title");

editProfileBtn.addEventListener("click", function() {
editProfileNameInput.value = profileNameEl.textContent;
editProfileDescriptionInput.value = profileDescriptionEl.textContent;
addCardImageLink.value = addImageLink.textContent;
addPostDescription.value = addPostCaption.textContent;
editProfileModal.classList.add("modal_is-opened");
});

editProfileCloseBtn.addEventListener("click", function() {
editProfileModal.classList.remove("modal_is-opened");
});

newPostBtn.addEventListener("click", function() {
newPostModal.classList.add("modal_is-opened");
});

newPostCloseBtn.addEventListener("click", function() {
newPostModal.classList.remove("modal_is-opened");
});

function handleEditProfileSubmit(evt) {
    profileNameEl.textContent = editProfileNameInput.value;
    profileDescriptionEl.textContent = editProfileDescriptionInput.value
    evt.preventDefault();
    console.log("submitting");
    editProfileModal.classList.remove("modal_is-opened");
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);

function handleAddCardSubmit(evt) {
   addImageLink.textContent = addCardImageLink.value;
   addPostCaption.textContent = addPostDescription.value;
   evt.preventDefault();
   console.log("submitting");
   newPostModal.classList.remove("modal_is-opened");
}

addNewPost.addEventListener("submit", handleAddCardSubmit);
