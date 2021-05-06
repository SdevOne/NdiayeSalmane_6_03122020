import { data } from "./data.js";
/*import { photographer } from "./photographer.js";
import { photographerPage } from "./photographerPage.js";

const data = fetch("public/js/api/data.json")
  .then(function (response) {
    if (response.ok) {
      return response.json();
    }
  })
  .then(function (data) {
    for (const photographerData of data.photographers) {
      let photographers = new photographer(photographerData);
      photographers.setCard();
    }
  })
  .catch({});*/

data.getAllPhotographers();
