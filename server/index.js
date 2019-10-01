const axios = require("axios");
const BASE_URL = "https://character-database.becode.xyz";
let output;
axios
  .get(`${BASE_URL}/characters`)
  .then(response => {
    return response;
  })
  .then(resp => {
    output = "<h2>See all characters</h2>";
    resp.data.forEach(function(characters) {
      if (characters.image != undefined) {
        output += `
      <br>
      <div class="characters"> 
      <ul>
     <li>Name: ${characters.name}</li>
     <li>Description: ${characters.description}</li>
    <li><img width="150px" height="150px" src="data:image/png;base64,${characters.image}"/></li>
     </ul>
     </div>
    `;
      } else {
        characters.image = undefined;
      }
    });
    document.getElementById("list-display").innerHTML = output;
  });
//Function pour faire des post
let nameInput = document.getElementById("name");
let shortInput = document.getElementById("shortDesc");
let descInput = document.getElementById("desc");
const createForm = document.getElementById("create");

createForm.addEventListener("submit", function(e) {
  e.preventDefault();
  postUser();
});

async function postUser() {
  try {
    const response = await axios
      .post("https://character-database.becode.xyz/characters", {
        name: nameInput.value,
        shortDescription: shortInput.value,
        description: descInput.value
        //   image: 'https://source.unsplash.com/random'
      })
      .then(response => {
        console.log(response);
        return response;
      });
  } catch (error) {
    console.error(error);
  }
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
