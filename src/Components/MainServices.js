import { Container, Row, Col } from 'react-bootstrap';
import { FaHtml5, FaFlask, FaReact, FaRegThumbsUp } from 'react-icons/fa';


function MainServices () {
    return (
        <Container fluid className="main-services">
            <Container>
                <h2 className="call-heading">Our services</h2>
                <Row>
                    <Col align="center">
                        <div className="icon-box"  style={{backgroundColor: "#ff7043", boxShadow: "0 0 0 2px #ff7043 inset"}}><FaHtml5 size="4em"/></div>
                        <h3 className="service-title">Lorem ipsum dolor sit amet</h3>
                        <p className="service-text">Vivamus malesuada massa est. Cras malesuada venenatis turpis non ultricies. Maecenas at lectus sem. Donec quis urna sit amet nibh tempus lobortis.</p>
                    </Col>
                    <Col align="center">
                    <div className="icon-box"  style={{backgroundColor: "#B5B12B", boxShadow: "0 0 0 2px #B5B12B inset"}}><FaFlask size="4em"/></div>
                        <h3 className="service-title">Consectetur adipiscing elit</h3>
                        <p className="service-text">Proin placerat, dolor a posuere rhoncus, magna enim gravida nunc, fermentum pretium erat elit sed est. Integer accumsan tortor ut euismod elementum. Nullam ullamcorper justo eget leo porta, malesuada luctus magna condimentum. Curabitur egestas vehicula arcu eu ultricies. Etiam pharetra faucibus tristique</p>
                    </Col>
                </Row>
                <Row>
                    <Col align="center">
                        <div className="icon-box"  style={{backgroundColor: "#77e637", boxShadow: "0 0 0 2px #77e637 inset"}}><FaReact size="4em"/></div>
                        <h3 className="service-title"> Cras vitae ligula ut orci efficitur consequat vitae et metus</h3>
                        <p className="service-text">Nam sed ipsum convallis, placerat orci sed, volutpat urna. Maecenas lacus nulla, rhoncus vitae convallis vitae, venenatis ac purus. Vestibulum malesuada massa est, sed venenatis odio ultricies non. Integer vel erat rhoncus, porta sem a, efficitur risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor, elit non pharetra consectetur, elit libero mollis tortor, ac viverra sem massa non elit.</p>
                    </Col>
                    <Col align="center">
                    <div className="icon-box"  style={{backgroundColor: "#FF00FF", boxShadow: "0 0 0 2px #FF00FF inset"}}><FaRegThumbsUp size="4em"/></div>
                        <h3 className="service-title">Cam non tortor egestas, facilisis libero id, porta augue. Integer lorem purus</h3>
                        <p className="service-text">Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean vehicula mattis hendrerit. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default MainServices;