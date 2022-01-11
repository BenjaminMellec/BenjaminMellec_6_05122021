class PhotographerCard {
  constructor(photographer) {
    this._photographer = photographer;
  }

  createPhotographerCard() {
    const article = document.createElement("article");

    const photographerCard = `
          <a href="photographer.html?id=${this._photographer.id}">
            <img src="${this._photographer.portrait}">
            <h2>
              ${this._photographer.name}
            </h2>
            <p class="photographers-section__location">
              ${this._photographer.city}, ${this._photographer.country}
            </p>
            <p class="photographers-section__tagline">
              ${this._photographer.tagline}
            </p>
            <p class="photographers-section__price">
              ${this._photographer.price}/jour
            </p>
          </a>
        `;

    article.innerHTML = photographerCard;
    return article;
  }
}
