const getStations = 'SELECT * FROM "bookingBus".station';

const findStations = (el1, el2, eltime) => {
  /* '2023-04-02' */
  return `SELECT * FROM "bookingBus".route B WHERE B.station_start = ${el1} AND B.station_end = ${el2} AND B.begin_hour::date = '${eltime}'`;
};

const findRoute = (id) => {
  return `SELECT * FROM "bookingBus".route B WHERE B.id = ${id}`;
};

const getSingleStations = (elId) => {
  return `SELECT * FROM "bookingBus".station WHERE id = '${elId}'`;
};

const getSingleBus = (elId) => {
  return `SELECT * FROM "bookingBus".bus WHERE id = ${elId}`;
};

const getSeatsByBus = (elId) => {
  return `SELECT * FROM "bookingBus".seat `;
};

const addTicket = (name,surname,email, seat, route) => {
  return `INSERT INTO "bookingBus".ticket(user_name, user_surname, email, seat, route)
    VALUES ('${name}', '${surname}', '${email}', '${seat}', ${route})`
}

const findTicketsEmailRoute = (email, route) => {
  return `SELECT * FROM "bookingBus".ticket WHERE email='${email}' AND route=${route}`
}

const findSeatsOccupiedRoute = (route) => {
  return `SELECT seat FROM "bookingBus".ticket WHERE route=${route} `
}

module.exports = {
  getStations,
  findStations,
  getSingleStations,
  findRoute,
  getSingleBus,
  getSeatsByBus,
  addTicket,
  findTicketsEmailRoute,
  findSeatsOccupiedRoute
};
