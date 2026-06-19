const initBodyElements = () => ({
  url: document.querySelector('meta[property="og:url"]'),
  author: document.querySelector('meta[name="author"]'),
  person: document.querySelector('meta[property="og:title"]'),
  header: document.querySelector("body > header"),
  cardImage: document.querySelector(".card-image img"),
  authorName: document.querySelector(".author-name"),
  time: document.querySelector("time"),
  content: document.querySelector(".article-content"),
  lastArticlesTemplate: document.getElementById("last-articles-template"),
}); // Элементы тела страницы
const getSectionContext = (link, section, data, change) => {
  const basicLink = `${link.content}images/`;
  const currentData = data.coverStories[change(section)];

  return { basicLink, currentData };
}; // Главная ссылка и данные по имени секции
const createImage = (
  img,
  link,
  name,
  altText,
  useSrcset = false,
  folder = "",
) => {
  img.style.opacity = "0";

  if (useSrcset) {
    img.srcset = `${getImagePath(
      link,
      name + "-910",
      folder,
    )} 910w, ${getImagePath(link, name, folder)} 2400w`;
  }

  img.src = getImagePath(link, name, folder);
  img.alt = altText;

  showImage(img);
}; // Создание изображения
const createImageBlock = (
  link,
  name,
  altText,
  className = "",
  folder = "photo",
) => {
  const figure = document.createElement("figure");
  if (className) figure.className = className;

  const img = document.createElement("img");
  createImage(img, link, name, altText, false, folder);
  figure.appendChild(img);
  return figure;
}; // Создание блока с изображением
const renderGallery = (data, container, link, altText) => {
  const { total, paired = [], horizontal = [] } = data;

  const fragment = document.createDocumentFragment();
  const horizontalSet = new Set(horizontal);
  const pairedMap = new Map();
  for (let i = 0; i < paired.length; i += 2) {
    pairedMap.set(paired[i], paired[i + 1]);
  }

  for (let i = 1; i <= total; i++) {
    const pairSecond = pairedMap.get(i);

    if (pairSecond !== undefined) {
      const wrapper = document.createElement("figure");
      wrapper.className = "paired-image";

      wrapper.appendChild(createImageBlock(link, i, altText));
      wrapper.appendChild(createImageBlock(link, pairSecond, altText));
      fragment.appendChild(wrapper);

      i++;
      continue;
    }

    const className = horizontalSet.has(i) ? "horizontal-image" : "";
    fragment.appendChild(createImageBlock(link, i, altText, className));
  }

  container.appendChild(fragment);
}; // Вывод элементов в структуру HTML
const renderLastArticlesAndDate = (
  primaryData,
  secondaryData,
  currentUrl,
  count,
  template,
  className,
  position,
  date,
) => {
  const prepareList = (obj) =>
    Object.entries(obj)
      .filter(([_, { link }]) => link !== currentUrl.content)
      .map(([name, data]) => ({ name, ...data }))
      .sort((a, b) => new Date(b.published) - new Date(a.published));

  const mainItems = prepareList(primaryData);
  const backupItems = prepareList(secondaryData);

  let items = [...mainItems];
  if (items.length < count) {
    items.push(...backupItems.slice(0, count - items.length));
  }
  items = items.slice(0, count);

  const baseCard = template.content.querySelector(".card");
  const wrapper = document.createElement("div");
  wrapper.appendChild(template.content.cloneNode(true));
  const container = wrapper.querySelector(".cards");

  const currentCount = container.children.length;
  for (let i = currentCount; i < count; i++) {
    container.appendChild(baseCard.cloneNode(true));
  }

  const cards = container.querySelectorAll(".card");
  for (let i = 0; i < items.length; i++) {
    cards[i].querySelector("a").href = items[i].link;
    cards[i].querySelector("img").src =
      `${items[i].link}images/twitter-image.jpg`;
    cards[i].querySelector("h3").textContent = items[i].name;
  }

  const targets = document.querySelectorAll(`.${className}`);
  const target =
    position === "first" ? targets[0] : targets[targets.length - 1];
  target.insertAdjacentElement("afterend", wrapper);

  const currentPage =
    Object.values(primaryData).find((l) => l.link === currentUrl.content) ||
    Object.values(secondaryData).find((l) => l.link === currentUrl.content);

  if (currentPage?.published) {
    const d = new Date(currentPage.published);
    date.datetime = d.toISOString().replace("Z", "-0400");
    date.textContent = d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
}; // Создание последних ссылок автора и времени публикации страницы
const initApp = (
  { authorName, author, url, lastArticlesTemplate, time },
  renderLastArticlesAndDate,
  coversLinks,
  listsLinks,
) => {
  authorName.textContent = author.content; // Имя автора в HTML

  renderLastArticlesAndDate(
    coversLinks,
    listsLinks,
    url,
    4,
    lastArticlesTemplate,
    "article-content figure",
    "first",
    time,
  ); // Добавление последних ссылок автора и времени публикации страницы
}; // Функция общей инициализации

export {
  initBodyElements,
  getSectionContext,
  createImage,
  createImageBlock,
  renderGallery,
  renderLastArticlesAndDate,
  initApp,
};
