export class Page {
  /**
   * Création du lien vers main
   * @returns {HTMLElement}
   */
  static mainLink() {
    let link = document.createElement("a");
    link.classList.add("main-link");
    link.setAttribute("href", "#main");
    link.setAttribute("tabindex", "1");
    let p = document.createElement("p");
    p.innerHTML = "Passer au contenu";
    link.appendChild(p);
    return link;
  }
  /**
   * Gére l'apparition du lien vers main au scroll
   */
  static mainLinkEvent() {
    window.addEventListener("scroll", (e) => {
      if (window.screen.width > "425") {
        let mainLink = document.querySelector(".main-link");
        if (window.scrollY !== 0) {
          mainLink.style.display = "flex";
        } else {
          mainLink.style.display = "none";
        }
      }
    });
  }
  /**
   * Création du header
   * @returns {HTMLElement}
   */
  static setHeader() {
    let header = document.createElement("header");
    header.classList.add("header");
    header.setAttribute("role", "banner");
    header.appendChild(this.setLogo());
    return header;
  }
  /**
   * Création du logo
   * @returns {HTMLElement}
   */
  static setLogo() {
    let link = document.createElement("a");
    link.classList.add("header__link");
    link.setAttribute("href", "index.html");
    let logo = document.createElement("img");
    logo.classList.add("header__logo");
    logo.setAttribute("role", "img");
    logo.setAttribute("src", "public/img/logo.png");
    logo.setAttribute("alt", "Logo de Fisheye - Page d'accueil");
    link.setAttribute("tabindex", "2");
    link.appendChild(logo);
    return link;
  }
  /**
   * Création du menu de navigation
   * @returns {HTMLElement}
   */
  static setNav() {
    let navContainer = document.createElement("div");
    navContainer.classList.add("nav-container");
    let nav = document.createElement("nav");
    nav.classList.add("nav");
    nav.setAttribute("aria-label", "Catégories de photographes");
    nav.setAttribute("tabindex", "-1");
    let ul = document.createElement("ul");
    let listItem = ["Portrait", "Art", "Fashion", "Architecture", "Travel", "Sport", "Animals", "Events"];
    for (let item of listItem) {
      let li = document.createElement("li");
      let tag = document.createElement("a");
      tag.classList.add("nav__link", "tag");
      tag.setAttribute("href", "#" + item.toLowerCase());
      tag.setAttribute("aria-label", "Hashtag " + item);
      tag.setAttribute("tabindex", "2");
      tag.textContent = "#" + item;
      li.appendChild(tag);
      ul.appendChild(li);
    }
    nav.appendChild(ul);
    navContainer.appendChild(nav);
    return navContainer;
  }
  /**
   * Création de la balise main
   * @returns {HTMLElement}
   */
  static setMain() {
    let main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");
    return main;
  }
  /**
   * Création de la page
   */
  static setIndexPage() {
    let body = document.body;
    body.appendChild(this.mainLink());
    let header = this.setHeader();
    header.appendChild(this.setNav());
    body.appendChild(header);
    let main = this.setMain();
    main.innerHTML = `<h1 class="main-heading" tabindex="4">Nos photographes</h1>
    <div class="photographers"/></div>`;
    body.appendChild(main);
  }
  /**
   * Création de la page
   */
  static setPhotographerPage() {
    let body = document.body;
    body.appendChild(this.setHeader());
    let main = this.setMain();
    main.innerHTML = `<div class="photographer" aria-label="Profil du photographe"></div>`;
    body.appendChild(main);
  }
}
