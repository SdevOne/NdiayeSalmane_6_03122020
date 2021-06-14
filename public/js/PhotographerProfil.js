import { Data } from "./Data.js";
import { Form } from "./Form.js";
import { Lightbox } from "./Lightbox.js";
import { Media } from "./Media.js";
import { Photographer } from "./Photographer.js";

export class PhotographerProfil extends Photographer {
  constructor(photographer) {
    super(photographer);
    this.mediaId = photographer.id;
    this.mediaOwnerId = photographer.photographerId;
    this.mediaTitle = photographer.title;
    this.image = photographer.image;
    this.alt = photographer.alt;
    this.video = photographer.video;
    this.imageTags = photographer.tags;
    this.likes = photographer.likes;
    this.date = photographer.date;
    this.mediaPrice = photographer.price;
    this.allLikes = 297081;
  }
  /**
   * Création nom du photographe
   * @returns {HTMLElement}
   */
  setName() {
    let name = document.createElement("h1");
    name.classList.add("photographer__name");
    name.setAttribute("tabindex", "3");
    name.textContent = this.name;
    return name;
  }
  /**
   * Mise en place de la localisation
   * @returns {HTMLElement}
   */
  setLocation() {
    let location = document.createElement("p");
    location.classList.add("photographer__location");
    location.setAttribute("tabindex", "4");
    location.setAttribute("aria-label", "Origine : " + this.city + ", " + this.country);
    location.textContent = this.city + ", " + this.country;
    return location;
  }
  /**
   * Mise en place de la phrase d'accroche
   * @returns {HTMLElement}
   */
  setTagline() {
    let tagline = document.createElement("p");
    tagline.classList.add("photographer__tagline");
    tagline.setAttribute("tabindex", "5");
    tagline.setAttribute("aria-label", "Slogan : " + this.tagline);
    tagline.textContent = this.tagline;
    return tagline;
  }
  /**
   * Mise en place des tags
   * @returns {HTMLElement}
   */
  setTags() {
    let tagContainer = document.createElement("div");
    tagContainer.classList.add("photographer__tags");
    let tagData = this.tags;
    for (let data of tagData) {
      let tag = document.createElement("a");
      tag.classList.add("tag");
      tag.setAttribute("tabindex", "6");
      tag.setAttribute("aria-label", "Hashtag " + data);
      tag.textContent = "#" + data;
      tagContainer.appendChild(tag);
    }
    return tagContainer;
  }
  /**
   * Création lien vers le formulaire
   * @returns {HTMLElement}
   */
  setModalBtn() {
    let btn = document.createElement("button");
    btn.classList.add("photographer__modal-btn");
    btn.classList.add("btn");
    btn.setAttribute("tabindex", "7");
    btn.textContent = "Contactez-moi";
    btn.addEventListener("click", (e) => {
      Form.init(this.name);
    });
    return btn;
  }
  /**
   * Mise en place du portrait
   * @returns {HTMLElement}
   */
  setPortrait() {
    let portrait = document.createElement("img");
    portrait.classList.add("photographer__portrait");
    portrait.setAttribute("tabindex", "8");
    portrait.setAttribute("src", "public/img/PhotographersIDPhotos/" + this.portrait);
    portrait.setAttribute("alt", "");
    return portrait;
  }
  /**
   * Création du bloc contenant prix et like total
   * @returns
   */
  setPrice() {
    let priceContainer = document.createElement("div");
    priceContainer.classList.add("photographer__price-container");

    let allLikes = document.createElement("span");
    allLikes.classList.add("photographer__all-likes");
    allLikes.setAttribute("tabindex", "9");
    allLikes.setAttribute("aria-label", this.allLikes.toLocaleString() + "mentions j'aime");
    allLikes.innerHTML = this.allLikes.toLocaleString() + " <span class='fas fa-heart'></span> ";
    let price = document.createElement("span");
    price.classList.add("photographer__price");
    price.setAttribute("tabindex", "9");
    price.setAttribute("aria-label", this.price + "€ par jour");
    price.innerHTML = this.price + "€ / jour";
    priceContainer.appendChild(allLikes);
    priceContainer.appendChild(price);
    return priceContainer;
  }
  /**
   * Création du bouton de tri des médias
   * @returns {HTMLElement}
   */
  setOrderBy() {
    let div = document.createElement("div");
    div.classList.add("photographer__order-by-container");

    let label = document.createElement("p");
    label.classList.add("photographer__order-by-label");
    label.setAttribute("id", "orderBy");
    label.setAttribute("tabindex", "10");
    label.textContent = "Trier par";

    let ul = document.createElement("ul");
    ul.classList.add("photographer__order-by");
    ul.setAttribute("name", "orderBy");
    ul.setAttribute("tabindex", "10");
    ul.setAttribute("role", "button");
    ul.setAttribute("aria-labelledby", "orderBy");
    ul.setAttribute("aria-haspopup", "listbox");
    ul.setAttribute("aria-expanded", "");

    let option = document.createElement("li");
    option.classList.add("photographer__order-by-item");
    option.setAttribute("value", "popularité");
    option.setAttribute("tabindex", "10");
    option.innerHTML = `Popularité <span class="fas fa-chevron-down"></span>`;
    ul.appendChild(option);

    ul.addEventListener("click", (e) => {
      ul.setAttribute("aria-expanded", "true");
      let date = document.querySelector("li[value='date']");
      let title = document.querySelector("li[value='titre']");
      let popularity = document.querySelector("li[value='popularité']");
      let options = [
        ["Popularité", popularity],
        ["Date", date],
        ["Titre", title],
      ];
      let siblings = ul.children;

      ul.firstElementChild.setAttribute("role", "option");
      ul.firstElementChild.setAttribute("aria-selected", "false");

      for (let i = 0; i < options.length; i++) {
        if (options[i][1] === null) {
          let option = document.createElement("li");
          option.classList.add("photographer__order-by-item");
          option.setAttribute("value", options[i][0].toLowerCase());
          option.setAttribute("role", "option");
          option.setAttribute("aria-selected", "false");
          option.setAttribute("tabindex", "10");
          option.innerHTML = options[i][0];
          option.style.borderTop = ".2rem solid #fff";
          ul.appendChild(option);
        }
      }

      siblings[0].style.borderRadius = "0.5rem 0.5rem 0 0";
      siblings[2].style.borderRadius = "0 0 0.5rem 0.5rem";

      for (let i = 0; i < siblings.length; i++) {
        siblings[i].addEventListener("click", (e) => {
          e.stopPropagation();
          let value = siblings[i].innerHTML.toLowerCase();
          siblings[i].style.borderRadius = "0.5rem";
          siblings[i].setAttribute("tabindex", "10");
          siblings[i].setAttribute("role", "option");
          siblings[i].setAttribute("aria-selected", "true");
          siblings[i].setAttribute("aria-activedescendant", "");
          if (siblings[i].children.length === 0) {
            let arrow = document.createElement("span");
            arrow.classList.add("fas");
            arrow.classList.add("fa-chevron-down");
            siblings[i].appendChild(arrow);
          }
          Data.orderBy(this.id, value);
          ul.innerHTML = siblings[i].outerHTML;
          ul.setAttribute("aria-expanded", "false");
          ul.focus();
        });
      }
    });

    ul.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        e.stopPropagation();
        ul.setAttribute("aria-expanded", "true");
        let date = document.querySelector("li[value='date']");
        let title = document.querySelector("li[value='titre']");
        let popularity = document.querySelector("li[value='popularité']");
        let options = [
          ["Popularité", popularity],
          ["Date", date],
          ["Titre", title],
        ];
        let siblings = ul.children;

        ul.firstElementChild.setAttribute("role", "option");
        ul.firstElementChild.setAttribute("aria-selected", "false");

        for (let i = 0; i < options.length; i++) {
          if (options[i][1] === null) {
            let option = document.createElement("li");
            option.classList.add("photographer__order-by-item");
            option.setAttribute("value", options[i][0].toLowerCase());
            option.setAttribute("tabindex", "10");
            option.setAttribute("role", "option");
            option.setAttribute("aria-selected", "false");
            option.innerHTML = options[i][0];
            option.style.borderTop = ".2rem solid #fff";
            ul.appendChild(option);
          }
        }

        siblings[0].style.borderRadius = "0.5rem 0.5rem 0 0";
        siblings[2].style.borderRadius = "0 0 0.5rem 0.5rem";
        for (let i = 0; i < siblings.length; i++) {
          siblings[i].addEventListener("keyup", (e) => {
            if (e.key === "Enter") {
              e.stopPropagation();
              let value = siblings[i].innerHTML.toLowerCase();
              siblings[i].style.borderRadius = "0.5rem";
              siblings[i].setAttribute("tabindex", "10");
              siblings[i].setAttribute("role", "option");
              siblings[i].setAttribute("aria-selected", "true");
              siblings[i].setAttribute("aria-activedescendant", "true");
              if (siblings[i].children.length === 0) {
                let arrow = document.createElement("span");
                arrow.classList.add("fas");
                arrow.classList.add("fa-chevron-down");
                siblings[i].appendChild(arrow);
              }
              Data.orderBy(this.id, value);
              ul.innerHTML = siblings[i].outerHTML;
              ul.setAttribute("aria-expanded", "false");
              ul.focus();
            }
          });
        }
      }
    });
    div.appendChild(label);
    div.appendChild(ul);
    return div;
  }
  /**
   * Création du conteneur des medias
   * @returns {HTMLElement}
   */
  setMediaContainer() {
    let mediaContainer = document.createElement("div");
    mediaContainer.classList.add("photographer__gallery");
    return mediaContainer;
  }
  /**
   * Création des cartes pour chaque média
   */
  setMedia() {
    let parent = document.querySelector(".photographer__gallery");
    let block = document.createElement("div");
    block.classList.add("photographer__gallery-item");
    let mediaCard = document.createElement("div");
    mediaCard.classList.add("photographer__media-card");
    let mediaTxt = document.createElement("div");
    mediaTxt.classList.add("photographer__media-txt");
    let txtBloc1 = document.createElement("div");
    txtBloc1.classList.add("photographer__media-txt-bloc1");
    let title = document.createElement("h2");
    title.classList.add("photographer__media-title");
    title.setAttribute("tabindex", "11");
    title.innerHTML = this.mediaTitle;
    let likeBox = document.createElement("div");
    likeBox.classList.add("photographer__media-like-box");
    let nbOfLikes = document.createElement("p");
    nbOfLikes.classList.add("photographer__media-nb-of-likes");
    nbOfLikes.innerHTML = this.likes;
    let likeIcon = document.createElement("span");
    likeIcon.classList.add("fas", "fa-heart", "photographer__media-like-icon");
    likeIcon.setAttribute("tabindex", "11");
    likeIcon.setAttribute("aria-label", "Icone j'aime, cliquable");
    likeIcon.addEventListener("click", (e) => {
      nbOfLikes.innerHTML = this.likes += 1;
      let allLikes = document.querySelector(".photographer__all-likes");
      let nbOfAllLikes = allLikes.innerHTML.replace(/\s+/g, "");
      let intOfAllLikes = parseInt(nbOfAllLikes);
      intOfAllLikes++;
      allLikes.innerHTML = intOfAllLikes.toLocaleString() + " <span class='fas fa-heart'></span> ";
    });
    likeIcon.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        nbOfLikes.innerHTML = this.likes += 1;
        let allLikes = document.querySelector(".photographer__all-likes");
        let nbOfAllLikes = allLikes.innerHTML.replace(/\s+/g, "");
        let intOfAllLikes = parseInt(nbOfAllLikes);
        intOfAllLikes++;
        allLikes.innerHTML = intOfAllLikes.toLocaleString() + " <span class='fas fa-heart'></span> ";
      }
    });
    let txtBloc2 = document.createElement("div");
    txtBloc2.classList.add("photographer__media-txt-bloc2");
    let date = document.createElement("p");
    date.classList.add("photographer__media-date");
    let formatDate = new Date(this.date).toLocaleDateString();
    date.innerHTML = formatDate;
    let mediaPrice = document.createElement("p");
    mediaPrice.classList.add("photographer__media-price");
    mediaPrice.innerHTML = this.mediaPrice + " €";

    likeBox.appendChild(nbOfLikes);
    likeBox.appendChild(likeIcon);
    txtBloc1.appendChild(title);
    txtBloc1.appendChild(likeBox);
    mediaTxt.appendChild(txtBloc1);
    txtBloc2.appendChild(date);
    txtBloc2.appendChild(mediaPrice);
    mediaTxt.appendChild(txtBloc2);

    let getMedia;
    let mediaClass = "photographer__media";
    let mediaLocation;
    if (this.video !== undefined) {
      mediaLocation = "public/img/" + this.mediaOwnerId + "/" + this.video;
      getMedia = Media.createMedia("video", mediaClass, mediaLocation);
    } else {
      mediaLocation = "public/img/" + this.mediaOwnerId + "/" + this.image;
      getMedia = Media.createMedia("image", mediaClass, mediaLocation, this.alt);
    }
    getMedia.setAttribute("tabindex", "11");
    getMedia.addEventListener("click", (e) => {
      Lightbox.init(getMedia);
    });
    getMedia.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        Lightbox.init(getMedia);
      }
    });
    block.appendChild(getMedia);
    block.appendChild(mediaTxt);
    parent.appendChild(block);
  }
  /**
   * Ajout des éléments à la page
   */
  setPage() {
    let parent = document.querySelector(".photographer");
    let card = document.createElement("div");
    card.classList.add("photographer__card");
    let txtContainer = document.createElement("div");
    txtContainer.classList.add("photographer__txt-container");
    let txtBlock = document.createElement("div");
    txtBlock.classList.add("photographer__txt-block");
    txtBlock.appendChild(this.setName());
    txtBlock.appendChild(this.setLocation());
    txtBlock.appendChild(this.setTagline());
    txtBlock.appendChild(this.setTags());
    txtContainer.appendChild(txtBlock);
    txtContainer.appendChild(this.setModalBtn());
    card.appendChild(txtContainer);
    card.appendChild(this.setPortrait());
    card.appendChild(this.setPrice());
    parent.appendChild(card);
    parent.appendChild(this.setOrderBy());
    parent.appendChild(this.setMediaContainer());
  }
}
