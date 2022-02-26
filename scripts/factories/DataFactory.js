// Factory to use the good constructor pattern
class DataFactory {
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
