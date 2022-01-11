class PhotographerHeader {
  constructor(photographer) {
    this._photographer = photographer;
  }

  createPhotographerHeader() {
    const headerSection = document.createElement("section");
    headerSection.classList.add("photographer-header");

    const photographerHeader = `
        <div class="photographer-header__infos">
          <h1 class="photographer-header__infos-title">
            ${this._photographer.name}
          </h1>
          <p class="photographer-header__infos-city">
            ${this._photographer.city}
          </p>
          <p class="photographer-header__infos-tagline">
            ${this._photographer.tagline}
          </p>
        </div>
        <div class="photographer-header__contact">
          <button class="button" onclick="displayModal()">
            Contactez-moi
          </button>
        </div>
        <div class="photographer-header__avatar">
          <img src="${this._photographer.portrait}">
        </div>
        `;

    headerSection.innerHTML = photographerHeader;
    return headerSection;
  }
}
