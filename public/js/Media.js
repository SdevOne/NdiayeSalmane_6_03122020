export class Media {
  /**
   * Création d'une image
   * @returns {HTMLElement}
   */
  static img(mediaClass, mediaLocation, mediaAlt) {
    let img = document.createElement("img");
    img.classList.add(mediaClass);
    img.setAttribute("src", mediaLocation);
    img.setAttribute("data-mediasrc", mediaLocation);
    img.setAttribute("alt", mediaAlt);
    return img;
  }
  /**
   * Création d'une video
   * @returns {HTMLElement}
   */
  static vid(mediaClass, mediaLocation) {
    let video = document.createElement("video");
    video.classList.add(mediaClass);
    video.setAttribute("data-mediasrc", mediaLocation);
    video.setAttribute("data-plyr-config", "");
    video.setAttribute("aria-label", "Video");
    let source = document.createElement("source");
    source.setAttribute("src", mediaLocation);
    source.setAttribute("type", "video/mp4");
    video.textContent = "Désolé, votre navigateur ne supporte pas la vidéo.";
    video.appendChild(source);
    return video;
  }
  /**
   * Création d'un média
   * @returns {HTMLElement}
   */
  static createMedia(type, mediaClass, mediaLocation, mediaAlt = null) {
    switch (type) {
      case "image":
        return this.img(mediaClass, mediaLocation, mediaAlt);
        break;

      case "video":
        return this.vid(mediaClass, mediaLocation);
        break;

      default:
        return "Le type du média n'est pas reconnu";
        break;
    }
  }
}
