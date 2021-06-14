import { Media } from "./Media.js";
import { Accessibility } from "./Accessibility.js";

export class Lightbox {
  /**
   * Création de la lightbox
   * @returns {HTMLElement}
   */
  static setHtml() {
    let lightbox = `<div class="lightbox" role="dialog" tabindex="-1">
        <div class="lightbox__container" aria-label="Vue rapprochée du média" tabindex="1">
          <h1 class="lightbox__title"></h1>
          <button class="lightbox__prev" aria-label="Média précédent"><span aria-hidden="true" class="fas fa-chevron-left"></span></button>
          <button class="lightbox__next" aria-label="Média suivant"><span aria-hidden="true" class="fas fa-chevron-right"></span></button>
          <button class="lightbox__close" aria-label="Fermer la boîte de dialogue"><span aria-hidden="true" class="fas fa-times"></span></button>
        </div>  
      </div>`;
    document.querySelector("body").insertAdjacentHTML("beforeend", lightbox);
  }
  /**
   * Activation de la lightbox
   * @param {HTMLElement} media
   */
  static init(media) {
    Accessibility.removeIndex();
    this.setHtml();
    const lightbox = document.querySelector(".lightbox");
    const lightboxContainer = document.querySelector(".lightbox__container");
    const galleryMedia = document.querySelectorAll(".photographer__media");
    const galleryArray = Array.from(galleryMedia);
    const lastImage = galleryArray.length - 1;
    const lightboxTitle = document.querySelector(".lightbox__title");
    const closeCross = document.querySelector(".lightbox__close");
    const prevBtn = document.querySelector(".lightbox__prev");
    const nextBtn = document.querySelector(".lightbox__next");
    let activeMedia;
    /**
     * Initialisation la lightbox
     */
    const launchLightbox = () => {
      lightbox.style.display = "flex";
      document.body.style.overflow = "hidden";
      Accessibility.setAriaHidden();
    };
    /**
     * Fermeture de la lightbox
     */
    const closeLightbox = () => {
      lightbox.remove();
      document.body.style.overflow = "";
      Accessibility.removeAriaHidden();
    };
    /**
     * Gére le media actif et créé la balise correspondante
     * @param {HTMLElement} media
     */
    const setActiveMedia = (media) => {
      activeMedia = galleryArray.indexOf(media);
      const mediaSource = media.dataset.mediasrc;
      lightboxTitle.innerHTML = media.nextElementSibling.firstChild.firstChild.textContent;
      if (mediaSource.includes("jpg")) {
        let image = Media.createMedia("image", "lightbox__media", mediaSource, media.alt);
        lightboxContainer.insertBefore(image, lightboxTitle);
      } else if (mediaSource.includes("mp4")) {
        let video = Media.createMedia("video", "lightbox__media", mediaSource);
        video.setAttribute("controls", "");
        lightboxContainer.insertBefore(video, lightboxTitle);
      }
    };
    /**
     * Supprime le media précedent
     */
    const removeMedia = () => {
      const lightboxImage = document.querySelector(".lightbox__media");
      if (lightboxImage !== null) {
        lightboxImage.remove();
      }
    };
    /**
     * Selection du media précédent
     */
    const moveLeft = () => {
      removeMedia();
      activeMedia === 0 ? setActiveMedia(galleryArray[lastImage]) : setActiveMedia(galleryArray[activeMedia - 1]);
    };
    /**
     * Selection du media suivant
     */
    const moveRight = () => {
      removeMedia();
      activeMedia === lastImage ? setActiveMedia(galleryArray[0]) : setActiveMedia(galleryArray[activeMedia + 1]);
    };
    /**
     * Lancement des fonctions
     */
    removeMedia();
    setActiveMedia(media);
    launchLightbox();
    document.querySelector(".lightbox__container").focus();
    /**
     * Event listener
     */
    prevBtn.addEventListener("click", (e) => {
      moveLeft();
    });
    nextBtn.addEventListener("click", (e) => {
      moveRight();
    });
    closeCross.addEventListener("click", (e) => {
      closeLightbox();
      Accessibility.initIndex();
    });
    document.addEventListener("keyup", (e) => {
      console.log(e.key);
      if (e.key === "ArrowLeft") {
        moveLeft();
      }
      if (e.key === "ArrowRight") {
        moveRight();
      }
      if (e.key === "Escape") {
        closeLightbox();
      }
    });
    /**
     * Gestion du tabindex
     */
    if (document.querySelector(".lightbox__media")) {
      document.querySelector(".lightbox__media").setAttribute("tabindex", "2");
    }
    lightboxTitle.setAttribute("tabindex", "3");
    prevBtn.setAttribute("tabindex", "4");
    nextBtn.setAttribute("tabindex", "5");
    closeCross.setAttribute("tabindex", "6");
  }
}
