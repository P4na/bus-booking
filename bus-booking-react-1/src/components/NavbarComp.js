import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export const NavbarComp = () => {
  return (
    <Navbar expand="lg" variant="dark" bg="dark">
      <Container>
        <Navbar.Brand>Bus booking</Navbar.Brand>
      </Container>
    </Navbar>
  );
};
