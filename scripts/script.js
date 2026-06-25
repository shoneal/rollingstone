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
const prepareItems = (data, globalData) => {
  return Object.entries(data).map(([key, value]) => {
    let type = "covers";
    let displayTitle = key;

    if (value.key) {
      type = "lists";

      const count = Object.keys(globalData[value.key]).length;

      displayTitle = key.startsWith("The ")
        ? `The ${count} ${key.slice(4)}`
        : `${count} ${key}`;
    }

    return {
      ...value,
      type,
      displayTitle,
    };
  });
}; // Подсчет элементов в списках
const renderLinks = (items, template, container, showImage) => {
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
    const path910 = imgPath(item.link, "910");
    const path225 = imgPath(item.link, "225");
    img.src = path910;
    img.srcset = `${path225} 225w, ${path910} 910w`;
    img.alt = item.displayTitle;
    showImage(img);

    kicker.textContent = item.type === "lists" ? "The Lists" : "Cover Story";
    title.textContent = item.displayTitle;

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

  const allLinks = prepareItems({ ...listsLinks, ...coversLinks }, data); // Объединяем данные перед обработкой
  allLinks.sort((a, b) => new Date(b.published) - new Date(a.published)); // Сортируем по дате
  renderLinks(allLinks, bodyElements.template, bodyElements.cards, showImage); // Вывод элементов в структуру HTML

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
