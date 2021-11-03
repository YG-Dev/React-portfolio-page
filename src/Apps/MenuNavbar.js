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
                    <Nav.Link className="menu-single-element ms-3" href="#about-us">About us</Nav.Link>
                    <Nav.Link className="menu-single-element ms-3" href="#our-services">Services</Nav.Link>
                    <Nav.Link className="menu-single-element ms-3" href="#portfolio">Portfolio</Nav.Link>
                    <Nav.Link className="menu-single-element ms-3" href="#contact">Contact</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>
    )
}

export default MenuNavbar;