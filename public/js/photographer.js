export class photographer {
  constructor(object) {
    this.id = object.id;
    this.portrait = object.portrait;
    this.name = object.name;
    this.city = object.city;
    this.country = object.country;
    this.tagline = object.tagline;
    this.price = object.price;
    this.tags = object.tags;
  }

  getId() {
    return this.id;
  }
  getPortrait() {
    return this.portrait;
  }
  getName() {
    return this.name;
  }
  getCity() {
    return this.city;
  }
  getCountry() {
    return this.country;
  }
  getTagline() {
    return this.tagline;
  }
  getPrice() {
    return this.price;
  }
  getTags() {
    return this.tags;
  }

  setLink(portrait, name) {
    let link = document.createElement("a");
    link.classList.add("photographers__identity");
    link.setAttribute("href", /*name.textContent.replace(/\s+/g, "-")*/ "photographer_page.html");
    link.setAttribute("aria-label", name.textContent);
    link.appendChild(portrait);
    link.appendChild(name);
    return link;
  }

  setPortrait() {
    let portrait = document.createElement("img");
    portrait.classList.add("photographers__portrait");
    portrait.setAttribute("src", "public/img/PhotographersIDPhotos/" + this.portrait);
    portrait.setAttribute("alt", "Portrait de " + this.name);
    return portrait;
  }

  setName() {
    let name = document.createElement("h2");
    name.classList.add("photographers__name");
    name.textContent = this.name;
    return name;
  }

  setLocation() {
    let location = document.createElement("p");
    location.classList.add("photographers__location");
    location.textContent = this.city + ", " + this.country;
    return location;
  }

  setTagline() {
    let tagline = document.createElement("p");
    tagline.classList.add("photographers__tagline");
    tagline.textContent = this.tagline;
    return tagline;
  }

  setPrice() {
    let price = document.createElement("p");
    price.classList.add("photographers__price");
    price.textContent = this.price + "€/jour";
    return price;
  }

  setTags() {
    let tagContainer = document.createElement("div");
    tagContainer.classList.add("photographers__tags");

    let tagData = this.tags;
    for (let data of tagData) {
      let tag = document.createElement("a");
      tag.classList.add("nav__link");
      tag.textContent = "#" + data + " ";
      let srOnly = document.createElement("span");
      srOnly.classList.add("sr-only");
      srOnly.textContent = "#" + data + " ";
      tag.appendChild(srOnly);
      tagContainer.appendChild(tag);
    }
    return tagContainer;
  }

  setCard() {
    let div = document.querySelector(".photographers");
    let card = document.createElement("div");
    card.classList.add("photographers__profil");
    card.appendChild(this.setLink(this.setPortrait(), this.setName()));
    card.appendChild(this.setLocation());
    card.appendChild(this.setTagline());
    card.appendChild(this.setPrice());
    card.appendChild(this.setTags());
    div.appendChild(card);
  }
}
