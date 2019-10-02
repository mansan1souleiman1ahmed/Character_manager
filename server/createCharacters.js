const axios = require("axios");
//Function pour faire des post

document
  .getElementById("form-id")
  .addEventListener("submit", performPostRequest);
function performPostRequest(e) {
  let nameInput = document.getElementById("name");
  let descriptionInput = document.getElementById("description");
  //const createForm = document.getElementById("create");
  e.preventDefault();
  axios
    .post("https://character-database.becode.xyz/characters", {
      name: nameInput.value,
      description: descriptionInput.value
      //   image: 'https://source.unsplash.com/random'
    })
    .then(response => {
      // console.log(response.config.data);
      return response.config.data;
    });
}

//Function qui transforme les images en base 64
/* function readFile(el) {
  if (el.files && el.files[0]) {
    var FR = new FileReader();

    FR.addEventListener("load", function(e) {
      console.log(e.target.result);
    });

    FR.readAsDataURL(el.files[0]);
  }
}

document.querySelector("#files").addEventListener("change", el => {
  readFile(el.currentTarget);
});
 */
