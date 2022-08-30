"use strict";
const firstClass = document.querySelector(".tab1");
const secondClass = document.querySelector(".tab2");
const thirdClass = document.querySelector(".tab3");
const fourthClass = document.querySelector(".tab4");
const firstArticle = document.querySelector(".first-article");
const secondArticle = document.querySelector(".second-article");
const thirdArticle = document.querySelector(".third-article");
const fourthArticle = document.querySelector(".fourth-article");

firstClass.addEventListener("click", () => {
  firstArticle.classList.remove("hidden");
  secondArticle.classList.add("hidden");
  thirdArticle.classList.add("hidden");
  fourthArticle.classList.add("hidden");
});

secondClass.addEventListener("click", () => {
  firstArticle.classList.add("hidden");
  secondArticle.classList.remove("hidden");
  thirdArticle.classList.add("hidden");
  fourthArticle.classList.add("hidden");
});

thirdClass.addEventListener("click", () => {
  firstArticle.classList.add("hidden");
  secondArticle.classList.add("hidden");
  thirdArticle.classList.remove("hidden");
  fourthArticle.classList.add("hidden");
});

fourthClass.addEventListener("click", () => {
  firstArticle.classList.add("hidden");
  secondArticle.classList.add("hidden");
  thirdArticle.classList.add("hidden");
  fourthArticle.classList.remove("hidden");
});
