var mongo = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
var token = fs.readFileSync(process.cwd()+"/.env");
//console.log(token)
//var oldurl = `mongodb+srv://reminderapi-service:${token}@reminderapi-acc-qavww.gcp.mongodb.net/lists?retryWrites=true`
var url = "mongodb://reminder-api:aggiecodingclub@acc-shard-00-00-uebtx.gcp.mongodb.net:27017,acc-shard-00-01-uebtx.gcp.mongodb.net:27017,acc-shard-00-02-uebtx.gcp.mongodb.net:27017/test?ssl=true&replicaSet=acc-shard-0&authSource=admin&retryWrites=true"

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});