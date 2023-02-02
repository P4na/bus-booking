var express = require('express');
var router = express.Router();

const pool = require("../db");
const { getStations } = require('./queries/queries');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/:id', function(req, res, next) {
  res.render('search', { title: 'Express' });
});

router.get("/api/getstations", (req, res, next)=> {
  pool.query(getStations, (err, response)=> {
    if (err) throw err;
    res.send(response.rows)
  })
})

module.exports = router;
