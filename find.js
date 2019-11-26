var MongoClient = require('mongodb').MongoClient;
//var system = require('system')
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;

  var dbo = db.db("mydb1");
  //var myobj = { name: "Company Inc", address: "Highway 37123" };
  dbo.collection("customers").find({"name":"co1"}, function(err, res) {
    if (err) throw err;
    res.forEach(function(element) {
       console.log(element.name) 
    }, this);
    //console.log("1"+res[0].name);
    db.close();
  });
}); 






