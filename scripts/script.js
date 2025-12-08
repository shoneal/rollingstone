const shows = {
  "The Sopranos": {
    release: "1999-2007",
    network: "HBO",
    rank: 1,
    link: "https://www.imdb.com/title/tt0141842/",
    description:
      "The Sopranos is a crime drama created by David Chase. The series follows Tony Soprano, a New Jersey Mafia boss who suffers from panic attacks. He reluctantly begins seeing psychiatrist Dr. Jennifer Melfi, who encourages him to open up about his difficulties balancing his family life with his criminal life. Widely regarded as one of the greatest and most influential television series of all time, The Sopranos has been credited with kickstarting the Second Golden Age of Television. The series won multiple nominations and awards, including 23 Golden Globe Award nominations (5 wins) and 40 Primetime Emmy Award nominations (11 wins).",
  },
  "Breaking Bad": {
    release: "2008-2013",
    network: "AMC",
    rank: 2,
    link: "https://www.imdb.com/title/tt0903747/",
    description:
      "Breaking Bad is a neo‑western crime drama created and produced by Vince Gilligan for AMC. Set and filmed in Albuquerque, New Mexico, the series follows Walter White, an over‑qualified, dispirited high‑school chemistry teacher struggling with a recent diagnosis of stage‑three lung cancer. White turns to a life of crime and partners with a former student, Jesse Pinkman, to produce and distribute methamphetamine to secure his family’s financial future before he dies, while navigating the dangers of the criminal underworld. Since its conclusion, the show has been lauded by critics as one of the greatest television series of all time. It has also developed a cult following and has received numerous nominations and awards, including 7 Golden Globe Award nominations (2 wins) and 24 Primetime Emmy Award nominations, triumphing in 11 categories.",
  },
  "BoJack Horseman": {
    release: "2014-2020",
    network: "Netflix",
    rank: 3,
    link: "https://www.imdb.com/title/tt3398228/",
    description:
      "BoJack Horseman is an adult animated tragicomedy created by Raphael Bob‑Waksberg. Set primarily in Hollywood, the series revolves around the anthropomorphic horse BoJack Horseman, a washed‑up star of a 1990s sitcom who plans a return to relevance with an autobiography to be written by ghostwriter Diane Nguyen. The show has received 3 Primetime Emmy Award nominations.",
  },
  "Better Call Saul": {
    release: "2015-2022",
    network: "AMC",
    rank: 4,
    link: "https://www.imdb.com/title/tt3032476/",
    description:
      "Better Call Saul is a legal crime drama spin‑off of Breaking Bad, created by Vince Gilligan and Peter Gould for AMC. It is primarily a prequel that focuses on Jimmy McGill, a former con artist aiming to gain respectability as a public defender, and chronicles his gradual transformation into his eventual Breaking Bad persona of Saul Goodman, the flamboyant criminal lawyer with ties to the drug cartel. The series has received 25 Primetime Emmy Award nominations and 6 Golden Globe Award nominations. Though it has yet to secure a win, many reviewers have considered it a worthy successor to Breaking Bad — some deeming it superior to its predecessor — and one of the greatest television series of all time.",
  },
  Atlanta: {
    release: "2016-2022",
    network: "FX",
    rank: 5,
    link: "https://www.imdb.com/title/tt4288182/",
    description:
      "Atlanta is a surrealist comedy‑drama created by Donald Glover for FX. The series follows college dropout and music manager Earnest Marks and rapper Alfred “Paper Boi” Miles as they navigate a strange, apparently otherworldly Atlanta hip‑hop scene. Critically acclaimed, the series has earned 7 Primetime Emmy Award nominations and 2 wins, as well as 4 Golden Globe Award nominations and 2 victories.",
  },
  Barry: {
    release: "2018-2023",
    network: "HBO",
    rank: 6,
    link: "https://www.imdb.com/title/tt5348176/",
    description:
      "Barry is a black comedy crime drama created by Alec Berg and Bill Hader for HBO. Barry follows Barry Berkman, a U.S. Marine and Afghanistan veteran, who works as a hitman and wrestles with loneliness, depression, and guilt caused by his lifestyle as well as his actions during his service. He travels to Los Angeles to kill a target and finds a new sense of purpose when he follows his target into an acting class. The series has been nominated for 22 Primetime Emmy Award, winning 3 times and 10 Golden Globe Award nominations.",
  },
  Severance: {
    release: "2022-present",
    network: "Apple TV+",
    rank: 7,
    link: "https://www.imdb.com/title/tt11280740/",
    description:
      "Severance is a science fiction psychological thriller created by Dan Erickson and executive‑produced and primarily directed by Ben Stiller. The series follows employees at Lumon Industries, a biotechnology corporation, that have undergone “severance” — a procedure that splits a person’s memories between work and their personal life. This creates two separate identities for employees: the “innie”, who has no knowledge of the outside world, and the “outie”, who lives their life outside without any knowledge of their job. Critically acclaimed, the show has earned 3 Golden Globe Award nominations and an impressive 20 Primetime Emmy Award nominations — securing 3 Emmy wins.",
  },
  "Abbott Elementary": {
    release: "2021-present",
    network: "ABC",
    rank: 8,
    link: "https://www.imdb.com/title/tt14218830/",
    description:
      "Abbott Elementary is a mockumentary sitcom created by Quinta Brunson for ABC. Willard R. Abbott Elementary School is a predominantly Black Philadelphia public school where a documentary crew records the lives of teachers working in underfunded, mismanaged schools. Conditions at the school are harsh, and most teachers quit after their second year. The series has received 9 Golden Globe Award nominations (3 wins) and 24 Primetime Emmy Award nominations (3 wins).",
  },
  "The Wire": {
    release: "2002-2008",
    network: "HBO",
    rank: 9,
    link: "https://www.imdb.com/title/tt0306414/",
    description:
      "The Wire is a crime drama created and primarily written by American author and former police reporter David Simon for HBO. The idea for the show started out as a police drama loosely based on the experiences of Simon’s writing partner Ed Burns, a former homicide detective and public school teacher. Set and produced in Baltimore, Maryland, The Wire introduces a different institution of the city and its relationship to law. The series received 2 Primetime Emmy Award nominations.",
  },
  Entourage: {
    release: "2004-2011",
    network: "HBO",
    rank: 10,
    link: "https://www.imdb.com/title/tt0387199/",
    description:
      "Entourage is a comedy‑drama series on HBO. The series was created and largely written by Doug Ellin and chronicles the acting career of Vincent Chase, a young A‑list movie star, and his childhood friends from Queens, New York City, as they attempt to further their nascent careers in Los Angeles. Mark Wahlberg and Stephen Levinson served as the show’s executive producers, and its premise is loosely based on Wahlberg’s experiences as an up‑and‑coming film star. The series received 14 Golden Globe Award nominations (1 win) and 11 Primetime Emmy Award nominations (3 wins).",
  },
  "The Last Dance": {
    release: "2020",
    network: "ESPN/Netflix",
    rank: 11,
    link: "https://www.imdb.com/title/tt8420184/",
    description:
      "The Last Dance is a sports television documentary miniseries co‑produced by ESPN Films and Netflix. Directed by Jason Hehir, the series revolves around Michael Jordan’s career, with particular focus on the 1997–98 season, his final season with the Chicago Bulls. The series features exclusive footage from a film crew with an all‑access pass to the Bulls, and interviews of many NBA personalities. The miniseries won the Primetime Emmy Award for Outstanding Documentary or Nonfiction Series at the 72nd Primetime Emmy Awards.",
  },
  "Sex and the City": {
    release: "1998-2004",
    network: "HBO",
    rank: 12,
    link: "https://www.imdb.com/title/tt0159206/",
    description:
      "Sex and the City is a romantic comedy‑drama created by Darren Star for HBO, based on the newspaper column and 1996 book by Candace Bushnell. The series follows the lives of four female friends living in New York City. The series received 24 Golden Globe Award nominations (8 wins) and 22 Primetime Emmy Award nominations (3 wins).",
  },
  "Brooklyn Nine-Nine": {
    release: "2013-2021",
    network: "Fox/NBC",
    rank: 13,
    link: "https://www.imdb.com/title/tt2467372/",
    description:
      "Brooklyn Nine‑Nine is a police procedural sitcom created by Dan Goor and Michael Schur. Set in the fictional 99th Precinct of the New York City Police Department in Brooklyn, Brooklyn Nine‑Nine follows a team of detectives headed by the serious and intellectual Captain Raymond Holt. The series received 2 Golden Globe Award nominations, winning both, and 4 Primetime Emmy Award nominations.",
  },
  "Rick and Morty": {
    release: "2013-present",
    network: "Adult Swim",
    rank: 14,
    link: "https://www.imdb.com/title/tt2861424/",
    description:
      "Rick and Morty is an adult animated science fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network’s nighttime programming block Adult Swim. The series follows the misadventures of Rick Sanchez, a cynical mad scientist, and his good‑hearted but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures that take place across an infinite number of realities, often traveling to other planets and dimensions through portals and on Rick’s flying saucer. The series received 5 Primetime Emmy Award nominations, winning 2.",
  },
  "Stranger Things": {
    release: "2016-present",
    network: "Netflix",
    rank: 15,
    link: "https://www.imdb.com/title/tt4574334/",
    description:
      "Stranger Things is a mix of horror, science fiction, mystery, fantasy and coming‑of‑age drama created by the Duffer Brothers for Netflix. Set in 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries. The series has received 4 Golden Globe Award nominations and 9 Primetime Emmy Award nominations.",
  },
  "Parks and Recreation": {
    release: "2009-2015",
    network: "NBC",
    rank: 16,
    link: "https://www.imdb.com/title/tt1266020/",
    description:
      "Parks and Recreation is a political satire mockumentary sitcom created by Greg Daniels and Michael Schur. The show focuses on the absurd antics of an Indiana town’s public officials as they pursue sundry projects to make their city a better place. Critically acclaimed, the show earned 4 nominations at the Golden Globe Awards, with 1 victory, and 8 nominations at the Primetime Emmy Awards.",
  },
  "Scenes from a Marriage": {
    release: "2021",
    network: "HBO",
    rank: 17,
    link: "https://www.imdb.com/title/tt12682218/",
    description:
      "Scenes from a Marriage is a drama miniseries which re‑examines the original’s iconic depiction of love, hatred, desire, monogamy, marriage and divorce through the lens of a contemporary American couple, played by Oscar Isaac and Jessica Chastain. For his performance, Isaac was nominated for a Primetime Emmy Award and a Golden Globe Award for Best Actor – Miniseries or Television Film, with Chastain also earning a Golden Globe nomination for Best Actress in a Limited Series, Anthology Series or Television Film.",
  },
  "The Studio": {
    release: "2025-present",
    network: "Apple TV+",
    rank: 18,
    link: "https://www.imdb.com/title/tt23649128/",
    description:
      "The Studio is a satirical cringe comedy created by Seth Rogen and Evan Goldberg. It stars Rogen as an embattled Hollywood studio head struggling to balance corporate demands with his own passion for producing quality films. The show earned 23 nominations at the 77th Primetime Emmy Awards, making it the most-nominated comedy debut in history and tying the record for the most nominations for a single comedy season. It went on to win 13 Emmys from those nominations including Outstanding Comedy Series and Outstanding Lead Actor in a Comedy Series for Rogen.",
  },
  "Jury Duty": {
    release: "2023-present",
    network: "Amazon Freevee",
    rank: 19,
    link: "https://www.imdb.com/title/tt22074164/",
    description:
      "Jury Duty is a reality hoax sitcom created by Lee Eisenberg and Gene Stupnitsky. The series chronicles the inner workings of a jury trial in the US through the eyes of juror Ronald Gladden, a solar contractor from San Diego, who is unaware that his jury duty summons was not official, and that everyone in the courtroom aside from him is an actor. Everything that happens, inside and outside the courtroom, is planned. The show received 2 Golden Globe Award nominations and 3 Primetime Emmy Award nominations.",
  },
  Daredevil: {
    release: "2015-2018",
    network: "Netflix",
    rank: 20,
    link: "https://www.imdb.com/title/tt3322312/",
    description:
      "Marvel's Daredevil is a superhero television series created by Drew Goddard for Netflix, based on the Marvel Comics character Daredevil. Charlie Cox stars as Matt Murdock, a blind lawyer-by-day who fights crime as a masked vigilante by night.",
  },
  "American Vandal": {
    release: "2017-2018",
    network: "Netflix",
    rank: 21,
    link: "https://www.imdb.com/title/tt6877772/",
    description:
      "American Vandal is a mockumentary created by Dan Perrault and Tony Yacenda. The series is a parody of true crime documentaries such as Making a Murderer. The show was nominated for a Primetime Emmy Award and won a Peabody Award.",
  },
  "Master of None": {
    release: "2015-2021",
    network: "Netflix",
    rank: 22,
    link: "https://www.imdb.com/title/tt4635276/",
    description:
      "Master of None is a comedy‑drama created by Aziz Ansari and Alan Yang. The series follows the personal and professional life of Dev, a 30‑year‑old actor in New York. The show received 3 Golden Globe Award nominations (1 win) and 5 Primetime Emmy Award nominations.",
  },
}; // Сериалы

const basicLink = "https://shoneal.github.io/rollingstone/images/";
const getImagePath = (title, folder, format = "jpg") => {
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, "_");
  return `${basicLink}${folder}/${slug}.${format}`;
}; // Путь к изображению

const author = "Jerome Malone";
document
  .querySelectorAll(".author_name")
  .forEach((e) => (e.textContent = author)); // Имя автора везде в HTML

const authorSites = {
  'Screenshot database "Gargantua"': "https://shoneal.github.io/gargantua/",
  "SLAM Gallery": "https://shoneal.github.io/slam-gallery/",
  "Fantasy Basketball": "https://shoneal.github.io/nba-draft/",
  "Fantasy Soccer": "https://shoneal.github.io/fantasy/",
}; // Сайты с ссылками автора

const sitesContainer = document.querySelector(".author_sites_list");
Object.entries(authorSites).forEach(([name, url]) => {
  const link = document.createElement("a");
  link.textContent = name;
  link.href = url;
  link.className = "author_sites_link";
  link.target = "_blank";

  const listItem = document.createElement("li");
  listItem.appendChild(link);

  sitesContainer.appendChild(listItem);
}); // Добавление ссылок в навигацию автора

document.addEventListener("DOMContentLoaded", () => {
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "dark") {
    document.body.classList.add("dark-theme");
  }
}); // Смена темы

const header = document.querySelector(".header");
const headerSubtitle = document.querySelector(".header_subtitle");
const handleScroll = () => {
  const checkpoint =
    headerSubtitle.getBoundingClientRect().top +
    headerSubtitle.offsetHeight / 2;
  header.classList.toggle("header_sticky", checkpoint < 0);
};
handleScroll();
window.addEventListener("scroll", handleScroll); // Липкий выезжающий header

const initializeHeaderImages = (shows) => {
  const keys = Object.keys(shows);
  const selected = new Set();

  while (selected.size < 3) {
    selected.add(keys[Math.floor(Math.random() * keys.length)]);
  }
  document
    .querySelector(".header_img_caption span")
    .insertAdjacentText("beforeend", `'${[...selected].join("', '")}'`);

  const container = document.querySelector(".header_images_wrapper");
  let loaded = 0;
  const onLoad = () => {
    if (++loaded === 3) container.style.opacity = "1";
  };
  [...selected].forEach((key) => {
    const img = Object.assign(document.createElement("img"), {
      src: getImagePath(key, "header/desktop"),
      srcset: `
      ${getImagePath(key, "header/mobile")} 214w,
      ${getImagePath(key, "header/desktop")} 527w
    `,
      sizes: "100vw",
      alt: key,
      onload: onLoad,
    });
    container.appendChild(
      Object.assign(document.createElement("div"), {
        className: "header_image",
        appendChild: img,
      })
    );
  });
};
initializeHeaderImages(shows); // Создание главной картинки

const gallery = document.querySelector(".gallery");
const slideTemplate = document.getElementById("slide-template");
Object.entries(shows)
  .sort(([, a], [, b]) => b.rank - a.rank)
  .forEach(([title, data]) => {
    const clone = slideTemplate.content.cloneNode(true);
    const slide = clone.querySelector(".slide");

    slide.querySelector(".slide_link").href = data.link;
    slide.querySelector(".slide_number").textContent = data.rank;
    slide.querySelector(".slide_title").textContent = title;
    slide.querySelector(".slide_subtitle").textContent = data.release;
    slide.querySelector(".slide_studio").textContent = data.network;

    const img = slide.querySelector(".slide_img");
    img.src = getImagePath(title, "main/desktop");
    img.srcset = `
  ${getImagePath(title, "main/mobile")} 640w,
  ${getImagePath(title, "main/desktop")} 1280w
`;
    img.sizes = "100vw";
    img.alt = title;
    img.addEventListener("load", () => {
      img.style.opacity = "1";
    });

    let desc = data.description;
    Object.keys(shows).forEach((showTitle) => {
      desc = desc.replaceAll(showTitle, `<em>${showTitle}</em>`);
    });
    slide.querySelector(".slide_description").innerHTML = desc;

    slide.id = `slide-${data.rank}`;
    gallery.appendChild(clone);
  }); // Создание слайдов

const navigation = document.querySelector(".navigation");
const showsTotal = Object.keys(shows).length;
document.querySelector(".header_number").textContent = showsTotal; // Обновление заголовка
function createNavigationBlocks() {
  const blocks = [];
  for (let start = 1; start <= showsTotal; start += 5) {
    blocks.push({
      start,
      end: Math.min(start + 4, showsTotal),
    });
  }

  if (blocks.length > 1) {
    const last = blocks[blocks.length - 1];
    if (last.end - last.start < 4) {
      blocks[blocks.length - 2].end = last.end;
      blocks.pop();
    }
  }

  blocks.reverse().forEach((block) => {
    const link = createLinkElement(block);
    navigation.appendChild(link);
  });
}
function createLinkElement({ start, end }) {
  const link = document.createElement("a");
  link.className = "navigation_link";
  link.href = `#${end}`;
  link.textContent = `${end}-${start}`;
  return link;
}
createNavigationBlocks(); // Создание навигации
navigation.addEventListener("click", (e) => {
  if (!e.target.classList.contains("navigation_link")) return;

  const targetRank = e.target.hash.slice(1);
  const targetSlide = document.getElementById(`slide-${targetRank}`);
  if (!targetSlide) return;

  const headerHeight =
    document.querySelector(".header_sticky")?.offsetHeight || 0;
  window.scrollTo({
    top: targetSlide.offsetTop - headerHeight - 10,
    behavior: "auto",
  });
}); // Обработка кликов по навигации
