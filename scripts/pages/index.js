class Index {
  constructor() {
    this.mainSection = document.querySelector("#main");
    this.photographersApi = new PhotographersApi("data/photographers.json");
  }

  async main() {
    // Get photographers from photographers.json
    const photographersData = await this.photographersApi.getPhotographers();
    const photographersSection = document.createElement("section");

    photographersSection.classList.add("photographers-section");

    photographersData
      .map((photographer) => new DataFactory(photographer, "photographer"))
      .forEach((photographer) => {
        const Template = new PhotographerCard(photographer);

        photographersSection.appendChild(Template.createPhotographerCard());
        this.mainSection.appendChild(photographersSection);
      });
  }
}

const index = new Index();
index.main();
