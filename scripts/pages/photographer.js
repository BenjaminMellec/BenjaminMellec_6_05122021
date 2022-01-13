class Photographer {
  constructor() {
    this.mainSection = document.querySelector("#main");
    this.photographersApi = new PhotographersApi("data/photographers.json");
    this.mediasApi = new MediasApi("data/photographers.json");
  }

  async main() {
    // Get photographers from photographers.json
    const photographersData = await this.photographersApi.getPhotographers();
    const mediasData = await this.mediasApi.getMedias();
    const medias = [];

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const photographerID = urlParams.get("id");

    // Display the photographer header
    photographersData
      .map((photographer) => new PhotographerData(photographer))
      .forEach((photographer) => {
        if (photographer.id == photographerID) {
          const headerTemplate = new PhotographerHeader(photographer);
          this.mainSection.appendChild(
            headerTemplate.createPhotographerHeader()
          );

          mediasData
            .map((media) => new MediaData(media))
            .forEach((media) => {
              if (media.photographerId == photographerID) {
                medias.push(media);
              }
            });

          const galleryTemplate = new PhotographerGallery(medias);
          this.mainSection.appendChild(
            galleryTemplate.createPhotographerGallery()
          );
        }
      });
  }
}

const photographer = new Photographer();
photographer.main();
