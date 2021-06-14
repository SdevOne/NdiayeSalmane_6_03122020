import { Accessibility } from "./Accessibility.js";

export class Form {
  /**
   * Création du conteneur du formulaire
   */
  static setHtml() {
    let formContainer = `<div class="photographer__form-container" tabindex="-1"></div>`;
    document.querySelector("body").insertAdjacentHTML("beforeend", formContainer);
  }

  /**
   *
   * @returns {HTMLElement}
   */
  static setForm() {
    let form = document.createElement("form");
    form.classList.add("photographer__form");
    form.setAttribute("aria-labelledBy", "contact");
    form.setAttribute("tabindex", "1");
    return form;
  }
  /**
   *
   * @param {string} name nom du photographe
   * @returns {HTMLElement}
   */
  static setFormTitle(name) {
    let title = document.createElement("h1");
    title.classList.add("photographer__form-title");
    title.setAttribute("id", "contact");
    title.setAttribute("tabindex", "1");
    title.innerHTML = "Contactez moi " + name;
    return title;
  }
  /**
   *
   * @returns {HTMLElement}
   */
  static setCross() {
    let cross = document.createElement("button");
    cross.classList.add("photographer__form-close-cross");
    cross.setAttribute("aria-label", "Fermeture du formulaire de contact");
    cross.setAttribute("tabindex", "2");
    cross.innerHTML = `<i class="fas fa-times"></i>`;
    cross.addEventListener("click", (e) => {
      this.crossEvent();
    });
    cross.addEventListener("keyup", (e) => {
      console.log(e.key);
      if (e.key === "Enter") {
        this.crossEvent();
      }
    });
    return cross;
  }

  /**
   *
   * @param {string} nameId
   * @param {string} label
   * @returns {HTMLElement}
   */
  static setLabel(nameId, label) {
    let inputLabel = document.createElement("label");
    inputLabel.setAttribute("for", nameId);
    inputLabel.setAttribute("id", label);
    inputLabel.setAttribute("tabindex", "1");
    inputLabel.innerHTML = label;
    return inputLabel;
  }
  /**
   *
   * @param {string} type
   * @param {string} nameId
   * @param {string} label
   * @returns {HTMLElement}
   */
  static setInput(type, nameId, label) {
    let input = document.createElement("input");
    input.setAttribute("type", type);
    input.setAttribute("name", nameId);
    input.setAttribute("id", nameId);
    input.setAttribute("aria-labelledby", label);
    input.setAttribute("tabindex", "1");
    input.setAttribute("aria-required", "true");
    input.setAttribute("required", "");
    return input;
  }
  /**
   *
   * @param {string} type
   * @param {string} nameId
   * @param {string} label
   * @returns {HTMLElement}
   */
  static setTextarea(type, nameId, label) {
    let textarea = document.createElement("textarea");
    textarea.setAttribute("type", type);
    textarea.setAttribute("name", nameId);
    textarea.setAttribute("id", nameId);
    textarea.setAttribute("aria-labelledby", label);
    textarea.setAttribute("tabindex", "1");
    textarea.setAttribute("required", "");
    return textarea;
  }
  /**
   *
   * @returns {HTMLElement}
   */
  static setSubmitBtn() {
    let btn = document.createElement("input");
    btn.setAttribute("type", "submit");
    btn.setAttribute("tabindex", "1");
    btn.setAttribute("aria-label", "Envoyer le formulaire");
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      console.log(firstName.value);
      console.log(lastName.value);
      console.log(email.value);
      console.log(message.value);
    });
    return btn;
  }
  /**
   * Suppréssion du formulaire et mise en ordre des tabindex
   */
  static crossEvent() {
    document.querySelector(".photographer__form-container").remove();
    Accessibility.initIndex();
    Accessibility.removeAriaHidden();
    document.querySelector(".photographer__modal-btn").focus();
  }
  /**
   * Initialisation du formulaire
   * @param {string} name nom du photographe
   */
  static init(name) {
    Accessibility.removeIndex();
    Accessibility.setAriaHidden();
    this.setHtml();
    const formContainer = document.querySelector(".photographer__form-container");
    const form = this.setForm(name);
    form.appendChild(this.setFormTitle(name));
    form.appendChild(this.setCross());
    form.appendChild(this.setLabel("firstName", "Prénom"));
    form.appendChild(this.setInput("text", "firstName", "Prénom"));
    form.appendChild(this.setLabel("lastName", "Nom"));
    form.appendChild(this.setInput("text", "lastName", "Nom"));
    form.appendChild(this.setLabel("email", "Email"));
    form.appendChild(this.setInput("email", "email", "Email"));
    form.appendChild(this.setLabel("message", "Votre message"));
    form.appendChild(this.setTextarea("textarea", "message", "Votre-message"));
    form.appendChild(this.setSubmitBtn());
    formContainer.appendChild(form);
  }
}
