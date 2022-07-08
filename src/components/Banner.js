import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../images/spacecat1.png";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Software Developer.", "Geek.", "Rock Lover"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(400);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <h1>{`Allan Madriz,`}</h1>
            <h2>
              {`I'm a `} <span className="wrap">{text}</span>
            </h2>
            <p>
              I'm a Costa Rican-based Software Developer, who likes to learn new programming languages and investigate something new about technology every day.
              </p>
              <p>
              Currently, I'm a Software Developer at <a href="https://www.roc360.com/" target="_blank">Roc360</a> with differents task on the BackEnd and FrontEnd.
              </p>
              <p>
              A person who enjoys the music, video games, movies and the great world of technology, 
              also a person who enjoy travel and know new places and new people.
              </p>
              <a className="btn-cv" href="https://drive.google.com/uc?id=1WVe5NX-Ju0b3vVHBl9GU6gS07w4DYuQO&export=download">Download CV</a>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
