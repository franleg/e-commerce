import Navbar from "react-bootstrap/NavBar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBar.css";
import ShoppingCart from "./ShoppingCart";

const NavBar = () => {
    return(
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="#home">WAV</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="nav" id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <NavDropdown title="Categorías" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Auriculares</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Monitores de estudio</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Mixers</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Compacteras</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Todos</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#contact">Contacto</Nav.Link>
                        <Nav.Link href="#cart" className="cart"><ShoppingCart /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;