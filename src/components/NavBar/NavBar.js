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
                <Navbar.Brand href="#home">React</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="nav" id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <NavDropdown title="Servicios" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Servicio 1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Servicio 2</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Servicio 3</NavDropdown.Item>
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