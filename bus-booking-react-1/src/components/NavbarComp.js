import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

export const NavbarComp = () => {
  return (
    <Navbar expand="lg" variant="dark" bg="dark">
      <Container>
        <NavLink to={"/"} style={{"textDecoration":"none"}}>
          <Navbar.Brand>
              Bus booking
          </Navbar.Brand>
        </NavLink>
      </Container>
    </Navbar>
  );
};
