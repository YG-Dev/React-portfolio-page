import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

function MainContact (props) {
    return (
        <Container fluid id={props.id} className="main-contact pb-5 pt-4">
            <Container>
                <Row>
                    <Col sm={2}></Col>
                    <Col sm={6} align="center"  className="mr-4">
                        <h3 className="portfolio-title"><a href="mailto:example@com.com" className="portfolio-hyperlink">Contact us at email@example.com</a></h3>
                        <Button size="lg" style={{ backgroundColour: "red" }}><a href="mailto:example@com.com" className="button-link">Contact us</a></Button>
                    </Col>
                    <Col sm={4} align="left" className="mt-3">
                        <Row><a href="https://www.example.com" target="_blank" rel="noreferrer" className="portfolio-hyperlink"><FaGithubSquare/> Check us on Github</a></Row>
                        <Row><a href="https://www.example.com" target="_blank" rel="noreferrer" className="portfolio-hyperlink"><FaLinkedin/> Check us on Linkedin</a></Row>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default MainContact;