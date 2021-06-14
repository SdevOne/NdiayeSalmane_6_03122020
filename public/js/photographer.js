export class Photographer {
  constructor(photographerData) {
    this.id = photographerData.id;
    this.portrait = photographerData.portrait;
    this.name = photographerData.name;
    this.city = photographerData.city;
    this.country = photographerData.country;
    this.tagline = photographerData.tagline;
    this.price = photographerData.price;
    this.tags = photographerData.tags;
  }
  /**
   * Mise en place du lien vers la page du photographe
   * @returns {HTMLElement}
   */
  setLink() {
    let link = document.createElement("a");
    link.classList.add("photographers__link");
    link.setAttribute("href", "photographer.html?" + this.name.replace(" ", "_") + "/" + this.id);
    link.setAttribute("aria-label", this.name);
    link.setAttribute("tabindex", "4");
    link.appendChild(this.setPortrait());
    link.appendChild(this.setName());
    return link;
  }
  /**
   * Mise en place du portrait
   * @returns {HTMLElement}
   */
  setPortrait() {
    let portrait = document.createElement("img");
    portrait.classList.add("photographers__portrait");
    portrait.setAttribute("src", "public/img/PhotographersIDPhotos/" + this.portrait);
    portrait.setAttribute("alt", this.name);
    return portrait;
  }
  /**
   * Mise en place du nom
   * @returns {HTMLElement}
   */
  setName() {
    let name = document.createElement("h2");
    name.classList.add("photographers__name");
    name.textContent = this.name;
    return name;
  }
  /**
   * Mise en place de la localisation
   * @returns {HTMLElement}
   */
  setLocation() {
    let location = document.createElement("p");
    location.classList.add("photographers__location");
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
    tagline.classList.add("photographers__tagline");
    tagline.setAttribute("tabindex", "4");
    tagline.setAttribute("aria-label", "Slogan : " + this.tagline);
    tagline.textContent = this.tagline;
    return tagline;
  }
  /**
   * Mise en place du prix
   * @returns {HTMLElement}
   */
  setPrice() {
    let price = document.createElement("p");
    price.classList.add("photographers__price");
    price.setAttribute("tabindex", "4");
    price.setAttribute("aria-label", "Tarif : " + this.price + "€ par jour");
    price.textContent = this.price + "€/jour";
    return price;
  }
  /**
   * Mise en place des tags
   * @returns {HTMLElement}
   */
  setTags() {
    let ul = document.createElement("ul");
    ul.classList.add("photographers__tags");
    ul.setAttribute("aria-label", "Catégorie du photographe");
    let tagData = this.tags;
    for (let data of tagData) {
      let tag = document.createElement("li");
      tag.classList.add("tag");
      tag.setAttribute("tabindex", "4");
      tag.setAttribute("aria-label", "Hashtag " + data);
      tag.textContent = "#" + data;
      /*let srOnly = document.createElement("span");
      srOnly.classList.add("sr-only");
      srOnly.textContent = "Hashtag";
      tag.insertAdjacentElement("beforeend", srOnly);*/
      ul.appendChild(tag);
    }
    return ul;
  }
  /**
   * Création du profil du photographe
   * @returns {HTMLElement}
   */
  setCard() {
    let parent = document.querySelector(".photographers");
    let card = document.createElement("div");
    card.classList.add("photographers__profil");
    card.appendChild(this.setLink());
    card.appendChild(this.setLocation());
    card.appendChild(this.setTagline());
    card.appendChild(this.setPrice());
    card.appendChild(this.setTags());
    parent.appendChild(card);
  }
}
