"use strict";
import fiftyWomenData from "../assets/fiftyWomenData.js";

function createWomenGrid(grid, data) {
  for (let i = 0; i < data.imgLinks.length; i++) {
    let figure = document.createElement("figure");
    let img = document.createElement("img");
    let itemTop = document.createElement("div");
    let q = document.createElement("q");
    let button = document.createElement("button");
    let itemBottom = document.createElement("div");
    let figcaption = document.createElement("figcaption");
    let blockquote = document.createElement("blockquote");

    figure.classList.add("women-grid__item");
    itemTop.classList.add("item-top");
    itemBottom.classList.add("item-bottom");
    button.classList.add("toggle-item");

    img.src = data.imgLinks[i];
    q.innerText = data.titles[i];
    figcaption.innerText = data.subTitles[i];
    blockquote.innerText = data.texts[i];

    itemTop.append(q, button);
    itemBottom.append(figcaption, blockquote);
    figure.append(img, itemTop, itemBottom);

    grid.append(figure);
  }
  for (let i = 0; i < data.textCards.length; i++) {
    let section = document.createElement("section");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
    h1.innerHTML = "&#8221;";
    p.innerText = data.textCards[i];
    section.append(h1, p);
    section.classList.add("random-excerpt");
    grid.children[(i + 1) * 8].insertAdjacentElement("beforebegin", section);
  }
}
createWomenGrid(document.querySelector(".women-grid"), fiftyWomenData);
// console.log(fiftyWomenData.text[0])

let toggleWomenGridItem = document.querySelectorAll(
  ".women-grid button.toggle-item"
);
toggleWomenGridItem.forEach(btn => {
  btn.addEventListener("click", e => {
    let gridItems = document.querySelectorAll(".women-grid__item");
    gridItems.forEach(item => {
      if (item != e.target.closest(".women-grid__item")) {
        item.children[1].children[1].classList.remove("rotate-the-btn");
        item.classList.remove("expand-to-two-rows");
        item.children[1].classList.remove("move-above-middle");
        item.children[2].classList.remove("move-below-middle");
        item.children[0].classList.remove("colorize");
      }
    });

    console.log("aa");
    e.target.classList.toggle("rotate-the-btn");
    e.target
      .closest(".women-grid__item")
      .classList.toggle("expand-to-two-rows");
    e.target.closest(".item-top").classList.toggle("move-above-middle");
    e.target
      .closest(".item-top")
      .nextElementSibling.classList.toggle("move-below-middle");
    e.target
      .closest(".women-grid__item")
      .firstElementChild.classList.toggle("colorize");
    e.target.closest(".women-grid__item").scrollIntoView();
    // e.target
    //   .closest(".women-grid__item")
    //   .classList.remove("contract-to-one-row");
  });
});
