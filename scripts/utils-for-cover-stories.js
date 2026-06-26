const initBodyElements = () => ({
  url: document.querySelector('meta[property="og:url"]'),
  author: document.querySelector('meta[name="author"]'),
  person: document.querySelector('meta[property="og:title"]'),
  header: document.querySelector("body > header"),
  pageTop: document.querySelector(".pagetop"),
  pageTopMarker: document.querySelector(".pagetop-marker"),
  authorName: document.querySelector(".author-name"),
  time: document.querySelector("time"),
  content: document.querySelector(".article-content"),
}); // Элементы тела страницы
const getSectionContext = (link, section, data, change) => {
  const basicLink = `${link.content}images/`;
  const currentData = data.coverStories[change(section)];

  return { basicLink, currentData };
}; // Главная ссылка и данные по имени секции
const createImageBlock = (
  getImagePath,
  showImage,
  link,
  name,
  altText,
  useSrcset = false,
  gif = false,
  folder = "",
  className = "",
) => {
  const figure = document.createElement("figure");
  if (className) figure.className = className;

  const div = document.createElement("div");

  const img = document.createElement("img");
  img.style.opacity = "0";

  if (useSrcset) {
    img.srcset = `${getImagePath(
      link,
      name + "-910",
      folder,
    )} 910w, ${getImagePath(link, name, folder)} 2400w`;
  }

  let src = getImagePath(link, name, folder);
  if (gif) {
    src = src.replace(/\.jpg$/, ".gif");
  }
  img.src = src;
  img.alt = altText;

  showImage(img);
  div.appendChild(img);
  figure.appendChild(div);
  return figure;
}; // Создание блока с изображением
const initializePageTop = (
  getImagePath,
  showImage,
  link,
  linkImg,
  altText,
  data,
  container,
) => {
  const useSrcset = !data.row;

  container.classList.toggle("with-video", !!data.video);
  container.classList.toggle("flex-direction-row", !!data.row);
  container.classList.toggle("without-video", !data.video && !data.row);

  if (data.video) {
    const videoWrapper = document.createElement("div");
    videoWrapper.className = "video-card";
    const video = document.createElement("video");

    video.setAttribute("muted", "");
    video.setAttribute("autoplay", "");
    video.setAttribute("loop", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("preload", "auto");

    video.poster = `${linkImg}card-910.jpg`;
    video.src = `${link}video/video.mp4`;

    videoWrapper.appendChild(video);
    container.appendChild(videoWrapper);
  } else {
    container.appendChild(
      createImageBlock(
        getImagePath,
        showImage,
        linkImg,
        "card",
        altText,
        useSrcset,
        false,
        "",
        "image-card",
      ),
    );
  }
}; // Создание видео/картинки в шапке
const renderGallery = (
  getImagePath,
  showImage,
  link,
  altText,
  data,
  container,
) => {
  const { total, paired = [], horizontal = [], gif = [] } = data;

  const fragment = document.createDocumentFragment();
  const horizontalSet = new Set(horizontal);
  const gifSet = new Set(gif);
  const pairedMap = new Map();
  for (let i = 0; i < paired.length; i += 2) {
    pairedMap.set(paired[i], paired[i + 1]);
  }

  for (let i = 1; i <= total; i++) {
    const pairSecond = pairedMap.get(i);
    const className = horizontalSet.has(i)
      ? "horizontal-image"
      : "vertical-image";

    if (pairSecond !== undefined) {
      const wrapper = document.createElement("div");
      wrapper.className = "paired-images";

      wrapper.appendChild(
        createImageBlock(
          getImagePath,
          showImage,
          link,
          i,
          altText,
          false,
          false,
          "photo",
          className,
        ),
      );
      wrapper.appendChild(
        createImageBlock(
          getImagePath,
          showImage,
          link,
          pairSecond,
          altText,
          false,
          false,
          "photo",
          className,
        ),
      );
      fragment.appendChild(wrapper);

      i++;
      continue;
    }

    const isGif = gifSet.has(i);

    fragment.appendChild(
      createImageBlock(
        getImagePath,
        showImage,
        link,
        i,
        altText,
        false,
        isGif,
        "photo",
        className,
      ),
    );
  }

  container.appendChild(fragment);
}; // Вывод элементов в структуру HTML

export {
  initBodyElements,
  getSectionContext,
  createImageBlock,
  initializePageTop,
  renderGallery,
};
