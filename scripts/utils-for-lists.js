const initBodyElements = () => ({
  url: document.querySelector('meta[property="og:url"]'),
  author: document.querySelector('meta[name="author"]'),
  header: document.querySelector("body > header"),
  navigation: document.querySelector(".nav-list"),
  title: document.querySelector(".article-title"),
  titleCount: document.querySelector(".article-title .count"),
  authorName: document.querySelector(".author-name"),
  time: document.querySelector("time"),
  headerImages: document.querySelector(".featured-media .figure"),
  headerImagesCaption: document.querySelector(".featured-media .figcaption"),
  gallery: document.querySelector(".gallery"),
  slideTemplate: document.getElementById("slide-template"),
}); // Элементы тела страницы
const getSectionContext = (link, section, data, change) => {
  const basicLink = `${link.content}images/`;
  const currentData = data[change(section)];
  const dataLength = Object.keys(currentData).length;

  return { basicLink, currentData, dataLength };
}; // Главная ссылка, данные по имени секции и длина объекта
const createResponsiveImage = (
  getImagePath,
  link,
  key,
  folderType,
  baseSize,
  sizes,
  useSlug = true,
) => {
  const src = getImagePath(link, key, `${folderType}/${baseSize}`, useSlug);

  const srcset = sizes
    .map(
      (size) =>
        `${getImagePath(link, key, `${folderType}/${size}`, useSlug)} ${size}w`,
    )
    .join(", ");

  return { src, srcset };
}; // Создание src и srcset для изображений с адаптивными размерами
const initializeHeaderImages = (
  getImagePath,
  link,
  data,
  container,
  caption,
  config = {},
) => {
  const {
    getKey = (item, key) => key,
    getAuthor = (item) => item.author,
    filterFn = () => true,
    captionFormatter = (authors) => authors.join(", "),
  } = config;

  const filtredKeys = Object.entries(data)
    .filter(([key, item]) => filterFn(item, key))
    .map(([key]) => key);

  const randomElements = [];
  while (randomElements.length < 3) {
    const key = filtredKeys[Math.floor(Math.random() * filtredKeys.length)];
    if (!randomElements.includes(key)) randomElements.push(key);
  }

  let loadedCount = 0;
  const onImageLoad = () =>
    ++loadedCount === randomElements.length && (container.style.opacity = "1");

  const fragment = document.createDocumentFragment();

  for (const key of randomElements) {
    const item = data[key];
    const imageKey = getKey(item, key);
    const author = getAuthor(item, key);

    const img = Object.assign(document.createElement("img"), {
      src: getImagePath(link, author, "header/desktop", true),
      srcset: `${getImagePath(
        link,
        author,
        "header/mobile",
        true,
      )} 300w, ${getImagePath(link, author, "header/desktop", true)} 2400w`,
      sizes: "100vw",
      alt: author,
      onload: onImageLoad,
    });

    const wrapper = document.createElement("div");
    wrapper.appendChild(img);
    fragment.appendChild(wrapper);
  }

  container.appendChild(fragment);

  const authors = randomElements.map((key) => getAuthor(data[key], key));
  caption.textContent += captionFormatter(authors);
}; // Создание картинки в шапке
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
  { titleCount, authorName, author, navigation },
  dataLength,
  coversLinks,
  listsLinks,
  createNavigation,
  updateActiveLink,
) => {
  titleCount.textContent = dataLength; // Обновление числа в заголовке
  authorName.textContent = author.content; // Имя автора в HTML
  createNavigation(dataLength, navigation); // Создание навигации
  updateActiveLink(navigation); // Обновление навигации
}; // Функция общей инициализации

export {
  initBodyElements,
  getSectionContext,
  createResponsiveImage,
  initializeHeaderImages,
  createNavigation,
  updateActiveLink,
  handleNavigationClick,
  initApp,
};
