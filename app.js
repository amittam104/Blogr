"use strict";

const openMenuEl = document.querySelector(".menu-open");
const navPanelEl = document.querySelector(".navigation-panel");
const closeMenuEl = document.querySelector(".menu-close");
const productNavEL = document.querySelector(".nav-prod");
const companyNavEL = document.querySelector(".nav-comp");
const connectNavEL = document.querySelector(".nav-conn");
const prodDropdownNavEL = document.querySelector(".dropdown-prod");
const compDropdownNavEL = document.querySelector(".dropdown-comp");
const connDropdownNavEL = document.querySelector(".dropdown-conn");

openMenuEl.addEventListener("click", function () {
  navPanelEl.style.display = "block";
  closeMenuEl.classList.remove("hidden");
  openMenuEl.classList.add("hidden");
});

closeMenuEl.addEventListener("click", function () {
  navPanelEl.style.display = "none";
  openMenuEl.classList.remove("hidden");
  closeMenuEl.classList.add("hidden");
});

productNavEL.addEventListener("click", function () {
  prodDropdownNavEL.classList.toggle("hidden");
  compDropdownNavEL.classList.add("hidden");
  connDropdownNavEL.classList.add("hidden");
});

companyNavEL.addEventListener("click", function () {
  compDropdownNavEL.classList.toggle("hidden");
  prodDropdownNavEL.classList.add("hidden");
  connDropdownNavEL.classList.add("hidden");
});

connectNavEL.addEventListener("click", function () {
  connDropdownNavEL.classList.toggle("hidden");
  prodDropdownNavEL.classList.add("hidden");
  compDropdownNavEL.classList.add("hidden");
});
