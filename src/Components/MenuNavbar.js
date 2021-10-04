import logo from '../logo.svg';

import { Navbar, Container, Nav } from 'react-bootstrap';

function MenuNavbar () {
    return (
        <header>
            <Navbar expand="lg" className="menu-navbar">
            <Container>
                <Navbar.Brand><h2><img src={logo} alt="YG Dev"/>YG Dev</h2></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto menu-elements"> 
                    <Nav.Link className="menu-single-element ms-3">Strona główna</Nav.Link>
                    <Nav.Link className="menu-single-element ms-3">O nas</Nav.Link>
                    <Nav.Link className="menu-single-element ms-3">Usługi</Nav.Link>
                    <Nav.Link className="menu-single-element ms-3">Portfolio</Nav.Link>
                    <Nav.Link className="menu-single-element ms-3">Kontakt</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>
    )
}

export default MenuNavbar;