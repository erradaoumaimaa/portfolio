import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import easyCarImage from "../../Assets/635ba41f1619b03ab3c084173a7e0e9e.png"; 
import cinemaManagerImage from "../../Assets/88d5b8e0a3cccc0637bbff0d4f909b3b.png";
import insuranceImage from "../../Assets/insurance_image.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* EasyCar Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={easyCarImage}
              isBlog={false}
              title="EasyCar"
              description="A robust online car rental platform that offers users an intuitive, secure, and seamless booking experience. Developed with Laravel, Blade, and AJAX, the platform allows users to easily browse, schedule, and reserve vehicles. With its responsive design, EasyCar ensures efficient management for both customers and administrators."
              ghLink="https://code-kampfer.github.io/easyCar/"
            />
          </Col>

          {/* CinéStar Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cinemaManagerImage}
              isBlog={false}
              title="CinéStar"
              description="A cinema booking platform developed with Laravel, PHP, and SQL, allowing users to explore movies, book tickets, and manage reservations. Administrators can control the entire system efficiently. Secure registration, social login, and ticket management with an interactive seat selection."
              ghLink="https://github.com/Douaa1819/CineStar.git"
            />
          </Col>

          {/* Insurance Contract Management Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={insuranceImage} 
              isBlog={false}
              title="Insurance Contract Management"
              description="An application for managing insurance contracts. Allows users to request quotes, subscribe to policies, and manage their automobile, home, and health insurance contracts. Developed with Java, Spring, and JPA, with secure user authentication and real-time contract management."
              ghLink="https://github.com/Douaa1819/Assure-Manager.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
