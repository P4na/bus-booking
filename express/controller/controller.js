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
  addTicket,
  findTicketsEmailRoute,
  findSeatsOccupiedRoute,
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

router.post('/add-ticket/', (req, res)=>{
  const {name, surname, email, bookedSeats, route} = req.body 

  for (let i = 0; i < bookedSeats.length; i++) {
    pool.query(
      addTicket(name,surname,email, bookedSeats[i], route), (error, response)=> {
      if (error) {throw error}; 
      console.log(`seat ${bookedSeats[i]} prenotato`)
        } 
      )
    }
  res.status(201).send("prenotato tutto")
})
  
router.get('/find-ticket-by-route-email/:email/:route',(req,res)=>{
  pool.query(
    findTicketsEmailRoute(req.params.email, req.params.route),(error, response)=> {
      if (error) {throw error};
      res.send(response.rows)
    }
  )
})

router.get('/find-seats-occupied/:route', (req, res)=>{
  pool.query(findSeatsOccupiedRoute(req.params.route), (error, response)=>{
    if (error) {throw error};
      res.send(response.rows)
  })
})

module.exports = router;
 