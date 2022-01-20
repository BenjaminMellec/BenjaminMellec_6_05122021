class Factory {
  constructor(data, type) {
    if (type === "photographer") {
      return new PhotographerData(data);
    } else if (type === "media") {
      return new MediaData(data);
    } else {
      throw "Unknown type format";
    }
  }
}
