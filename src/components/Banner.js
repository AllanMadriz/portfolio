import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              nulla lacus, accumsan vitae nisl vitae, accumsan vulputate odio.
              Pellentesque pellentesque ultrices mollis. Integer feugiat posuere
              turpis vitae finibus. Fusce tempus lacus libero, eget venenatis
              libero posuere sed. Etiam et purus leo. Nulla cursus ex sit amet
              nisi vestibulum eleifend. Nulla consectetur ut metus ut
              ullamcorper. Nunc aliquam odio nec ante fringilla, ac tincidunt
              quam imperdiet. Sed efficitur sed lectus sit amet congue. Duis at
              metus commodo, lacinia metus ac, condimentum urna. Sed tempor vel
              risus et fringilla.
            </p>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
