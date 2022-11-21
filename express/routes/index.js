var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://comp7980group:j5CAghoqKa5aGaaP5xQ0mJkkzAacUQ1mu4GnuBctOCut0BUx7SQveoatW5d9X2koOpeByWq9jslPACDbonHIzg%3D%3D@comp7980group.mongo.cosmos.azure.com:10255/?ssl=true';

var db;

MongoClient.connect(url, function (err, client) {
  db = client.db('comp7980groupDB');
  console.log("DB connected");
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
