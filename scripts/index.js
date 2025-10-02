const editBtn = document.querySelector(".profile__button");
const editModal = document.querySelector("#edit-profile-modal");
const editCloseBtn = editModal.querySelector(".modal__close-btn");

const newPostBtn = document.querySelector(".profile__add-button");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");

editBtn.addEventListener("click", function() {
editModal.classList.add("modal_is-opened");
});

editCloseBtn.addEventListener("click", function() {
editModal.classList.remove("modal_is-opened");
});

newPostBtn.addEventListener("click", function() {
newPostModal.classList.add("modal_is-opened");
});

newPostCloseBtn.addEventListener("click", function() {
newPostModal.classList.remove("modal_is-opened");
});