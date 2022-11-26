var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;

var ObjectId = require('mongodb').ObjectId;

var url = 'mongodb://comp7980group:j5CAghoqKa5aGaaP5xQ0mJkkzAacUQ1mu4GnuBctOCut0BUx7SQveoatW5d9X2koOpeByWq9jslPACDbonHIzg==@comp7980group.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@comp7980group@';

var db;

MongoClient.connect(url, function (err, client) {
  db = client.db('assessmentDB');
  console.log("DB connected");
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/assessment', async function (req, res) {

  let result = await db.collection("assessment").insertOne(req.body);

  if (!result) return res.status(404).send('Unable to find the requested resource!');

  res.status(201).json({ id: result.insertedId });

});
router.post('/api/assessments', async function (req, res) {

  let result = await db.collection("assessment").insertMany(req.body.data);

  if (!result) return res.status(404).send('Unable to find the requested resource!');

  res.status(201).json({ id: result.insertedIds });

});

router.get('/api/assessment/:id', async function (req, res) {

  if (!ObjectId.isValid(req.params.id))
    return res.status(404).send('Unable to find the requested resource!');

  let result = await db.collection("assessment").findOne({ _id: ObjectId(req.params.id) })

  if (!result) return res.status(404).send('Unable to find the requested record!');

  res.status(200).json({result});

});

router.get('/api/assessments', async function (req, res) {
  
  let result = await db.collection("assessment").find().toArray();

  if (!result) return res.status(404).send('Unable to find the requested resource!');

  res.status(200).json({result});

});

router.get('/api/assessments/:field/:value', async function (req, res) {

  var whereClause = {};

  if (req.params.field && req.params.value)
    whereClause[req.params.field] = req.params.value;

  let result = await db.collection("assessment").find(whereClause).toArray();

  if (!result) return res.status(404).send('Unable to find the requested resource!');

  res.status(200).json({result});

});

router.put('/api/assessment/:id', async function (req, res) {

  if (!ObjectId.isValid(req.params.id))
    return res.status(404).send('Unable to find the requested resource!');

  var result = await db.collection("assessment").findOneAndReplace(
    { _id: ObjectId(req.params.id) }, req.body
  );

  if (!result.value)
    return res.status(404).send('Unable to find the requested record!');

  res.status(204).send();

});

router.delete('/api/assessment/:id', async function (req, res) {

  if (!ObjectId.isValid(req.params.id))
    return res.status(404).send('Unable to find the requested resource!');

  var result = await db.collection("assessment").findOneAndDelete({ _id: ObjectId(req.params.id) });

  if (!result.value)
    return res.status(404).send('Unable to find the requested record!');

  res.status(204).send();

});

module.exports = router;