"use strict";
const firstClass = document.querySelector(".tab1");
const secondClass = document.querySelector(".tab2");
const thirdClass = document.querySelector(".tab3");
const fourthClass = document.querySelector(".tab4");
const firstArticle = document.querySelector(".first-article");
const secondArticle = document.querySelector(".second-article");
const thirdArticle = document.querySelector(".third-article");
const fourthArticle = document.querySelector(".fourth-article");
const innerColor1 = document.querySelector(".tab1");
const innerColor2 = document.querySelector(".tab2");
const innerColor3 = document.querySelector(".tab3");
const innerColor4 = document.querySelector(".tab4");
const monTable = document.querySelector(".mon");
const monday = document.querySelector(".Monday");
const tueTable = document.querySelector(".tue");
const tuesday = document.querySelector(".Tuesday");
const wedTable = document.querySelector(".wed");
const wednesday = document.querySelector(".Wednesday");
const thurTable = document.querySelector(".thur");
const thursday = document.querySelector(".Thursday");
const friTable = document.querySelector(".fri");
const friday = document.querySelector(".Friday");
const textColor1 = document.querySelector(".mon");
const textColor2 = document.querySelector(".tue");
const textColor3 = document.querySelector(".wed");
const textColor4 = document.querySelector(".thur");
const textColor5 = document.querySelector(".fri");
const darkBody = document.querySelector("body");
const moonie = document.querySelector(".fa-moon");
const darkie = document.querySelectorAll(".texty");
const burger = document.querySelector(".hamburger-body");


burger.addEventListener("click", function() {
  burger.classList.toggle("open")
})

console.log(darkie);

  moonie.addEventListener("click", () => {
    darkBody.classList.toggle("darkmode");
    for (let i = 0; i < darkie.length; i++) {
      darkie[i].classList.toggle("darkmode-colors")
    }
  });

firstClass.addEventListener("click", () => {
  firstArticle.classList.remove("hidden");
  secondArticle.classList.add("hidden");
  thirdArticle.classList.add("hidden");
  fourthArticle.classList.add("hidden");
  innerColor1.style.color = "#fa3d7c";
  innerColor2.style.color = "#000000";
  innerColor3.style.color = "#000000";
  innerColor4.style.color = "#000000";
});

secondClass.addEventListener("click", () => {
  firstArticle.classList.add("hidden");
  secondArticle.classList.remove("hidden");
  thirdArticle.classList.add("hidden");
  fourthArticle.classList.add("hidden");
  innerColor2.style.color = "#fa3d7c";
  innerColor1.style.color = "#000000";
  innerColor3.style.color = "#000000";
  innerColor4.style.color = "#000000";
});

thirdClass.addEventListener("click", () => {
  firstArticle.classList.add("hidden");
  secondArticle.classList.add("hidden");
  thirdArticle.classList.remove("hidden");
  fourthArticle.classList.add("hidden");
  innerColor3.style.color = "#fa3d7c";
  innerColor2.style.color = "#000000";
  innerColor1.style.color = "#000000";
  innerColor4.style.color = "#000000";
});

fourthClass.addEventListener("click", () => {
  firstArticle.classList.add("hidden");
  secondArticle.classList.add("hidden");
  thirdArticle.classList.add("hidden");
  fourthArticle.classList.remove("hidden");
  innerColor4.style.color = "#fa3d7c";
  innerColor3.style.color = "#000000";
  innerColor2.style.color = "#000000";
  innerColor1.style.color = "#000000";
});

monTable.addEventListener("click", () => {
  monday.classList.remove("hidden");
  tuesday.classList.add("hidden");
  wednesday.classList.add("hidden");
  thursday.classList.add("hidden");
  friday.classList.add("hidden");
  textColor1.style.color = "#fa3d7c";
  textColor2.style.color = "#ffffff";
  textColor3.style.color = "#ffffff";
  textColor4.style.color = "#ffffff";
  textColor5.style.color = "#ffffff";
});

tueTable.addEventListener("click", () => {
  tuesday.classList.remove("hidden");
  monday.classList.add("hidden");
  wednesday.classList.add("hidden");
  thursday.classList.add("hidden");
  friday.classList.add("hidden");
  textColor2.style.color = "#fa3d7c";
  textColor1.style.color = "#ffffff";
  textColor3.style.color = "#ffffff";
  textColor4.style.color = "#ffffff";
  textColor5.style.color = "#ffffff";
});

wedTable.addEventListener("click", () => {
  wednesday.classList.remove("hidden");
  tuesday.classList.add("hidden");
  monday.classList.add("hidden");
  thursday.classList.add("hidden");
  friday.classList.add("hidden");
  textColor3.style.color = "#fa3d7c";
  textColor2.style.color = "#ffffff";
  textColor1.style.color = "#ffffff";
  textColor4.style.color = "#ffffff";
  textColor5.style.color = "#ffffff";
});

thurTable.addEventListener("click", () => {
  thursday.classList.remove("hidden");
  tuesday.classList.add("hidden");
  wednesday.classList.add("hidden");
  monday.classList.add("hidden");
  friday.classList.add("hidden");
  textColor4.style.color = "#fa3d7c";
  textColor2.style.color = "#ffffff";
  textColor3.style.color = "#ffffff";
  textColor1.style.color = "#ffffff";
  textColor5.style.color = "#ffffff";
});

friTable.addEventListener("click", () => {
  friday.classList.remove("hidden");
  tuesday.classList.add("hidden");
  wednesday.classList.add("hidden");
  thursday.classList.add("hidden");
  monday.classList.add("hidden");
  textColor5.style.color = "#fa3d7c";
  textColor2.style.color = "#ffffff";
  textColor3.style.color = "#ffffff";
  textColor4.style.color = "#ffffff";
  textColor1.style.color = "#ffffff";
});
