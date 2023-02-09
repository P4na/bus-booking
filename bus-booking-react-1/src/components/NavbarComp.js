import { NavLink } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

export const NavbarComp = () => {
  const navigate = useNavigate()

  return (
    <Navbar expand="lg" variant="dark" bg="dark">
      <Container>
        <button style={{background:"none", border:"none"}}>
          <Navbar.Brand onClick={()=>{navigate("/")}}>
              Bus booking
          </Navbar.Brand>
        </button>
      </Container>
    </Navbar>
  );
};
