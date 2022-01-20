class Api {
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
      .then((res) => res)
      .catch((err) => console.log("an error occurs", err));
  }
}

class PhotographersApi extends Api {
  /**
   *
   * @param {string} url
   */
  constructor(url) {
    super(url);
  }

  async getPhotographers() {
    const data = await this.get();
    return data.photographers;
  }
}

class MediasApi extends Api {
  /**
   *
   * @param {string} url
   */
  constructor(url) {
    super(url);
  }

  async getMedias() {
    const data = await this.get();
    return data.media;
  }
}
