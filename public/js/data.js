import { Photographer } from "./Photographer.js";
import { PhotographerProfil } from "./PhotographerProfil.js";

export class Data {
  /**
   * Récupére les données et redirige en cas d'erreur
   * @returns {Promise}
   */
  static getData() {
    const data = fetch("./public/js/api/data.json").then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        document.location.href = "../404.html";
      }
    });
    return data;
  }
  /**
   * Récupére tous les photographes pour la page d'accueil
   */
  static getHomePhotographers() {
    const allPhotographers = this.getData().then(function (data) {
      for (const photographer of data.photographers) {
        const newPhotographer = new Photographer(photographer);
        newPhotographer.setCard();
      }
      Data.tagFilter(data);
    });
  }
  /**
   * Gére l'affichage des photographes lors de la sélection d'un hashtag
   * @param {Promise} data
   */
  static tagFilter(data) {
    let tags = document.querySelectorAll(".nav__link");
    let parent = document.querySelector(".photographers");

    tags.forEach((tag) => {
      tag.addEventListener("click", (e) => {
        if (!e.currentTarget.classList.contains("active")) {
          for (let i = 0; i < tags.length; i++) {
            tags[i].classList.remove("active");
          }
          e.currentTarget.classList.add("active");
          parent.innerHTML = "";
          for (const photographer of data.photographers) {
            const filter = e.currentTarget.getAttribute("href").replace("#", "");
            for (let i = 0; i < photographer.tags.length; i++) {
              if (photographer.tags[i].includes(filter)) {
                const newPhotographer = new Photographer(photographer);
                newPhotographer.setCard();
              }
            }
          }
        } else if (e.currentTarget.classList.contains("active")) {
          e.currentTarget.classList.remove("active");
          parent.innerHTML = "";
          for (const photographer of data.photographers) {
            const newPhotographer = new Photographer(photographer);
            newPhotographer.setCard();
          }
        }
      });
    });
  }
  /**
   * Récupere les données du photographe séléctionné sur la page d'accueil
   * @param {int} id
   */
  static getPhotographer(id) {
    const onePhotographer = this.getData().then(function (data) {
      for (const photographersData of data.photographers) {
        if (id == photographersData.id) {
          let photographerPage = new PhotographerProfil(photographersData);
          photographerPage.setPage();
        }
      }
    });
  }
  /**
   * Récupére les médias du photographe séléctionné sur la page d'accueil
   * @param {int} id
   */
  static getMedias(id) {
    const medias = this.getData().then(function (data) {
      for (const media of data.media) {
        if (id == media.photographerId) {
          let photographerPage = new PhotographerProfil(media);
          photographerPage.setMedia();
        }
      }
    });
  }
  /**
   * Gére le tri des médias sur la page de profil du photographe
   * @param {int} id id du photographe
   * @param {string} what type de tri des médias
   */
  static orderBy(id, what) {
    const medias = this.getData().then(function (data) {
      let array = [];
      let eraseMediaContent = () => {
        document.querySelector(".photographer__gallery").innerHTML = "";
      };

      if (what === "date") {
        let compareData = (a, b) => {
          if (a.date > b.date) return -1;
          if (a.date < b.date) return 1;
          return 0;
        };
        for (const media of data.media) {
          if (id == media.photographerId) {
            array.push({ date: media.date, id: media.id });
            array.sort(compareData);
          }
        }
        eraseMediaContent();
        for (let i = 0; i < array.length; i++) {
          const element = array[i];
          for (const media of data.media) {
            if (element.date === media.date && element.id === media.id) {
              let photographerPage = new PhotographerProfil(media);
              photographerPage.setMedia();
            }
          }
        }
      } else if (what === "popularité") {
        let compareData = (a, b) => {
          if (a.like > b.like) return -1;
          if (a.like < b.like) return 1;
          return 0;
        };
        for (const media of data.media) {
          if (id == media.photographerId) {
            array.push({ like: media.likes, id: media.id });
            array.sort(compareData);
          }
        }
        eraseMediaContent();
        for (let i = 0; i < array.length; i++) {
          const element = array[i];
          for (const media of data.media) {
            if (element.like === media.likes && element.id === media.id) {
              let photographerPage = new PhotographerProfil(media);
              photographerPage.setMedia();
            }
          }
        }
      } else if (what === "titre") {
        for (const media of data.media) {
          if (id == media.photographerId) {
            array.push(media.title);
            array.sort();
          }
        }
        eraseMediaContent();
        for (let i = 0; i < array.length; i++) {
          const element = array[i];
          for (const media of data.media) {
            if (element === media.title) {
              let photographerPage = new PhotographerProfil(media);
              photographerPage.setMedia();
            }
          }
        }
      }
    });
  }
}
