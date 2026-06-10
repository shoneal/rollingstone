const initBodyElements = () => ({
  url: document.querySelector('meta[property="og:url"]'),
  author: document.querySelector('meta[name="author"]'),
  header: document.querySelector("body > header"),
  navigation: document.querySelector(".nav-list"),
  title: document.querySelector(".article-title"),
  titleCount: document.querySelector(".article-title .count"),
  authorSections: document.querySelectorAll(".author-name"),
  authorWebsitesList: document.querySelector(".author .nav-list"),
  headerImages: document.querySelector(".featured-media .figure"),
  headerImagesCaption: document.querySelector(".featured-media .figcaption"),
  gallery: document.querySelector(".gallery"),
  slideTemplate: document.getElementById("slide-template"),
}); // Элементы тела страницы
const getSectionContext = (section, data, change) => {
  const basicLink = `https://shoneal.github.io/rollingstone-best-${section}/images/`;
  const currentData = data[change(section)];
  const dataLength = Object.keys(currentData).length;

  return { basicLink, currentData, dataLength };
}; // Главная ссылка, данные по имени секции и длина объекта
const renderAuthorLinks = (allLinks, currentUrl, container) => {
  Object.entries(allLinks).forEach(([name, url]) => {
    if (url === currentUrl.content) return;

    const link = Object.assign(document.createElement("a"), {
      textContent: name,
      href: url,
      target: "_blank",
      rel: "noopener noreferrer",
    });

    const item = document.createElement("li");
    item.appendChild(link);
    container.appendChild(item);
  });
}; // Создание ссылок в навигацию автора
const createNavigation = (dataLength, container) => {
  const blocks = Array.from({ length: Math.ceil(dataLength / 5) }, (_, i) => {
    const start = i * 5 + 1;
    return { start, end: Math.min(start + 4, dataLength) };
  });

  if (blocks.length > 1 && blocks.at(-1).end - blocks.at(-1).start < 3) {
    const last = blocks.pop();
    blocks[blocks.length - 1].end = last.end;
  }

  const fragment = document.createDocumentFragment();
  blocks.reverse().forEach(({ start, end }) => {
    const link = Object.assign(document.createElement("a"), {
      href: `#${end}`,
      textContent: `${end}-${start}`,
    });
    link.dataset.start = start;
    link.dataset.end = end;
    fragment.appendChild(link);
  });
  container.appendChild(fragment);
}; // Создание навигации
const updateActiveLink = (nav) => {
  const links = nav.querySelectorAll("a");
  const slides = document.querySelectorAll(".slide");

  const viewportTop = window.scrollY + window.innerHeight * 0.3;
  const viewportBottom = viewportTop + window.innerHeight * 0.4;

  let currentSlideId = null;

  for (let i = slides.length - 1; i >= 0; i--) {
    const slide = slides[i];
    const id = parseInt(slide.dataset.slideId, 10);
    const rect = slide.getBoundingClientRect();

    const top = rect.top + window.scrollY;
    const bottom = rect.bottom + window.scrollY;

    if (bottom > viewportTop && top < viewportBottom) {
      currentSlideId = id;
      break;
    }
  }

  if (currentSlideId) {
    links.forEach((link) => {
      const start = parseInt(link.dataset.start, 10);
      const end = parseInt(link.dataset.end, 10);
      link.classList.toggle(
        "active",
        currentSlideId >= start && currentSlideId <= end,
      );
    });
  }
}; // Обновление навигации
const handleNavigationClick = (e) => {
  const link = e.target.closest("a");
  if (!link) return;

  e.preventDefault();

  const targetId = link.dataset.end;
  const targetSlide = document.querySelector(
    `.slide[data-slide-id="${targetId}"]`,
  );

  if (targetSlide) targetSlide.scrollIntoView();
}; // Клики по навигации
const initApp = (
  { titleCount, authorSections, author, url, authorWebsitesList, navigation },
  dataLength,
  renderAuthorLinks,
  allLinks,
  createNavigation,
  updateActiveLink,
) => {
  titleCount.textContent = dataLength; // Обновление числа в заголовке
  authorSections.forEach((el) => (el.textContent = author.content)); // Имя автора везде в HTML
  renderAuthorLinks(allLinks, url, authorWebsitesList); // Добавление ссылок в навигацию автора
  createNavigation(dataLength, navigation); // Создание навигации
  updateActiveLink(navigation); // Обновление навигации
}; // Функция общей инициализации

export {
  initBodyElements,
  getSectionContext,
  renderAuthorLinks,
  createNavigation,
  updateActiveLink,
  handleNavigationClick,
  initApp,
};
