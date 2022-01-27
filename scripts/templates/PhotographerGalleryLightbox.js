class PhotographerGalleryLightbox {
  constructor(media) {
    this.body = document.querySelector("body");
    this.media = media;
    this.lightbox = document.createElement("section");
  }

  onCloseButton() {
    this.lightbox
      .querySelector("#gallery_lightbox_close")
      .addEventListener("click", () => {
        this.lightbox.classList.remove(
          "photographer-gallery-lightbox--visible"
        );
        this.lightbox.innerHTML = "";
        this.body.style.overflow = "auto";
      });
  }

  createPhotographerGalleryLightbox() {
    let lightboxContent;
    let lightboxMedia;

    this.lightbox.classList.add(
      "photographer-gallery-lightbox",
      "photographer-gallery-lightbox--visible"
    );
    this.lightbox.setAttribute("id", "gallery_lightbox");

    this.body.style.overflow = "hidden";

    if (this.media.image) {
      lightboxMedia = `
        <img src="assets/images/galleries/${this.media.photographerId}/${this.media.image}" class="photographer-gallery-lightbox__image" />
      `;
    } else if (this.media.video) {
      lightboxMedia = `
        <video class="photographer-gallery-lightbox__video" controls>
          <source src="assets/images/galleries/${this.media.photographerId}/${this.media.video}" type="video/mp4">
          Sorry, your browser doesn't support embedded videos.
        </video>
      `;
    }

    lightboxContent = `
      <div class="photographer-gallery-lightbox__container">
        ${lightboxMedia}
        <h3>${this.media.title}</h3>
        <button class="photographer-gallery-lightbox__arrow--left">
          <img src="assets/icons/arrow-left.svg" />
        </button>
        <button id="gallery_lightbox_close" class="photographer-gallery-lightbox__close">
          <img src="assets/icons/close-red.svg" />
        <button>
        <button class="photographer-gallery-lightbox__arrow--right">
          <img src="assets/icons/arrow-right.svg" />
        </button>
      </div>
    `;

    this.lightbox.innerHTML = lightboxContent;
    this.onCloseButton();
    return this.lightbox;
  }
}
