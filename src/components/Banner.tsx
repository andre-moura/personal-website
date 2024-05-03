import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';
import headerImg from "../assets/images/cursor.png";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(100); // Adjusted delta value for faster transition
  const toRotate = ["a Web Developer", "a Software Engineer", "an UI/UX Designer"];
  const period = 400;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? text.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
  
    setText(updatedText);
  
    if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum((loopNum + 1) % toRotate.length);
      setDelta(period);
    } else if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period * 2); // Adjusted delta value for slower deletion
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1 className='title-banner'>{`Hi! I'm Andre`} <span className="txt-rotate" data-rotate={toRotate}><span className="wrap">{text}</span></span></h1>
                  <p>I am a computer science student. I find coding a lot of fun, I'm curious and I always enjoy learning and experimenting with new technologies.</p>
                  <a href='https://www.linkedin.com/in/andre-moura-tech' target="_blank">
                    <button>Let’s Connect <ArrowRightCircle size={25} /></button>
                  </a>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" className='header-img' />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
