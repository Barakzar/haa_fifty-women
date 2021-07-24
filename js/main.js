"use strict";
// Contain all scraped texts and links, for fifty women grid.
import fiftyWomenData from "../assets/fiftyWomenData.js";

function createWomenGrid(grid, data) {
  // Create the items in the grid.  (item == html figure element with image and texts)
  for (let i = 0; i < data.imgLinks.length; i++) {
    let figure = document.createElement("figure"); // Each figure contain: img,itemTop,itemBottom.
    let img = document.createElement("img");
    let itemTop = document.createElement("div"); // Each itemTop contain: q,button.
    let q = document.createElement("q");
    let button = document.createElement("button");
    let itemBottom = document.createElement("div"); // Each itemBottom contain: figcaption,blockquote.
    let figcaption = document.createElement("figcaption");
    let blockquote = document.createElement("blockquote");

    figure.classList.add("women-grid__item");
    itemTop.classList.add("item-top");
    itemBottom.classList.add("item-bottom");
    button.classList.add("toggle-item");

    img.src = data.imgLinks[i];
    img.setAttribute("loading", "lazy");
    q.innerText = data.titles[i];
    figcaption.innerText = data.subTitles[i];
    blockquote.innerText = data.texts[i];

    itemTop.append(q, button);
    itemBottom.append(figcaption, blockquote);
    figure.append(img, itemTop, itemBottom);

    grid.append(figure);
  }
  // Insert 6 cubes of text between the 50 grid items.
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

// Click on button, toggle size,color.. of the grid items
let toggleWomenGridItem = document.querySelectorAll(
  ".women-grid button.toggle-item"
);
toggleWomenGridItem.forEach(btn => {
  btn.addEventListener("click", e => {
    // When you click, first removes the style from the former  item.
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

    e.target.classList.toggle("rotate-the-btn"); // The button
    e.target
      .closest(".women-grid__item") //The grid item
      .classList.toggle("expand-to-two-rows");
    e.target.closest(".item-top").classList.toggle("move-above-middle"); // The top of text.
    e.target
      .closest(".item-top")
      .nextElementSibling.classList.toggle("move-below-middle"); // The bottom of text.
    e.target
      .closest(".women-grid__item")
      .firstElementChild.classList.toggle("colorize"); // The image.
    e.target.closest(".women-grid__item").scrollIntoView(); //The grid item
  });
});
