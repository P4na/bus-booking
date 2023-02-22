import { useEffect, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";

import pgAxios from "../api/pgAxios";

export const FormContact = () => {
  const ADD_TICKET = "/api/add-ticket/";
  const navigate = useNavigate()

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [check, setCheck] = useState(false);
  const [route, setRoute] = useState();
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const { id } = useParams();
  useEffect(() => {setRoute(id)}, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    if (check === true) {
      if (name && surname && email !== null) {
        let lsBookedSeats = localStorage.getItem("bookedSeats");
        let bookedSeats = lsBookedSeats.split(",");
        if (bookedSeats.length<1 || bookedSeats[0] === ''){
          setError("seleziona un posto")
        }
        setLoading(false)
        return 
        /* await pgAxios.post(
          ADD_TICKET,
          JSON.stringify({ name, surname, email, bookedSeats, route }),
          { headers: { "Content-Type": "application/json" } }
        ).then(setLoading(false)).then( navigate(`/success/${email}/${id}`)
        ) */
      }
    }
  };

  return (
    <>
    {error.length > 1 ?
     <Alert variant="danger">{error}</Alert>:
     <></>} 
    <Form onSubmit={handleSubmit}>
      <h1>Your data</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address*</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Name*</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Surname*</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Surname"
          onChange={(e) => {
            setSurname(e.target.value);
          }}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label="Check me out"
          onChange={(e) => {
            setCheck(e.target.checked);
          }}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit" disabled={loading}>
        {loading? 
        <BeatLoader
        color={'#3a3a47'}
        loading={loading}
        size={20}
         />
        : <>Compra biglietto</>      }
        
      </Button>
      
    </Form>
    </>
  );
};
