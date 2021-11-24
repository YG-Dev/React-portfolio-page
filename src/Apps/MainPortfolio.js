import React, { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';

import Portfolio1 from '../Assets/portfolio_1.PNG';
//import Portfolio2 from '../Assets/portfolio_2.PNG';
//import Portfolio3 from '../Assets/portfolio_3.PNG';
import Bingo1 from '../Assets/bingo_1.PNG';
//import Bingo2 from '../Assets/bingo_2.PNG';
//import Bingo3 from '../Assets/bingo_3.PNG';


function MainPortfolio (props) {
    const [show, setShow] = useState(false);
    const [image, setImage] = useState(Portfolio1);

    const handleClose = () => setShow(false);
    const handleShow = (img) => {
        setImage(img);
        setShow(true);
    }

    return (
        <>
            <Modal show={show} onHide={handleClose} size="xl" centered>
            <img src={image}/>
            </Modal>
            <Container fluid className="main-portfolio" id={props.id}>
                <Container>
                    <Row className="pt-5">
                        <Col align="center">
                            <img src={Portfolio1} style={{ height: "15em" }} className="img-border img-portfolio" onClick={() => handleShow(Portfolio1)}/>
                        </Col>
                        <Col>
                            <h3 className="portfolio-title"><a href="#" className="portfolio-hyperlink">Lorem ipsum dolor sit amet</a></h3>
                            <p className="portfolio-text">Vivamus malesuada massa est. Cras malesuada venenatis turpis non ultricies. Maecenas at lectus sem. Donec quis urna sit amet nibh tempus lobortis.</p>
                        </Col>
                    </Row>
                    <Row className="pt-5 pb-5">
                        <Col align="center">
                            <img src={Bingo1} style={{ height: "15em" }} className="img-border img-portfolio" onClick={() => handleShow(Bingo1)}/>
                        </Col>
                        <Col>
                            <h3 className="portfolio-title">Consectetur adipiscing elit</h3>
                            <p className="portfolio-text">Proin placerat, dolor a posuere rhoncus, magna enim gravida nunc, fermentum pretium erat elit sed est. Integer accumsan tortor ut euismod elementum. Nullam ullamcorper justo eget leo porta, malesuada luctus magna condimentum. Curabitur egestas vehicula arcu eu ultricies. Etiam pharetra faucibus tristique</p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default MainPortfolio;