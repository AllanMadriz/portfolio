import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../images/spacecat4.png";

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} />
          </Col>
          <Col md={6} className="text-center aform">
            <h2>Get In Touch</h2>
            <form className="skill-bx mt-3">
              <Row>
                <Col sm={12} className="px-1 text-center">
                  <h4>Name</h4>
                  <input
                    placeholder="Allan Madriz Zúñiga"
                    className="text-center"
                    disabled
                  />
                </Col>
                <Col sm={12} className="px-1 text-center mt-5">
                  <h4>Email</h4>
                  <input
                    placeholder="madriza22@gmail.com"
                    className="text-center"
                    disabled
                  />
                </Col>
                <Col sm={12} className="px-1 text-center mt-5">
                  <h4>Phone Number</h4>
                  <input
                    placeholder="+506 6252-9134"
                    className="text-center"
                    disabled
                  />
                </Col>
                <Col sm={12} className="px-1 text-center mt-5">
                  <h4>Address</h4>
                  <input
                    placeholder="Zaragoza, Palmares, Costa Rica"
                    className="text-center"
                    disabled
                  />
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
