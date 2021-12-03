import { Container, Row, Col, Button } from 'react-bootstrap';

function MainContact (props) {
    return (
        <Container fluid id={props.id} className="main-contact">
            <Container>
                <Row>
                    <Col sm={2}></Col>
                    <Col sm={6} align="center"  className="mr-4">
                        <h3 className="portfolio-title"><a href="mailto:example@com.com" className="portfolio-hyperlink">Contact us at email@example.com</a></h3>
                        <Button size="lg" style={{ backgroundColour: "red" }}><a href="mailto:example@com.com" className="button-link">Contact us</a></Button>
                    </Col>
                    <Col sm={2} align="left">place for icons</Col>
                </Row>
            </Container>
        </Container>
    )
}

export default MainContact;