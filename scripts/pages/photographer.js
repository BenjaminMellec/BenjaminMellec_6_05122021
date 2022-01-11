class Photographer {
  constructor() {
    this.mainSection = document.querySelector("#main");
    this.photographersApi = new PhotographersApi("data/photographers.json");
  }

  async main() {
    // Get photographers from photographers.json
    const photographersData = await this.photographersApi.getPhotographers();

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const photographerID = urlParams.get("id");

    photographersData
      .map((photographer) => new PhotographerData(photographer))
      .forEach((photographer) => {
        if (photographer.id == photographerID) {
          const Template = new PhotographerHeader(photographer);
          this.mainSection.appendChild(Template.createPhotographerHeader());
        }
      });
  }
}

const photographer = new Photographer();
photographer.main();
