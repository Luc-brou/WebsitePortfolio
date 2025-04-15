import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import Languages from "./LanguagesPage";
import Home from "./Home";
import About from "./AboutPage";

const Header = () => {
  return (
    <>
      <Navbar bg="bg-primary" variant="light">
        <Container>
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/" element={<Home />}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" element={<About />}>About Me</Nav.Link>
            <Nav.Link as={Link} to="/languages" element={<Languages />}>Programming Languages</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;