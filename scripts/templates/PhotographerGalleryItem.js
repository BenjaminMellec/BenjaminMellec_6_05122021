class PhotographerGalleryItem {
  constructor(media, allMedias) {
    this.media = media;
    this.allMedias = allMedias;
    this.likes = media.likes;
    this.mainSection = document.querySelector("#main");
    this.galleryItem = document.createElement("li");
  }

  showModal() {
    this.galleryItem.querySelector("a").addEventListener("click", (e) => {
      e.preventDefault();
      const Lightbox = new PhotographerGalleryLightbox(
        this.media,
        this.allMedias
      );

      this.mainSection.appendChild(
        Lightbox.createMediaTemplate(this.media),
        Lightbox.onClickArrows
      );
    });
  }

  createPhotographerGalleryItem() {
    let itemMedia;
    let itemMediaTemplate;

    if (this.media.image) {
      itemMedia = new MediaFactory(this.media, "image");
      itemMediaTemplate = itemMedia.getMediaCard();
    } else if (this.media.video) {
      itemMedia = new MediaFactory(this.media, "video");
      itemMediaTemplate = itemMedia.getMediaCard();
    }

    let itemContent = `
        <article id="${this.media.id}" class="photographer-gallery__item">
          <a href='#' class="photographer-gallery__item-link">
            ${itemMediaTemplate}
          </a>
          <div class="photographer-gallery__item-content">
            <h2>${this.media.title}</h2>
            <div class="photographer-gallery__item-content-likes">
              <p class="photographer-gallery__item-content-likes-number">${this.likes}</p>
              <img class="photographer-gallery__item-content-likes-button" src="assets/icons/heart-red.svg" alt="likes"/>
            </div>
          </div>
        </article>
      `;

    this.galleryItem.innerHTML = itemContent;
    this.showModal();
    return this.galleryItem;
  }
}
