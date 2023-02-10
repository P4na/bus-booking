import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import pgAxios from "../api/pgAxios";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

export default function StationCard(props) {
  const [stationStart, setStationStart] = useState({});
  const [stationEnd, setStationEnd] = useState({});

  const FIND_STATION_API = `/api/find-station/`;

  const searchRoute = async () => {
    try {
      await pgAxios
        .get(FIND_STATION_API + `${props.props.station_start}`)
        .then((res) => setStationStart(res.data[0]));
      await pgAxios
        .get(FIND_STATION_API + `${props.props.station_end}`)
        .then((res) => setStationEnd(res.data[0]));
    } catch (error) {
      throw error;
    }
  };

  const InizializeHourStart = () => {
    let timeToChange = props.props.begin_hour.split("-");
    let hourToChange = timeToChange[2].replace("02T", "");
    hourToChange = hourToChange.substring(0, 5);
    return hourToChange;
  };
  const InizializeHourArrive = () => {
    let timeToChange = props.props.end_hour.split("-");
    let hourToChange = timeToChange[2].replace("02T", "");
    hourToChange = hourToChange.substring(0, 5);
    return hourToChange;
  };

  useEffect(() => {
    searchRoute();
  }, []);

  return (
    <Row>
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{`${stationStart.name} - ${stationEnd.name}`}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{`${InizializeHourStart()} -> ${InizializeHourArrive()}`}</Card.Subtitle>
            <Card.Text>{`${props.props.price}$`}</Card.Text>
            <NavLink to={`/ticket/${props.props.id}`}>
              <Button variant="primary">Vai al biglietto</Button>
            </NavLink>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
