import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import pgAxios from "../api/pgAxios";

export const BusMatrix = () => {
  const { id } = useParams();

  const FIND_SEATS_BY_BUS_API = "/api/find-seats-by-bus/";
  const FIND_SEATS_OCCUPIED = "/api/find-seats-occupied/";

  const [seats, setSeats] = useState([]);
  const [occupied, setOccupied] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);

  const GenerateMatrix = () => {
    const columns = 4;
    let k = 0;
    let lista = [];
    for (let i = 0; i < seats.length; i++) {
      if (k === columns) {
        lista.push(<br />);
        k = 0;
      }
      k++;
      lista.push(
        <input
          id={`${seats[i].id}`}
          type={"checkbox"}
          onClick={saveSeat}
          style={{ width: "2.5rem", height: "4rem" }}
        />
      );
    }
    return lista;
  };

  const getSeatsAPI = async () => {
    try {
      await pgAxios.get(FIND_SEATS_BY_BUS_API + `${id}`).then((res) => {
        setSeats(res.data);
      });
      await pgAxios.get(FIND_SEATS_OCCUPIED + id).then((res) => {
        setOccupied(res.data);
      });
    } catch (error) {
      throw error;
    }
  };

  const saveSeat = (e) => {
    let item = bookedSeats;
    let thereis = false;
    for (let i = 0; i < item.length; i++) {
      if (item[i] === e.target.id) {
        item[i] = null;
        thereis = true;
      }
    }
    if (thereis === false) {
      item.push(e.target.id);
    }
    let newItem = item.filter((el) => {
      return el !== null;
    });
    localStorage.setItem("bookedSeats", newItem);
  };

  useEffect(() => {
    getSeatsAPI();
  }, []);

  return (
    <>
      <h1>Matrix</h1>
      <h3>Select a seat</h3>
      <GenerateMatrix />
    </>
  );
};
