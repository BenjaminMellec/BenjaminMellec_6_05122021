class PhotographerGalleryItem {
  constructor(media) {
    this.media = media;
    this.likes = media.likes;
  }

  createPhotographerGalleryItem() {
    const galleryItem = document.createElement("li");
    let itemMedia;

    if (this.media.image) {
      itemMedia = `
        <img src="assets/images/galleries/${this.media.photographerId}/${this.media.image}" class="photographer-gallery__item-image" />
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

    galleryItem.innerHTML = itemContent;
    return galleryItem;
  }
}
