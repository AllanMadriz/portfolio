import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Java from "../images/java.png";
import post from "../images/postgresql.webp";
import mysql from "../images/mysql.png";
import sqlserver from "../images/sqlserver.png";
import js from "../images/js.png";
import css from "../images/css.png";
import html from "../images/html.webp";
import csharp from "../images/csharp.png";
import react from "../images/react.png";
import node from "../images/node.webp";
import php from "../images/php.png";
import git from "../images/git.png";
import boot from "../images/boots.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Professional Skills</h2>
              <p>
                This are some of my Professional Skills that I continous
                learning something new about these technologies every day.
              </p>
              <p>
                My mainly Soft Skills are Time Management, Problem Solving and
                Communication and I'm always looking to improve myself as person.
              </p>
              <p>
                I'm always open to learn new technologies and frameworks that 
                are required in the area and become a better developer.
              </p>
              <p>
                If I can help you with some of this skills let me know.
              </p>
              <p>It would be a pleasure to work with you!!</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                className="skill-slider"
              >
                <div className="item">
                  <img src={post} alt="Image" />
                  <h5>PostgreSQL</h5>
                </div>
                <div className="item">
                  <img src={mysql} alt="Image" />
                  <h5>MySQL</h5>
                </div>
                <div className="item">
                  <img src={sqlserver} alt="Image" />
                  <h5>SQL Server</h5>
                </div>
                <div className="item">
                  <img src={html} alt="Image" />
                  <h5>HTML5</h5>
                </div>
                <div className="item">
                  <img src={css} alt="Image" />
                  <h5>CSS3</h5>
                </div>
                <div className="item">
                  <img src={js} alt="Image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={react} alt="Image" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={node} alt="Image" />
                  <h5>Node JS</h5>
                </div>
                <div className="item">
                  <img src={Java} alt="Image" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src={csharp} alt="Image" />
                  <h5>C#</h5>
                </div>
                <div className="item">
                  <img src={php} alt="Image" />
                  <h5>PHP</h5>
                </div>
                <div className="item">
                  <img src={git} alt="Image" />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img src={boot} alt="Image" />
                  <h5>Bootstrap</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
