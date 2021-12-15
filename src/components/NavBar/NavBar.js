import {Link} from "react-router-dom";
import Navbar from "react-bootstrap/NavBar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBar.css";
import ShoppingCart from "./ShoppingCart";
import logo1 from "../../assets/img/logo1.png"

const NavBar = () => {
    return(
        <Navbar className="nav-container sticky-top" bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand><Link to="/" className="link"><img src={logo1} className="logo img-fluid"/></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="nav" id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link to="/"><Link to="/" className="link">Inicio</Link></Nav.Link>
                        <NavDropdown title="Categorías" id="basic-nav-dropdown">
                            <NavDropdown.Item><Link to="/categorias/auriculares" className="link">Auriculares</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/categorias/monitores-de-estudio" className="link">Monitores de estudio</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/categorias/mixers" className="link">Mixers</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/categorias/reproductores-dj" className="link">Reproductores Dj</Link></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item><Link to="/" className="link">Todos</Link></NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link><Link to="/contact" className="link">Contacto</Link></Nav.Link>
                        <Nav.Link><Link to="/cart" className="link"><ShoppingCart /></Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;