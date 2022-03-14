import "./Hero.css";
import { Container, Row, Col } from "reactstrap";
import hero from "../images/studio.png";

function Hero() {
    return (
        <header>
            <Container>
                <Row>
                    <Col>
                        <h1 className="hero--header">Next Restock</h1>
                        <p className="hero--text">Join our mailing list and never miss shop restocks!</p>
                    </Col>
                    <Col>
                        <img src={hero} className="hero--photo"></img>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Hero;