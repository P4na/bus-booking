const { response } = require("express");
var express = require("express");

const pool = require("../db");
const {
  getStations,
  findStations,
  getSingleStations,
  findRoute,
  getSingleBus,
  getSeatsByBus,
} = require("./query");

var router = express.Router();

router.get("/all-stations", (req, res, next) => {
  pool.query(getStations, (error, response) => {
    if (error) throw error;
    res.send(response.rows);
  });
}); 

router.get(`/find-route/:el1/:el2/:eltime`, (req, res, next) => {
  pool.query( 
    findStations(req.params.el1, req.params.el2, req.params.eltime),
    (error, response) => {
      if (error) throw error;
      res.send(response.rows);
    }
  );
});

router.get(`/find-route/:id`, (req, res, next) => {
  pool.query(findRoute(req.params.id), (error, response) => {
    if (error) throw error;
    res.send(response.rows);
  });
});

router.get(`/find-bus/:id`, (req, res, next) => {
  pool.query(getSingleBus(req.params.id), (error, response) => {
    if (error) throw error;
    res.send(response.rows);
  });
});
 
router.get(`/find-seats-by-bus/:id`, (req, res, next) => {
  pool.query(getSeatsByBus(req.params.id), (error, response) => {
    if (error) throw error;
    res.send(response.rows);
  });
});

router.get(`/find-station/:id`, (req, res, next) => {
  pool.query(getSingleStations(req.params.id), (error, response) => {
    if (error) throw error;
    res.send(response.rows);
  });
});

module.exports = router;
