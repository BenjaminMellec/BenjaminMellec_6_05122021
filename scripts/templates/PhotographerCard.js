class PhotographerCard {
  constructor(photographer) {
    this._photographer = photographer;
  }

  createPhotographerCard() {
    const article = document.createElement("article");

    const photographerCard = `
            <img src="${this._photographer.portrait}">
            <h2>
              ${this._photographer.name}
            </h2>
            <p class="photographer-section__location">
              ${this._photographer.city}, ${this._photographer.country}
            </p>
            <p class="photographer-section__tagline">
              ${this._photographer.tagline}
            </p>
            <p class="photographer-section__price">
              ${this._photographer.price}/jour
            </p>
        `;

    article.innerHTML = photographerCard;
    return article;
  }
}
