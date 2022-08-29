"use strict";
const firstClass = document.querySelector(".tab1");
const secondClass = document.querySelector(".tab2");
const firstArticle = document.querySelector(".first-article")
const secondArticle = document.querySelector(".second-article")

secondClass.addEventListener("click", () => {
  firstArticle.classList.add("hidden");
  secondArticle.classList.remove("hidden");
});
