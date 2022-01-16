class PhotographerGalleryItem {
  constructor(media) {
    this.media = media;
  }

  createPhotographerGalleryItem() {
    const galleryItem = document.createElement("li");

    const itemContent = `
      <article class="photographer-gallery__item">
        <a href='#' class="photographer-gallery__item-link">
          <img src="${this.media.image}" class="photographer-gallery__item-image" />
        </a>
        <div class="photographer-gallery__item-content">
          <h2>${this.media.title}</h2>
          <div class="photographer-gallery__item-content-likes">
            <p>${this.media.likes}</p>
            <button>
              <img src="assets/icons/heart-red.svg" alt="likes"/>
            </button>
          </div>
        </div>
      </article>
    `;

    galleryItem.innerHTML = itemContent;
    return galleryItem;
  }
}
