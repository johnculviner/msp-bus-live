var http = require('http');
var mongo = require('mongodb').MongoClient;


function storeVehicleLocations() {

}

setInterval(storeVehicleLocations, 30000);
storeVehicleLocations();