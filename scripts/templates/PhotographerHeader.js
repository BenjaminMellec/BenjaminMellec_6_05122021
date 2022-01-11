class PhotographerHeader {
  constructor(photographer) {
    this._photographer = photographer;
  }

  createPhotographerHeader() {
    const headerSection = document.createElement("section");
    headerSection.classList.add("photographer-header");

    const photographerHeader = `
        <div class="photographer-header__infos">
          <h1>
            ${this._photographer.name}
          </h1>
          <p>
            ${this._photographer.city}
          </p>
          <p>
            ${this._photographer.tagline}
          </p>
        </div>
        <button class="contact_button" onclick="displayModal()">
          Contactez-moi
        </button>
        <img class="photographer-header__avatar" src="${this._photographer.portrait}">
        `;

    headerSection.innerHTML = photographerHeader;
    return headerSection;
  }
}
