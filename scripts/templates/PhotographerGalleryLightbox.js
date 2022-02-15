class PhotographerGalleryLightbox {
  constructor(currentMedia, medias) {
    this.body = document.querySelector("body");
    this.main = document.querySelector("main");
    this.lightbox = document.createElement("section");
    this.currentMedia = currentMedia;
    this.medias = medias;

    this.onKeyDown = this.onKeyDown.bind(this);
    document.addEventListener("keydown", this.onKeyDown);
  }

  onCloseButton() {
    let cross = this.lightbox.querySelector("#gallery_lightbox_close");
    cross.addEventListener("click", () => {
      this.lightbox.classList.remove("photographer-gallery-lightbox--visible");
      // Remove lightbox from the DOM after the opacity transition
      setTimeout(() => {
        this.lightbox.remove();
      }, 300);
      this.body.style.overflow = "auto";
    });
  }

  onKeyDown(e) {
    if (e.key === "ArrowLeft") {
      this.previous(e);
    } else if (e.key === "ArrowRight") {
      this.next(e);
    }
  }

  onClickArrows() {
    let arrows = this.lightbox.querySelectorAll(
      ".photographer-gallery-lightbox__arrow"
    );
    for (let arrow of arrows) {
      arrow.addEventListener("click", (e) => {
        if (
          arrow.classList.contains("photographer-gallery-lightbox__arrow--left")
        ) {
          this.previous(e);
        } else {
          this.next(e);
        }
      });
    }
  }

  previous(e) {
    e.preventDefault();
    let index = this.medias.findIndex(
      (current) => current.id === this.currentMedia.id
    );

    if (index > 0) {
      this.currentMedia = this.medias[index - 1];
      if (index === 1) {
        this.createMediaTemplate(this.currentMedia);
        this.lightbox.querySelector(
          ".photographer-gallery-lightbox__arrow--left"
        ).style.display = "none";
      } else if (index > 1) {
        this.createMediaTemplate(this.currentMedia);
      }
    }
  }

  next(e) {
    e.preventDefault();
    let index = this.medias.findIndex(
      (current) => current.id === this.currentMedia.id
    );

    if (index < this.medias.length - 1) {
      this.currentMedia = this.medias[index + 1];

      if (index === this.medias.length - 2) {
        this.createMediaTemplate(this.currentMedia);
        this.lightbox.querySelector(
          ".photographer-gallery-lightbox__arrow--right"
        ).style.display = "none";
      } else {
        this.createMediaTemplate(this.currentMedia);
      }
    }
  }

  createMediaTemplate(media) {
    let lightboxTemplate;
    let lightboxMedia;
    let lightboxMediaTemplate;

    this.lightbox.classList.add(
      "photographer-gallery-lightbox",
      "photographer-gallery-lightbox--visible"
    );
    this.lightbox.ariaLabel = "image closeup view";
    this.lightbox.setAttribute("id", "gallery_lightbox");
    this.body.style.overflow = "hidden";

    if (media.image) {
      lightboxMedia = new MediaFactory(media, "image");
      lightboxMediaTemplate = lightboxMedia.getMediaCard();
    } else if (media.video) {
      lightboxMedia = new MediaFactory(media, "video");
      lightboxMediaTemplate = lightboxMedia.getMediaCard();
    }

    lightboxTemplate = `
      <div class="photographer-gallery-lightbox__container">
        ${lightboxMediaTemplate}
        <h3>${media.title}</h3>
        <button class="photographer-gallery-lightbox__arrow photographer-gallery-lightbox__arrow--left">
          <img src="assets/icons/arrow-left.svg" alt="Previous image" />
        </button>
        <button id="gallery_lightbox_close" class="photographer-gallery-lightbox__close">
          <img src="assets/icons/close-red.svg" alt="Close dialog"/>
        <button>
        <button class="photographer-gallery-lightbox__arrow photographer-gallery-lightbox__arrow--right">
          <img src="assets/icons/arrow-right.svg" alt="Next image" />
        </button>
      </div>
    `;

    this.lightbox.innerHTML = lightboxTemplate;
    this.onCloseButton();
    this.onClickArrows();

    return this.lightbox;
  }
}
