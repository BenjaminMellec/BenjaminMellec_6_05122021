class PhotographerGalleryFilter {
  constructor() {}

  createPhotographerGalleryFilter() {
    const galleryFilter = document.createElement("form");
    galleryFilter.classList.add("photographer-gallery-filter");

    const itemContent = `
      <label for="filter">Trier par</label>
      <div class="photographer-gallery-filter__container">
        <select name="filter" id="filter">
          <option value="popularity">Popularité</option>
          <option value="date">Date</option>
          <option value="title">Titre</option>
        </select>
      </div>
    `;

    galleryFilter.innerHTML = itemContent;
    return galleryFilter;
  }
}
