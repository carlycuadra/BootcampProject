var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config.js');

/* Connect to your database using mongoose - remember to keep your key secret*/
mongoose.connect(config.db.uri, {useNewUrlParser: true});
/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html

var findLibraryWest = function() {
  Listing.findOne({code:'LBW'},function(err, Data){
    if (err) throw err;
    console.log(Data);
});
};
var removeCable = function() {
  
    Listing.deleteOne({code: 'CABL' },function(err,Data) {
      if (err) throw err;
      console.log("Deleted", Data.code, "Directory:", Data);
    });
    
 
};
var updatePhelpsLab = function() {
  
  Listing.findOne({name:"Phelps Laboratory"},function(err, Data){
    if (err) throw err;
    Data.address = "1953 Museum Rd, Gainesville, FL 32603";
   
      console.log("Updated : ", Data.name, "\n", Data);
   
  });



};
var retrieveAllListings = function() {
  Listing.find(function(err, Data){
    if (err) throw err;
    console.log(Data);
  });
};
updatePhelpsLab();
findLibraryWest();
removeCable();
retrieveAllListings();
