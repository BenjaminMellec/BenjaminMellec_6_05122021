let jsonUrl =
  "https://benjaminmellec.github.io/BenjaminMellec_6_05122021/data/photographers.json";

const getJson = async () => {
  fetch(jsonUrl)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.photographers);
      return data.photographers;
    })
    .catch(function (err) {
      // Une erreur est survenue
    });
};
getJson();

const getPhotographers = async () => {
  try {
    const response = await fetch(jsonUrl);
    const { photographers } = await response.json();
    console.log(photographers);
    return photographers;
  } catch (error) {
    return error;
  }
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
  const { photographers } = await getPhotographers();
  console.log(photographers);
  // displayData(photographers);
}

init();
