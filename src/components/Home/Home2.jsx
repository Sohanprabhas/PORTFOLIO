import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import { Tilt } from 'react-tilt';
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm Katari Sohan Prabhas, a passionate developer from India currently pursuing a B.Tech in Computer Science and Engineering with a specialization in the Internet of Things.
              <br />
              <br />I'm skilled in:
              <i>
                <b className="purple"> Python, JavaScript, HTML, CSS </b>
              </i>
              and currently exploring frameworks like
              <i>
                <b className="purple"> React.js</b>
              </i>
              .
              <br />
              <br />
              My interests lie in:
              <i>
                <b className="purple"> Web Development, AI/ML, and Cloud Computing</b>
              </i>
              . I've built full-stack applications using tools like
              <b className="purple"> FastAPI</b> and
              <b className="purple"> Node.js</b>.
              <br />
              <br />
              I enjoy solving real-world problems through code, and I'm always up for learning new technologies and building meaningful projects.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt options={{ max: 25, scale: 1.05, speed: 300 }}>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Sohanprabhas"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/sohanprabhas1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sohanprabhas/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/prabha_s.20/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;