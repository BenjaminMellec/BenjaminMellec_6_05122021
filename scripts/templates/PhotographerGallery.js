class PhotographerGallery {
  constructor(medias) {
    this.medias = medias;
  }

  createPhotographerGallery() {
    const galleryList = document.createElement("ul");
    galleryList.classList.add("photographer-gallery");

    this.medias.forEach((media) => {
      let item;
      if (media.image) {
        item = new PhotographerGalleryItemImage(media);
      } else {
        item = new PhotographerGalleryItemVideo(media);
      }
      galleryList.appendChild(item.createPhotographerGalleryItem());
    });

    return galleryList;
  }
}
