import { photographer } from "./photographer.js";
import { photographerProfil } from "./photographerProfil.js";

export class data {
  static getData() {
    const data = fetch("./public/js/api/data.json").then(function (response) {
      if (response.ok) {
        return response.json();
      }
    });
    return data;
  }

  static getAllPhotographers() {
    const allPhotographers = this.getData().then(function (data) {
      for (const photographersData of data.photographers) {
        let photographers = new photographer(photographersData);
        photographers.setPage();
      }
    });
  }

  static getPhotographer(id) {
    const onePhotographer = this.getData().then(function (data) {
      for (const photographersData of data.photographers) {
        if (id == photographersData.id) {
          let photographerPage = new photographerProfil(photographersData);
          photographerPage.setPage();
        }
      }
    });
  }

  static getMedias(id) {}
}
