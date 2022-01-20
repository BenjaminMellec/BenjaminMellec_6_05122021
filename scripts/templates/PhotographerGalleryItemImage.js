class PhotographerGalleryItemImage {
  constructor(media) {
    this.media = media;
  }

  createPhotographerGalleryItem() {
    const galleryItem = document.createElement("li");

    const itemContent = `
      <article class="photographer-gallery__item">
        <a href='#' class="photographer-gallery__item-link">
          <img src="assets/images/galleries/${this.media.photographerId}/${this.media.image}" class="photographer-gallery__item-image" />
        </a>
        <div class="photographer-gallery__item-content">
          <h2>${this.media.title}</h2>
          <div class="photographer-gallery__item-content-likes">
            <p class="photographer-gallery__item-content-likes-number">${this.media.likes}</p>
            <img class="photographer-gallery__item-content-likes-button" src="assets/icons/heart-red.svg" alt="likes"/>
          </div>
        </div>
      </article>
    `;

    galleryItem.innerHTML = itemContent;
    return galleryItem;
  }
}
