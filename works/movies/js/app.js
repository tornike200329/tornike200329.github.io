const btn = document.querySelector(".auth");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const close = document.querySelector(".close");

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

btn.addEventListener("click", openModal);

overlay.addEventListener("click", closeModal);

close.addEventListener("click", closeModal);
