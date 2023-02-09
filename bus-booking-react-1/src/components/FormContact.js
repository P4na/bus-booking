import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import pgAxios from "../api/pgAxios";

export const FormContact = () =>{
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [check, setCheck] = useState(false)

  const ADD_TICKET = "/api/add-ticket/"


  const handleSubmit = async (e) => {
    
    e.preventDefault()
    if(check === true){
      if(name  && surname && email !== null){
        let lsBookedSeats = localStorage.getItem("bookedSeats")
        let bookedSeats= lsBookedSeats.split(",")
        await pgAxios.post(ADD_TICKET, JSON.stringify({name, surname, email, bookedSeats}), {headers: {'Content-Type': 'application/json'}}).then(()=>console.log("mandato"))
      }
    }

  }

    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address*</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}} /* required *//>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Name*</Form.Label>
          <Form.Control type="text" placeholder="Enter name" onChange={(e)=>{setName(e.target.value)}} /* required *//>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Surname*</Form.Label>
          <Form.Control type="text" placeholder="Enter Surname" onChange={(e)=>{setSurname(e.target.value)}} /* required *//>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" onChange={(e)=>{setCheck(e.target.checked)}} /* required *//>
        </Form.Group>
        <Button variant="primary" type="submit" >
          Compra biglietto
        </Button>
      </Form>
    );
  }