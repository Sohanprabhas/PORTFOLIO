import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import resumeImg from "../../Assets/Projects/Resume.png";
import weatherImg from "../../Assets/Projects/weather.png";
import calculatorImg from "../../Assets/Projects/calculator.png";
import portfolioImg from "../../Assets/Projects/portfolio.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }} className="g-4">
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={resumeImg}
              isBlog={false}
              title="Resume Scoring Microservice"
              description="Developed a Resume Scoring Microservice using FastAPI and scikit-learn. It evaluates resumes based on job-specific skills using TF-IDF techniques and returns real-time match scores. Integrated Docker for scalable deployment."
              ghLink="https://github.com/Sohanprabhas/resume-scorer"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={weatherImg}
              isBlog={false}
              title="Real-Time Weather App"
              description="Built a JavaScript-based web app that fetches live weather updates using the OpenWeatherMap API. Implemented location-based weather search with a clean UI and responsive design. Built as part of a collaborative team project."
              ghLink="https://github.com/Sohanprabhas/weather/tree/main/weather"
            />
          </Col>
          <Col md={6} className="project-card">
          <ProjectCard
          imgPath={calculatorImg}
          isBlog={false}
          title="Calculator"
          description="A simple and interactive calculator web app built using JavaScript and React. Features include basic arithmetic operations, a clean user interface, and responsive design for seamless use across devices."
          ghLink="https://github.com/Sohanprabhas/CALCULATAOR"
         />
        </Col>

        <Col md={6} className="project-card">
          <ProjectCard
          imgPath={portfolioImg}
          isBlog={false}
          title="Portfolio"
          description="A personal portfolio website built with React.js and Bootstrap showcasing my projects, skills, and resume. Fully responsive and deployed on GitHub Pages."
          ghLink="https://github.com/Sohanprabhas/PORTFOLIO"
         />
        </Col>
        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;