class PhotographersApi {
  /**
   *
   * @param {string} url
   */
  constructor(url) {
    this._url = url;
  }

  async get() {
    return fetch(this._url)
      .then((res) => res.json())
      .then((res) => res.photographers)
      .catch((err) => console.log("an error occurs", err));
  }
  async getPhotographers() {
    return await this.get();
  }
}
