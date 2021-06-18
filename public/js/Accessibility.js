export class Accessibility {
  /**
   * Tabindex à -1 lors du lancement des modales
   */
  static removeIndex() {
    const logo = document.querySelector(".header__link");
    const pName = document.querySelector(".photographer__name");
    const location = document.querySelector(".photographer__location");
    const tagline = document.querySelector(".photographer__tagline");
    const tags = document.querySelectorAll(".photographer__tags .tag");
    const modalBtn = document.querySelector(".photographer__modal-btn");
    const portrait = document.querySelector(".photographer__portrait");
    const allLikes = document.querySelector(".photographer__all-likes");
    const price = document.querySelector(".photographer__price");
    const orderbyLabel = document.querySelector(".photographer__order-by-label");
    const orderbyUl = document.querySelector(".photographer__order-by");
    const options = document.querySelectorAll(".photographer__order-by-item");
    const medias = document.querySelectorAll(".photographer__media");
    const mediaTitles = document.querySelectorAll(".photographer__media-title");
    const likeIcons = document.querySelectorAll(".photographer__media-like-icon");

    logo.setAttribute("tabindex", "-1");
    pName.setAttribute("tabindex", "-1");
    location.setAttribute("tabindex", "-1");
    tagline.setAttribute("tabindex", "-1");
    tags.forEach((tag) => {
      tag.setAttribute("tabindex", "-1");
    });
    modalBtn.setAttribute("tabindex", "-1");
    portrait.setAttribute("tabindex", "-1");
    allLikes.setAttribute("tabindex", "-1");
    price.setAttribute("tabindex", "-1");
    orderbyLabel.setAttribute("tabindex", "-1");
    orderbyUl.setAttribute("tabindex", "-1");
    options.forEach((option) => {
      option.setAttribute("tabindex", "-1");
    });
    medias.forEach((media) => {
      media.setAttribute("tabindex", "-1");
    });
    mediaTitles.forEach((mediaTitle) => {
      mediaTitle.setAttribute("tabindex", "-1");
    });
    likeIcons.forEach((likeIcon) => {
      likeIcon.setAttribute("tabindex", "-1");
    });
  }
  /**
   * Remet en ordre le tabindex lors de la sortie des modales
   */
  static initIndex() {
    const logo = document.querySelector(".header__link");
    const pName = document.querySelector(".photographer__name");
    const location = document.querySelector(".photographer__location");
    const tagline = document.querySelector(".photographer__tagline");
    const tags = document.querySelectorAll(".photographer__tags .tag");
    const modalBtn = document.querySelector(".photographer__modal-btn");
    const portrait = document.querySelector(".photographer__portrait");
    const allLikes = document.querySelector(".photographer__all-likes");
    const price = document.querySelector(".photographer__price");
    const orderbyLabel = document.querySelector(".photographer__order-by-label");
    const orderbyUl = document.querySelector(".photographer__order-by");
    const options = document.querySelectorAll(".photographer__order-by-item");
    const medias = document.querySelectorAll(".photographer__media");
    const mediaTitles = document.querySelectorAll(".photographer__media-title");
    const likeIcons = document.querySelectorAll(".photographer__media-like-icon");

    logo.setAttribute("tabindex", "2");
    pName.setAttribute("tabindex", "3");
    location.setAttribute("tabindex", "4");
    tagline.setAttribute("tabindex", "5");
    tags.forEach((tag) => {
      tag.setAttribute("tabindex", "6");
    });
    modalBtn.setAttribute("tabindex", "7");
    portrait.setAttribute("tabindex", "8");
    allLikes.setAttribute("tabindex", "9");
    price.setAttribute("tabindex", "9");
    orderbyLabel.setAttribute("tabindex", "10");
    orderbyUl.setAttribute("tabindex", "10");
    options.forEach((option) => {
      option.setAttribute("tabindex", "10");
    });
    medias.forEach((media) => {
      media.setAttribute("tabindex", "11");
    });
    mediaTitles.forEach((mediaTitle) => {
      mediaTitle.setAttribute("tabindex", "11");
    });
    likeIcons.forEach((likeIcon) => {
      likeIcon.setAttribute("tabindex", "11");
    });
  }

  static setAriaHidden() {
    document.querySelector("header").setAttribute("aria-hidden", "true");
    document.querySelector("main").setAttribute("aria-hidden", "true");
  }

  static removeAriaHidden() {
    document.querySelector("header").setAttribute("aria-hidden", "false");
    document.querySelector("main").setAttribute("aria-hidden", "false");
  }
}
