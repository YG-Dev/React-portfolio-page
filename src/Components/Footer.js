import { React } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <Container fluid className="footer">
            <Container>
                <Row className="ms-auto menu-elements pb-3 pt-2">
                    <Col align="left">
                        <span className="footer-copyright-note">&copy; {1900+new Date().getYear()} YG Dev</span>
                    </Col>
                    <Col align="right">
                        <a href="https://www.example.com" target="_blank" className="portfolio-hyperlink"><FaGithubSquare/></a>
                        <a href="https://www.example.com" target="_blank" className="portfolio-hyperlink"><FaLinkedin/></a>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Footer;