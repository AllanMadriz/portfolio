import { Container, Row, Col } from "react-bootstrap";
import logo from "../images/madlogo.png"
import navIcon1 from "../images/nav-icon1.svg";
import navIcon2 from "../images/nav-icon2.svg";
import navIcon3 from "../images/nav-icon3.svg";

const Footer = () => {
  return (
    <footer className="footer">
        <Container>
            <Row className="align-items-center">
                <Col sm={6}>
                    <img src={logo} alt="logo"/>
                </Col>
                <Col sm={6} className="text-center text-sm-end">
                   <div className="social-icon">
                        <a href=""><img src={navIcon1} /></a>
                        <a href=""><img src={navIcon2} /></a>
                        <a href=""><img src={navIcon3} /></a>
                   </div>
                   <p>CopyRight 2022. All Right Reserved. Allan Madriz Zúñiga</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer