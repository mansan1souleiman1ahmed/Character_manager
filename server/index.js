const axios = require("axios");
const BASE_URL = "https://character-database.becode.xyz";
let output;
axios
  .get(`${BASE_URL}/characters`)
  .then(response => {
    return response;
  })
  .then(resp => {
    output = "<h2>Characters</h2>";
    console.log(resp.data);
    resp.data.forEach(function(characters) {
      output += `
     <p>Name: ${characters.name}</p>
     <p>Description: ${characters.description}</p>
     <img src="${characters.url}"/>
    
    `;
      console.log(output);
    });
    document.getElementById("list-display").innerHTML = output;
  });
