class Index {
  constructor() {
    this.photographersSection = document.querySelector(".photographer-section");
    this.photographersApi = new PhotographersApi("data/photographers.json");
  }

  async main() {
    // Get photographers from photographers.json
    const photographersData = await this.photographersApi.getPhotographers();

    photographersData
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
