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
        Lightbox.createPhotographerGalleryLightbox()
      );
    });
  }

  createPhotographerGalleryItem() {
    let itemMedia;

    if (this.media.image) {
      itemMedia = `
        <img src="assets/images/galleries/${this.media.photographerId}/${this.media.image}" alt="${this.media.title}" class="photographer-gallery__item-image" />
      `;
    } else if (this.media.video) {
      itemMedia = `
        <video class="photographer-gallery__item-video">
          <source src="assets/images/galleries/${this.media.photographerId}/${this.media.video}" type="video/mp4">
          Sorry, your browser doesn't support embedded videos.
        </video>
      `;
    }

    let itemContent = `
        <article id="${this.media.id}" class="photographer-gallery__item">
          <a href='#' class="photographer-gallery__item-link">
            ${itemMedia}
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
