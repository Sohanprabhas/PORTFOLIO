import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Katari Sohan Prabhas </span>
            from <span className="purple">Andhra Pradesh, India.</span>
            <br />
            I am currently pursuing my B.Tech in Computer Science and Engineering (IoT specialization) and will complete my degree in April 2026.
            <br />
            I have completed internships and projects related to web development, cloud computing, and AI-based microservices.
            <br />
            I am passionate about building efficient, scalable, and smart solutions that blend Cloud, Web, and IoT technologies.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring Tech Tools and Frameworks
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Mobile Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Tech Videos & Interviews
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code with purpose, build for impact!"{" "}
          </p>
          <footer className="blockquote-footer">Sohan Prabhas</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
