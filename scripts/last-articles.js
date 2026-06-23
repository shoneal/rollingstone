const renderLastArticlesAndDate = (
  primaryData,
  secondaryData,
  currentUrl,
  count,
  className,
  position,
  date,
  data,
) => {
  const prepareList = (obj) =>
    Object.entries(obj)
      .filter(([_, { link }]) => link !== currentUrl.content)
      .map(([name, rawData]) => {
        let displayName = name;
        if (data?.[rawData.key]) {
          const totalCount = Object.keys(data[rawData.key]).length;
          if (totalCount > 0) {
            displayName = name.startsWith("The ")
              ? `The ${totalCount} ${name.slice(4)}`
              : `${totalCount} ${name}`;
          }
        }
        return {
          name,
          displayName,
          ...rawData,
        };
      })
      .sort((a, b) => new Date(b.published) - new Date(a.published));

  const mainItems = prepareList(primaryData);
  const backupItems = prepareList(secondaryData);
  const items = [...mainItems, ...backupItems].slice(0, count);

  const section = document.createElement("section");
  section.className = "last-articles";

  const h2 = document.createElement("h2");
  h2.className = "section-heading";
  h2.textContent = "Last articles";
  section.appendChild(h2);

  const cardsContainer = document.createElement("div");
  cardsContainer.className = "cards";
  const fragment = document.createDocumentFragment();

  items.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";

    const link = document.createElement("a");
    link.href = item.link;

    const imgWrapper = document.createElement("div");
    imgWrapper.className = "card-image-wrapper";
    const innerDiv = document.createElement("div");
    const img = document.createElement("img");
    img.src = `${item.link}images/card-225.jpg`;
    innerDiv.appendChild(img);
    imgWrapper.appendChild(innerDiv);
    link.appendChild(imgWrapper);

    const h3 = document.createElement("h3");
    h3.textContent = item.displayName;
    link.appendChild(h3);

    card.appendChild(link);
    fragment.appendChild(card);
  });

  cardsContainer.appendChild(fragment);
  section.appendChild(cardsContainer);

  const targets = document.querySelectorAll(`.${className}`);
  const target =
    position === "first" ? targets[0] : targets[targets.length - 1];
  target.insertAdjacentElement("afterend", section);

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

export { renderLastArticlesAndDate };
