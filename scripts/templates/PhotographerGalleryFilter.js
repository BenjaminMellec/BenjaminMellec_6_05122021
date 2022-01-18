class PhotographerGalleryFilter {
  constructor() {}

  createPhotographerGalleryFilter() {
    const galleryItem = document.createElement("form");

    const itemContent = `
      <label for="filter">Trier par</label>
      <select name="filter" id="filter">
        <option value="popularity">Popularité</option>
        <option value="date">Date</option>
        <option value="title">Titre</option>
      </select>
    `;

    galleryItem.innerHTML = itemContent;
    return galleryItem;
  }
}
