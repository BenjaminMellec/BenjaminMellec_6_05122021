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

          // Display the photographer gallery
          let totalLikes = 0;
          mediasData
            .map((media) => new MediaData(media))
            .forEach((media) => {
              if (media.photographerId == photographerID) {
                totalLikes = totalLikes + media.likes;
                medias.push(media);
              }
            });

          const galleryTemplate = new PhotographerGallery(medias);
          const counterTemplate = new PhotographerLikesCounter(
            totalLikes,
            photographer.price
          );

          this.mainSection.appendChild(
            galleryTemplate.createPhotographerGallery()
          );
          this.mainSection.appendChild(
            counterTemplate.createPhotographerLikesCounter()
          );
        }
      });
  }
}

const photographer = new Photographer();
photographer.main();
