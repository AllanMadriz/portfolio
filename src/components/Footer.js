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
                        <a href="https://www.linkedin.com/in/allan-madriz-z%C3%BA%C3%B1iga-59943021b/"><img src={navIcon1} /></a>
                        <a href="https://www.facebook.com/allanalberto.madrizzuniga.1/"><img src={navIcon2} /></a>
                        <a href="https://www.instagram.com/allanmadrizzu/"><img src={navIcon3} /></a>
                   </div>
                   <p>CopyRight 2022. All Right Reserved. Allan Madriz Zúñiga</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer