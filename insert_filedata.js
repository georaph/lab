var fs = require("fs");
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;

  var dbo = db.db("mydb1");
  console.log("dir" + __dirname);
  var file = __dirname + '/faculty.csv';
   fs.readFile(file, 'utf8', function (err, data) {
    if (err) {
      console.log('Error: ' + err);
      //cb(err);
    } else {
      ars = data.split('\n');
      for (i = 0; i < ars.length-1; i++) {
        jks = ars[i].split(',');
        dbo.collection("facultydata").insertOne({ name: jks[0], details: jks[1] }, function (err, userInstance) {
           if( i== ars.length -1) db.close();
        });
      }
    }
  });

}); 






