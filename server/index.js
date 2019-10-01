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
