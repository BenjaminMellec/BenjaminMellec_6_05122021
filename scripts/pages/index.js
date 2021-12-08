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
