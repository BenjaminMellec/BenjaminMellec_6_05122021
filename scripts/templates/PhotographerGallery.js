class PhotographerGallery {
  constructor(medias) {
    this.medias = medias;
  }

  createPhotographerGallery() {
    const galleryList = document.createElement("ul");
    galleryList.classList.add("photographer-gallery");

    for (let media of this.medias) {
      const item = new PhotographerGalleryItem(media, this.medias);
      galleryList.appendChild(item.createPhotographerGalleryItem());
    }

    return galleryList;
  }
}
