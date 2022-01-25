class PhotographerGalleryFilter {
  constructor(Medias, totalLikes) {
    this.Medias = Medias;
    this.totalLikes = totalLikes;

    this.mainSection = document.querySelector("#main");
    this.galleryWrapper = document.createElement("section");
    this.filterFormWrapper = document.createElement("section");
  }

  async filterMedias(selectedFilter) {
    this.clearGalleryWrapper();

    if (selectedFilter === "date") {
      this.Medias.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
      });
    } else if (selectedFilter === "title") {
      this.Medias.sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
    } else {
      this.Medias.sort((a, b) => {
        return b.likes - a.likes;
      });
    }

    const galleryTemplate = new PhotographerGallery(this.Medias);
    this.galleryWrapper.appendChild(
      galleryTemplate.createPhotographerGallery()
    );
    this.mainSection.appendChild(this.galleryWrapper);
    likesIncrementation(this.totalLikes);
  }

  onChangeFilter() {
    this.filterFormWrapper
      .querySelector("#filter")
      .addEventListener("change", (event) => {
        const selectedFilter = event.target.value;
        this.filterMedias(selectedFilter);
      });
  }

  clearGalleryWrapper() {
    this.galleryWrapper.innerHTML = "";
  }

  createPhotographerGalleryFilter() {
    const galleryWrapper = document.createElement("section");
    galleryWrapper.classList.add("gallery-wrapper");

    const itemContent = `
      <form class="photographer-gallery-filter">
        <label for="filter">Trier par</label>
        <div class="photographer-gallery-filter__container">
          <select name="filter" id="filter">
            <option value="popularity">Popularité</option>
            <option value="date">Date</option>
            <option value="title">Titre</option>
          </select>
        </div>
      </form>
    `;

    this.filterFormWrapper.innerHTML = itemContent;
    this.onChangeFilter();

    return this.filterFormWrapper;
  }
}
