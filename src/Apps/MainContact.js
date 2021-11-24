import { Container, Row, Col, Button } from 'react-bootstrap';

function MainContact (props) {
    return (
        <Container fluid id={props.id} className="main-contact">
            <Container>
                <Row>
                    <Col sm={8} align="right">
                        <h2>Contact us at email@example.com</h2>
                        <Button><a href="mailto:example@com.com" className="button-link">Contact us</a></Button>
                    </Col>
                    <Col sm={2} align="left">place for icons</Col>
                </Row>
            </Container>
        </Container>
    )
}

export default MainContact;