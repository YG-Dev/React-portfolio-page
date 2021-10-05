import logo from '../logo.svg';

import { Navbar, Container, Nav } from 'react-bootstrap';

function MenuNavbar () {
    return (
        <header>
            <Navbar expand="lg" className="menu-navbar">
            <Container>
                <Navbar.Brand href="#"><img src={logo} alt="YG Dev" className="logo-img"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto menu-elements"> 
                    <Nav.Link className="menu-single-element ms-3">Home page</Nav.Link>
                    <Nav.Link className="menu-single-element ms-3">About us</Nav.Link>
                    <Nav.Link className="menu-single-element ms-3">Services</Nav.Link>
                    <Nav.Link className="menu-single-element ms-3">Portfolio</Nav.Link>
                    <Nav.Link className="menu-single-element ms-3">Contact</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>
    )
}

export default MenuNavbar;