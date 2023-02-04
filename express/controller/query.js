const getStations = 'SELECT * FROM "bookingBus".station';

const findStations = (el1, el2) =>{
  return `SELECT * FROM "bookingBus".route B WHERE B.station_start = ${el1} AND B.station_end = ${el2} AND B.begin_hour::date = '2023-04-02'`
}

module.exports = {
  getStations,
  findStations
};
