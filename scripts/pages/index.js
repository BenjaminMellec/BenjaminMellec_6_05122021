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

class Index {
  constructor() {
    this.photographersSection = document.querySelector(".photographer-section");
    this.photographersApi = new PhotographersApi("data/photographers.json");
  }

  async main() {
    // Ici je récupère mes films de mon fichier old-movie-data.json
    const photographersData = await this.photographersApi.getPhotographers();
    // const photographersData = await getJson().then((array) => {
    //   return array.photographers;
    // });

    photographersData
      // Ici, je transforme mon tableau de données en un tableau de classe Movie
      .map((photographer) => new Photographer(photographer))
      .forEach((photographer) => {
        const Template = new PhotographerCard(photographer);
        this.photographersSection.appendChild(
          Template.createPhotographerCard()
        );
      });
  }
}

const index = new Index();
index.main();
