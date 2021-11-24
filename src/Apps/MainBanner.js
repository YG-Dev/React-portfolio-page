import { Container, Button } from 'react-bootstrap';

function MainBanner (props) {
    return (
        <Container fluid className="banner" id={props.id}>
            <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0353A4" fillOpacity="1" d="M0,192L40,186.7C80,181,160,171,240,176C320,181,400,203,480,202.7C560,203,640,181,720,165.3C800,149,880,139,960,154.7C1040,171,1120,213,1200,245.3C1280,277,1360,299,1400,309.3L1440,320L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
            <Container align="center">
                <h1 className="company-title">Company</h1>
                <h2 className="company-quote">Put motivational quote <strong>here</strong></h2>
                <Button size="lg"><a href="mailto:example@com.com" className="button-link">Contact us</a></Button>
            </Container>
        </Container>
    )
}

export default MainBanner;