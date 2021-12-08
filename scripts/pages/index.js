const getJson = async () => {
  return fetch("data/photographers.json")
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch(function (err) {
      console.log("Erreur du fichier .json");
    });
};

function photographerFactory(data) {
  const { name, portrait } = data;
  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    const img = document.createElement("img");

    img.setAttribute("src", picture);
    const h2 = document.createElement("h2");
    h2.textContent = name;
    article.appendChild(img);
    article.appendChild(h2);
    return article;
  }
  return { name, picture, getUserCardDOM };
}

async function displayData(array) {
  const photographersSection = document.querySelector(".photographer_section");

  array.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupère les datas des photographes
  let photographers;
  await getJson().then((array) => {
    photographers = array.photographers;
    displayData(photographers);
  });
}

init();
