var MongoClient = require('mongodb').MongoClient;
var request = require('request');

var db;

MongoClient.connect(process.env.MONGOLAB_URI || 'mongodb://localhost:27017/msp-bus-live', function (err, database) {
  if (err) throw err;

  db = database;

  setInterval(storeVehicleLocations, 30000);
  storeVehicleLocations();
});


function storeVehicleLocations() {
  request.get('http://svc.metrotransit.org/NexTrip/VehicleLocations/0?format=json', function(err, resp, body) {
    db.collection('vehicleLocations').insert(JSON.parse(body), { w: 0 });
  });
}
