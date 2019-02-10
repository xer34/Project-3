const apiKey = process.env.API_KEY;
var queryURL = `https://www.zipcodeapi.com/rest/${apiKey}/radius.<format>/<zip_code>/<distance>/<units>`;
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
});
