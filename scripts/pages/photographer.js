class Photographer {
  constructor() {
    this.body = document.querySelector("body");
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

    photographersData
      .map((photographer) => new PhotographerData(photographer))
      .forEach((photographer) => {
        if (photographer.id == photographerID) {
          // Display the photographer header & the contact modal
          const headerTemplate = new PhotographerHeader(photographer);
          const modal = new PhotographerContactModal(photographer.name);

          this.mainSection.appendChild(
            headerTemplate.createPhotographerHeader()
          );
          this.body.appendChild(modal.createPhotographerContactModal());

          // Display the photographer gallery & likes counter
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
