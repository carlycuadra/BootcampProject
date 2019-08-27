

var http = require("http");
var fs = require("fs");
var url = require("url");
var port = 8080;

/* Global variables */
var listingData,server;
//test
var requestHandler = function (request, response) {
  console.log(parsedUrl);
  console.log(request.method);
var parsedUrl = url.parse(request.url);


if (request.url === "/listings") {
response.statusCode = 200;
response.write(listingData)

} else {


response.statusCode = 404;

response.write("Bad gateway error");

}



response.end();

};

//readFile is used to read the file in node.js

fs.readFile('listings.json', 'utf8', function(err, data) {
  listingData=data;
  // if (err) throw err;
  server = http.createServer(requestHandler);
  server.listen(port, function() {


// 
// // the server is now started, listening for requests on port 8080
// 
// //once the server is listening, this callback function is executed
// //Start the server
console.log('Server listening on: http://127.0.0.1:' + port);

});  
});