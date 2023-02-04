const { response } = require("express");
var express = require("express");

const pool = require("../db");
const { getStations } = require("./query");

var router = express.Router();

router.get("/all-stations", (req, res, next) => {
  pool.query(getStations, (error, response) => {
    if (error) throw error;
    res.send(response.rows);
  });
});

module.exports = router;
