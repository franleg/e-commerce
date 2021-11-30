import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
    return(
        <div className="container-fluid nav-container">
            <div className="row">
                <div className="col-lg-12 col-xs-12">
                    <Navbar bg="light" expand="lg">
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
                                    <Nav.Link href="#cart" className="cart"><FontAwesomeIcon icon={faShoppingCart}/></Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </div>
        </div>
    )
}

export default NavBar;