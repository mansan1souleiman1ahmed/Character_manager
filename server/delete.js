const axios = require("axios");
const BASE_URL = "https://character-database.becode.xyz/characters";

document.addEventListener("click", function(e) {
  if (e.target && e.target.classList.contains("delete-button")) {
    let parentElement = e.target.closest(".character");
    let parentID = parentElement.getAttribute("data-id");
    let confirmDelete = confirm(
      `Are you sure to delete ${
        parentElement.querySelector(".character-name span").innerText
      }?`
    );
    if (confirmDelete) {
      axios.delete(`${BASE_URL}/${parentID}`).then(res => {
        parentElement.parentNode.removeChild(parentElement);
      });
    }
  }
});
