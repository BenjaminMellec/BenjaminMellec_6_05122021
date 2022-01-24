class PhotographerGallery {
  constructor(medias) {
    this.medias = medias;
  }

  createPhotographerGallery() {
    const galleryList = document.createElement("ul");
    galleryList.classList.add("photographer-gallery");

    this.medias.forEach((media) => {
      const item = new PhotographerGalleryItem(media);
      galleryList.appendChild(item.createPhotographerGalleryItem());
      likesIncrementation();
    });

    return galleryList;
  }
}
