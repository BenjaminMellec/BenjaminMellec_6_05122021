class PhotographerGalleryLightbox {
  constructor(media, allMedias) {
    this.body = document.querySelector("body");
    this.main = document.querySelector("main");
    this.lightbox = document.createElement("section");
    this.media = media;
    this.allMedias = allMedias;
  }

  onCloseButton() {
    this.lightbox
      .querySelector("#gallery_lightbox_close")
      .addEventListener("click", () => {
        this.lightbox.classList.remove(
          "photographer-gallery-lightbox--visible"
        );
        // Remove lightbox from the DOM after the opacity transition
        setTimeout(() => {
          this.lightbox.remove();
        }, 300);
        this.body.style.overflow = "auto";
      });
  }

  onPreviousButton(currentMedia) {
    let index;
    index = this.allMedias.findIndex((x) => x.id === currentMedia.id);

    this.lightbox
      .querySelector("#gallery_lightbox_previous")
      .addEventListener("click", () => {
        currentMedia = this.allMedias[index - 1];
        if (currentMedia) {
          this.createMediaTemplate(currentMedia);
        }
      });

    if (index == 0) {
      this.lightbox.querySelector("#gallery_lightbox_previous").style.display =
        "none";
    }
  }

  onNextButton(currentMedia) {
    let index;
    index = this.allMedias.findIndex((x) => x.id === currentMedia.id);

    this.lightbox
      .querySelector("#gallery_lightbox_next")
      .addEventListener("click", () => {
        currentMedia = this.allMedias[index + 1];
        if (currentMedia) {
          this.createMediaTemplate(currentMedia);
        }
      });

    if (index == this.allMedias.length - 1) {
      this.lightbox.querySelector("#gallery_lightbox_next").style.display =
        "none";
    }
  }

  navigationMethods(currentMedia) {
    this.onCloseButton();
    this.onPreviousButton(currentMedia);
    this.onNextButton(currentMedia);
  }

  createMediaTemplate(currentMedia) {
    let lightboxContent;
    let lightboxMedia;

    this.lightbox.classList.add(
      "photographer-gallery-lightbox",
      "photographer-gallery-lightbox--visible"
    );
    this.lightbox.setAttribute("id", "gallery_lightbox");

    this.body.style.overflow = "hidden";

    if (currentMedia.image) {
      lightboxMedia = `
        <img src="assets/images/galleries/${currentMedia.photographerId}/${currentMedia.image}" class="photographer-gallery-lightbox__image" />
      `;
    } else if (currentMedia.video) {
      lightboxMedia = `
        <video class="photographer-gallery-lightbox__video" controls>
          <source src="assets/images/galleries/${currentMedia.photographerId}/${currentMedia.video}" type="video/mp4">
          Sorry, your browser doesn't support embedded videos.
        </video>
      `;
    }

    lightboxContent = `
      <div class="photographer-gallery-lightbox__container">
        ${lightboxMedia}
        <h3>${currentMedia.title}</h3>
        <button id="gallery_lightbox_previous" class="photographer-gallery-lightbox__arrow--left">
          <img src="assets/icons/arrow-left.svg" />
        </button>
        <button id="gallery_lightbox_close" class="photographer-gallery-lightbox__close">
          <img src="assets/icons/close-red.svg" />
        <button>
        <button id="gallery_lightbox_next" class="photographer-gallery-lightbox__arrow--right">
          <img src="assets/icons/arrow-right.svg" />
        </button>
      </div>
    `;

    this.lightbox.innerHTML = lightboxContent;
    this.navigationMethods(currentMedia);
  }

  createPhotographerGalleryLightbox() {
    let currentMedia = this.media;

    this.createMediaTemplate(currentMedia);

    return this.lightbox;
  }
}
