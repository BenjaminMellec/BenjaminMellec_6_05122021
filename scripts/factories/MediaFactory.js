// Factory to use the good assets
class MediaFactory {
  constructor(media, type) {
    this.media = media;
    this.type = type;
  }

  getMediaCard() {
    if (this.type === "image") {
      return `
        <img src="assets/images/galleries/${this.media.photographerId}/${this.media.image}" alt="${this.media.title}" class="photographer-gallery__item-image" />
      `;
    } else if (this.type === "video") {
      return `
         <video class="photographer-gallery__item-video">
          <source src="assets/images/galleries/${this.media.photographerId}/${this.media.video}" type="video/mp4">
          ${this.media.title}
        </video>
      `;
    } else {
      throw "This media is not an image";
    }
  }
}
