var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://comp7980group:j5CAghoqKa5aGaaP5xQ0mJkkzAacUQ1mu4GnuBctOCut0BUx7SQveoatW5d9X2koOpeByWq9jslPACDbonHIzg==@comp7980group.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@comp7980group@';

var db;

MongoClient.connect(url, function (err, client) {
  db = client.db('assessmentsDB');
  console.log("DB connected");
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/assessments', async function (req, res) {

  let result = await db.collection("assessments").insertOne(req.body);

  if (!result) return res.status(404).send('Unable to find the requested resource!');

  res.status(201).json({ id: result.insertedId });

});

module.exports = router;
