class Photographer {
  constructor() {
    this.body = document.querySelector("body");
    this.mainSection = document.querySelector("#main");
    this.photographersApi = new PhotographersApi("data/photographers.json");
    this.mediasApi = new MediasApi("data/photographers.json");
  }

  async main() {
    // Get necessary datas and initialize variables
    const photographersData = await this.photographersApi.getPhotographers();
    const mediasData = await this.mediasApi.getMedias();
    const medias = [];
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const urlID = urlParams.get("id");
    let totalLikes = 0;
    let photographerData = {};

    // Returns the data of the photographer based on the ID parameter of the url
    photographersData
      .map((photographer) => new DataFactory(photographer, "photographer"))
      .forEach((photographer) => {
        photographer;
        if (photographer.id == urlID) {
          photographerData = photographer;
          return photographerData;
        }
      });

    // Returns the data of the medias gallery based on the photographer ID
    mediasData
      .map((media) => new DataFactory(media, "media"))
      .forEach((media) => {
        if (media.photographerId == photographerData.id) {
          totalLikes = totalLikes + media.likes;
          medias.push(media);
        }
      });

    // Create templates to display
    const headerTemplate = new PhotographerHeader(photographerData);
    const galleryFilter = new PhotographerGalleryFilter(medias, totalLikes);
    const modal = new PhotographerContactModal(photographerData.name);
    const counterTemplate = new PhotographerLikesCounter(
      totalLikes,
      photographerData.price
    );

    // Display the templates on the photographer page
    this.mainSection.appendChild(headerTemplate.createPhotographerHeader());
    this.mainSection.appendChild(
      galleryFilter.createPhotographerGalleryFilter()
    );
    this.mainSection.appendChild(
      counterTemplate.createPhotographerLikesCounter()
    );
    galleryFilter.customizeSelect();
    this.body.appendChild(modal.createPhotographerContactModal());
  }
}

const photographer = new Photographer();
photographer.main();
