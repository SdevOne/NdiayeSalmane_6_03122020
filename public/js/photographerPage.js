import { Data } from "./Data.js";
import { Page } from "./Page.js";

Page.setPhotographerPage();
const photographerId = location.search.substring(1).split("/")[1];
Data.getPhotographer(photographerId);
Data.getMedias(photographerId);
