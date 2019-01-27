const https = require('http');
var request = require("request");
exports.allNews = function(api) {
	https.get('http://localhost/WebScan/public/news/all', (resp) => {
	  let data = '';

	  resp.on('data', (chunk) => {
	    data += chunk;
	  });

	  resp.on('end', () => {
	    return JSON.parse(data);
	  });

	}).on("error", (err) => {
	  console.log("Error: " + err.message);
	});
};
