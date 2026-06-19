const changingTheme = () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
  }
}; // Смена темы
const switchingStickinessHeader = (mark, header) => {
  const { bottom } = mark.getBoundingClientRect();
  header.classList.toggle("sticky", bottom < 0);
}; // Липкий выезжающий header
const textToSlug = (text) => {
  return text
    .replace(/\bIV\b/g, "4")
    .replace(/\bV\b/g, "5")
    .replace(/\bIII\b/g, "3")
    .replace(/\bII\b/g, "2")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/['’]/g, "")
    .replace(/\s*\(.*?\)\s*/g, " ")
    .replace(/[.,:;]/g, " ")
    .trim()
    .replace(/\s+/g, "-");
}; // Трансформация текста
const kebabToCamel = (str) => {
  return str.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
}; // kebab-case в camelCase
const showImage = (img) => {
  const onLoadOrError = () => {
    img.style.opacity = "1";
    img.removeEventListener("load", onLoadOrError);
    img.removeEventListener("error", onLoadOrError);
  };

  if (img.complete) {
    onLoadOrError();
  } else {
    img.addEventListener("load", onLoadOrError, { once: true });
    img.addEventListener("error", onLoadOrError, { once: true });
  }
}; // Функция для настройки загрузки изображения
const getImagePath = (link, name, folder, useSlug = false) => {
  const transformedName = useSlug ? textToSlug(name) : name;

  if (folder) {
    return `${link}${folder}/${transformedName}.jpg`;
  }
  return `${link}${transformedName}.jpg`;
}; // Путь к изображению
const debounce = (func, delay) => {
  let timeout;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(func, delay);
  };
}; // Дебаунс для ресайза

export {
  changingTheme,
  switchingStickinessHeader,
  textToSlug,
  kebabToCamel,
  showImage,
  getImagePath,
  debounce,
};
