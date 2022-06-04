"use strict";

const openWindow = document.querySelector(".about");
const overlay = document.querySelector(".overlay");
const windows = document.querySelector(".window");
const closeWindow = document.querySelector(".close");

const open = function () {
  windows.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const close = function () {
  windows.classList.add("hidden");
  overlay.classList.add("hidden");
};

openWindow.addEventListener("click", open);
overlay.addEventListener("click", close);
closeWindow.addEventListener("click", close);
