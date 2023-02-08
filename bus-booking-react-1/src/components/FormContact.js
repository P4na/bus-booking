import { Form, Button } from "react-bootstrap";

export const FormContact = () =>{

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("sium")
  }

    return (
      <Form method="post">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address*</Form.Label>
          <Form.Control type="email" placeholder="Enter email" /* required *//>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Name*</Form.Label>
          <Form.Control type="text" placeholder="Enter name" /* required *//>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Surname*</Form.Label>
          <Form.Control type="text" placeholder="Enter Surname" /* required *//>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" /* required *//>
        </Form.Group>
        <Button variant="primary" type="button" onSubmit={handleSubmit}>
          Compra biglietto
        </Button>
      </Form>
    );
  }