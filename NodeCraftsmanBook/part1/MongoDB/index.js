var MongoClient = require('mongodb').MongoClient;

MongoClient.connect(
  'mongodb://127.0.0.1:27017/mytestDB',
    function(err, connection) {
      var collection = connection.collection('collection1');
        collection.insert({'name': 'Jane Doe'},  //insert - create a document in collection1
          function(err, count) {
            collection.find().toArray(function(err, documents) {
            console.dir(documents);
            connection.close();
          });
        });

 });

 MongoClient.connect(
   'mongodb://127.0.0.1:27017/mytestDB',
     function(err, connection) {
       var collection = connection.collection('collection1');
       //update the first document only
       // collection.update({}, {'$set': {'age' : 25}}, function(err, count) {
       //   connection.close();
       // });

       //update the first all the document
       collection.update({}, {'$set': {'age' : 25}}, {'multi' : true}, function(err, count) {
         connection.close();
       });
  });
