const { response } = require("express");
var express = require("express");

const pool = require("../db");
const { getStations, findStations } = require("./query");

var router = express.Router();


router.get("/all-stations", (req, res, next) => {
  pool.query(getStations, (error, response) => {
    if (error) throw error;
    res.send(response.rows);
  });
});

router.get(`/find/:el1/:el2`, (req, res, next)=>{
  pool.query(findStations(req.params.el1, req.params.el2), (error, response) => {
    if (error) throw error;
    res.send(response.rows);
  })
})

module.exports = router;
