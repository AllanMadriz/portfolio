import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../images/spacecat3.png";

const Education = () => {
  return (
    <section className="education" id="education">
      <Container>
        <Row className="align-items-center text-center">
          <Col md={12}>
            <h1>Education</h1>
          </Col>
          <Col md={3} className="mt-5">
            <span className="dates">2020 - In progress</span>
            <h4 className="mt-3">Universidad Castro Carazo</h4>
          </Col>
          <Col md={9} className="mt-5">
            <h4 className="tittles">
              Bachelor's Degree In Software Engineering
            </h4>
          </Col>

          <Col md={3} className="mt-5">
            <span className="dates">2021 - 2022</span>
            <h4 className="mt-3">Instituto Nacional de Aprendizaje</h4>
          </Col>
          <Col md={9} className="mt-5">
            <h4 className="tittles">Programmer of Computer Applications</h4>
          </Col>
        </Row>

        <div className="separator">
          <Col className="education-cat">
            <img src={headerImg} alt="Header Img" />
          </Col>
        </div>

        <Row className="align-items-center text-center mt-5">
          <Col md={12}>
            <h1>Work Experience</h1>
          </Col>
          <Col md={3} className="mt-5">
            <span className="dates">2022 - Current</span>
            <h4 className="mt-3">Roc Capital - Roc360</h4>
            <h5 className="job">Software Developer</h5>
          </Col>
          <Col md={9} className="mt-5">
            <p>
              Front end development and Backend development with the RocTech
              Team
            </p>
            <p>Technologies used</p>
            <ul className="techlist">
              <li className="techlist-inline">
                <span className="badge">Java</span>
              </li>
              <li className="techlist-inline">
                <span className="badge">HTML5</span>
              </li>
              <li className="techlist-inline">
                <span className="badge">CSS3</span>
              </li>
              <li className="techlist-inline">
                <span className="badge">JavaScript</span>
              </li>
              <li className="techlist-inline">
                <span className="badge">React</span>
              </li>
              <li className="techlist-inline">
                <span className="badge">TypeScript</span>
              </li>
              <li className="techlist-inline">
                <span className="badge">Jira</span>
              </li>
              <li className="techlist-inline">
                <span className="badge">Git</span>
              </li>
              <li className="techlist-inline">
                <span className="badge">Material Ui</span>
              </li>
              <li className="techlist-inline">
                <span className="badge">Less</span>
              </li>
              <li className="techlist-inline">
                <span className="badge">Maven</span>
              </li>
              <li className="techlist-inline">
                <span className="badge">Gradle</span>
              </li>
              <li className="techlist-inline">
                <span className="badge">PostgreSQL</span>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Education;
