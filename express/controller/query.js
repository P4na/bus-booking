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

module.exports = {
  getStations,
  findStations,
  getSingleStations,
  findRoute,
  getSingleBus,
  getSeatsByBus,
};
