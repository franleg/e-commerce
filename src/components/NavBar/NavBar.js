import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/NavBar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import ShoppingCart from "./ShoppingCart";
import logo from "../../assets/img/logo.png"
import "./NavBar.css";

const NavBar = () => {
    return(
        <Navbar className="nav-container sticky-top" bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand><Link to="/" className="link"><img src={logo} className="logo img-fluid" alt="logo"/></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="nav" id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" className="link">Inicio</Nav.Link>
                        <NavDropdown title="Categorías" id="basic-nav-dropdown">
                            <NavDropdown.Item><Link to="/categorias/auriculares" className="link">Auriculares</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/categorias/monitores-de-estudio" className="link">Monitores de estudio</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/categorias/mixers" className="link">Mixers</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/categorias/reproductores-dj" className="link">Reproductores Dj</Link></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item><Link to="/" className="link">Todos</Link></NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/carrito" className="link"><ShoppingCart /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;