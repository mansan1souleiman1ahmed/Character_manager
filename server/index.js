const axios = require("axios");
const BASE_URL = "https://character-database.becode.xyz";
let view;

axios
  .get(`${BASE_URL}/characters`)
  .then(response => {
    // console.log(response);
    return response;
  })
  .then(resp => {
    // console.log(resp.data);
    output = "<h2></h2>";
    resp.data.forEach(function(characters) {
      output += `
      <br>
      <div class="character" data-id=${characters.id}> 
      <span>
     <li class="character-name"><span class="list-description">Name:</span> <span>${characters.name}</span></li>
     <li><span class="list-description">Description:</span> ${characters.description}</li>
    <li><img width="250px" height="250px" src="data:image/png;base64,${characters.image}"/></li>
     </ul>
     <button id="view-button">View</button>
     <button id="edit-button">Edit</button>
     <button class="delete-button">Delete </button>
     </div>
    `;
    });
    document.getElementById("list-display").innerHTML = output;
  });
