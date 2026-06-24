import { data } from "https://shoneal.github.io/rollingstone/scripts/data.js";
import {
  listsLinks,
  coversLinks,
} from "https://shoneal.github.io/rollingstone/scripts/links.js";
import {
  changingTheme,
  switchingStickinessHeader,
  textToSlug,
  kebabToCamel,
  showImage,
  getImagePath,
  debounce,
} from "https://shoneal.github.io/rollingstone/scripts/utils.js";


const bodyElements = {
  header: document.querySelector("body > header"),
  cards: document.querySelector(".link-cards"),
  template: document.getElementById("card-template"),
}; // Элементы тела страницы
const renderLinks = (data1, data2, template, container, showImage) => {
  const items = [...Object.entries(data1), ...Object.entries(data2)]
    .map(([title, data], _, entries) => ({
      title,
      ...data,
      type: entries === data1 ? "list" : "cover",
    }))
    .sort((a, b) => new Date(b.published) - new Date(a.published));

  const fragment = document.createDocumentFragment();

  const templateContent = template.content;
  const imgPath = (link, size) => `${link}images/card-${size}.jpg`;

  items.forEach((item) => {
    const linkEl = document.createElement("a");
    linkEl.href = item.link;

    const clone = templateContent.cloneNode(true);

    const [img, kicker, title, time] = [
      clone.querySelector(".card-image img"),
      clone.querySelector(".article-kicker"),
      clone.querySelector(".title"),
      clone.querySelector("time"),
    ];

    img.style.opacity = "0";
    img.src = imgPath(item.link, "910");
    ((img.srcset = `${imgPath(item.link, "225")} 225w, ${imgPath(
      item.link,
      "910",
    )} 910w`),
      (img.alt = item.title));
    showImage(img);

    kicker.textContent = item.type === "list" ? "The Lists" : "Cover Story";
    title.textContent = item.title;

    const date = new Date(item.published);
    time.datetime = date.toISOString().replace("Z", "-0400");
    time.textContent = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    linkEl.appendChild(clone);
    fragment.appendChild(linkEl);
  });

  container.appendChild(fragment);
}; // Вывод элементов в структуру HTML
document.addEventListener("DOMContentLoaded", () => {
  changingTheme(); // Смена темы

  renderLinks(
    listsLinks,
    coversLinks,
    bodyElements.template,
    bodyElements.cards,
    showImage,
  ); // Вывод элементов в структуру HTML

  switchingStickinessHeader(
    document.querySelector(".card:first-child"),
    bodyElements.header,
  ); // Липкий выезжающий header
}); // Изначальная инициализация
let ticking = false; // Задержка для скролла
window.addEventListener("scroll", () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      switchingStickinessHeader(
        document.querySelector(".card:first-child"),
        bodyElements.header,
      ); // Липкий выезжающий header

      ticking = false;
    });
    ticking = true;
  }
}); // Обработчик скролла
