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
router.get('/', function (req, res, next) {
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

  res.status(200).json({ result });

});

router.get('/api/assessments', async function (req, res) {

  let result = await db.collection("assessment").find().toArray();

  if (!result) return res.status(404).send('Unable to find the requested resource!');

  res.status(200).json({ result });

});

router.get('/api/assessments/query', async function (req, res) {

  var perPage = Math.max(req.query.perPage, 20) || 20;

  var whereClause = {};

  if (req.query.StudentID)
    whereClause.StudentID = parseInt(req.query.StudentID);

  if (req.query.Class)
    whereClause.Class = req.query.Class;

  if (req.query.Subject)
    whereClause.Subject = req.query.Subject;

  if (req.query.AssessmentType)
    whereClause.AssessmentType = req.query.AssessmentType;

  if (req.query.StartDate && req.query.EndDate)
    whereClause.AssessmentDate = { $gte: new Date(req.query.StartDate), $lte: new Date(req.query.EndDate) };

  let result = await db.collection("assessment").find(whereClause, {
    limit: perPage,
    skip: perPage * (Math.max(req.query.page - 1, 0) || 0)
  }).toArray();

  if (!result) return res.status(404).send('Unable to find the requested resource!');

  var pages = Math.ceil(await db.collection("assessment").find(whereClause).count() / perPage);

  res.status(200).json({ assessment: result, pages: pages, perPage: perPage });

});

router.get('/api/assessments/:field/:value', async function (req, res) {

  var whereClause = {};

  if (req.params.field && req.params.value)
    whereClause[req.params.field] = req.params.value;

  let result = await db.collection("assessment").find(whereClause).toArray();

  if (!result) return res.status(404).send('Unable to find the requested resource!');

  res.status(200).json({ result });

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

router.post('/api/plotChartData', async function (req, res) {

  if (req.body.constructor === Object && Object.keys(req.body).length === 0)
    return res.status(404).send('Unable to find the requested resource!');

  var whereClause = req.body;

  let result = await db.collection("assessment").find(whereClause).toArray();

  if (!result) return res.status(404).send('Unable to find the requested resource!');

  res.status(200).json({ result });

});

router.get('/api/plotChartAssessmentByClass', async function (req, res) {
  const groupBy = [
    {
      $match: {
        GradingType: "Score"
      }
    },
    {
      $group: {
        _id: { AssessmentDate: "$AssessmentDate", Class: "$Class" },
        avg: { $avg: "$Score" }
      }
    },
    {
      $sort: { _id: 1 }
    }
  ];

  const result = await db.collection("assessment").aggregate(groupBy).toArray();

  if (!result) return res.status(404).send('Unable to find the requested resource!');

  res.status(200).json({ result });
});

router.get('/api/plotChartDSEvsExam', async function (req, res) {
  const groupBy = [
    {
      $match: {
        AssessmentType: "DSE"
      }
    },
    {
      $group: {
        _id: "$Grade",
        count: { $sum: 1 }
      }
    },
    {
      $sort: { _id: 1 }
    }
  ];

  const result = await db.collection("assessment").aggregate(groupBy).toArray();

  if (!result) return res.status(404).send('Unable to find the requested resource!');

  res.status(200).json({ result });
});

router.get('/api/plotChartDSEGrade', async function (req, res) {
  const groupBy = [
    {
      $match: {
        AssessmentType: "DSE"
      }
    },
    {
      $group: {
        _id: "$Grade",
        count: { $sum: 1 }
      }
    },
    {
      $sort: { _id: 1 }
    }
  ];

  const result = await db.collection("assessment").aggregate(groupBy).toArray();

  if (!result) return res.status(404).send('Unable to find the requested resource!');

  res.status(200).json({ result });
});

router.get('/api/plotChartPassDSE', async function (req, res) {

  // Reference: https://www.hkeaa.edu.hk/en/recognition/hkdse_recognition/local/
  var groupBy1 = [
    {
      $match: {
        AssessmentType: "DSE"
      }
    },
    {
      $group: {
        _id: "$StudentID",
        count: { $sum: 1 }
      }
    }
  ];

  var groupBy2 = [
    {
      $match: {
        AssessmentType: "DSE",
        $or: [
          {
            Subject: { $in: ["CHIN", "ENG"] },
            Grade: { $in: ["3", "4", "5", "6", "7"] }
          },
          {
            Subject: { $in: ["MATH", "LIBS"] },
            Grade: { $in: ["2", "3", "4", "5", "6", "7"] }
          }
        ]
      }
    },
    {
      $group: {
        _id: "$StudentID",
        count: { $sum: 1 }
      }
    },
    {
      $match: {
        count: { $gte: 4 }
      }
    }
  ];

  let result1 = await db.collection("assessment").aggregate(groupBy1).toArray();
  // TESTING:
  // console.log(result1.length);
  // return res.status(200).json({result1});

  let result2 = await db.collection("assessment").aggregate(groupBy2).toArray();

  if (!result1) return res.status(404).send('Unable to find the requested resource!');

  // var num_total = result1.length;
  var num_pass = result2.length;
  var num_fail = result1.length - result2.length;

  res.status(200).json({
    result: [
      {
        name: "Meet or Above (3322)",
        value: num_pass
      }, {
        name: "Not Meet Minimum",
        value: num_fail
      }
    ]
  });

});

router.post('/api/plotChartData', async function (req, res) {

  if (req.body.constructor === Object && Object.keys(req.body).length === 0)
    return res.status(404).send('Unable to find the requested resource!');

  var whereClause = req.body;

  let result = await db.collection("assessment").find(whereClause).toArray();

  if (!result) return res.status(404).send('Unable to find the requested resource!');

  res.status(200).json({ result });

});

router.get('/api/plotChartSubjectDSE', async function (req, res) {

  var groupBy = [
    {
      $match: {
        AssessmentType: "DSE"
      }
    },
    {
      $group: {
        _id: { Subject: "$Subject", Grade: "$Grade" },
        count: { $sum: 1 }
      }
    },
    {
      $sort: {
        _id: -1
      }
    }
  ];
  
  let result = await db.collection("assessment").aggregate(groupBy).toArray();

  if (!result) return res.status(404).send('Unable to find the requested resource!');

  var data = [];

  const Subject = ["CHIN", "ENG", "MATH", "LIBS"];

  for (var j = 0; j < Subject.length; j++) {
    var obj = {};
    for (var i = 0; i < result.length; i++) {
      if (result[i]._id.Subject === Subject[j]) {
        obj.Subject = result[i]._id.Subject;
        obj[result[i]._id.Grade] = result[i].count;
      }
    }
    data[j] = obj;
  }

  return res.status(200).json({ data });

});

module.exports = router;