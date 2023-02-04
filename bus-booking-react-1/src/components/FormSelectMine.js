import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import pgAxios from "../api/pgAxios";

export const FormSelectMine = () => {
  const [stations, setStations] = useState([]);
  const [stOne, setStOne] = useState();
  const [stTwo, setStTwo] = useState();
  const [date, setDate] = useState("");

  const ALL_STATIONS_API = "/api/all-stations";
  const FIND_API = "/api/find/";

  const getAllStations = async () => {
    try {
      await pgAxios.get(ALL_STATIONS_API).then((res) => {
        setStations(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllStations();
  }, []);

  const handleChangestOne = (e) => {
    setStOne(e.target.options.selectedIndex);
  };

  const handleChangestTwo = (e) => {
    setStTwo(e.target.options.selectedIndex);
  };

  const handleChangeDate = (e) => {
    let dateToChange = e.target.value
    let splittedData = dateToChange.split('-')
    let newDate = ""
    let monthEl = splittedData[1]
    splittedData.remove(monthEl)

    for(let i = 0; i < splittedData.length; i++){
      newDate += splittedData[i] + "-"
    }
    
    console.log(newDate)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await pgAxios
        .get(FIND_API + `${stOne}/${stTwo}`)
        .then((res) => console.log(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Partenza</Form.Label>
        <Form.Select onChange={handleChangestOne}>
          <option key="-1">----</option>
          {stations.map((el) => (
            <option key={el.id}>{el.name}</option>
          ))}
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Arrivo</Form.Label>
        <Form.Select onChange={handleChangestTwo}>
          <option key="-1">----</option>
          {stations.map((el) => (
            <option key={el.id}>{el.name}</option>
          ))}
        </Form.Select>
      </Form.Group>
      <Form.Group>
        <Form.Label>Partenza</Form.Label>
        <Form.Control type="date" onChange={handleChangeDate}></Form.Control>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
