import { Data } from "./Data.js";
import { Page } from "./Page.js";

Page.setPhotographerPage();
const photographerId = location.search.substring(1).split("/")[1];
const photographerName = location.search.substring(1).split("/")[0].replace("_", " ");
document.title = photographerName;
Data.getPhotographer(photographerId);
Data.getMedias(photographerId);
