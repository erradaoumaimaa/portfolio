import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am <span className="purple">Oumaima Errada</span> from 
            <span className="purple"> Safi, Morocco.</span>
            <br />
            I am a full-stack developer with experience in building scalable applications using 
            <span className="purple"> Java, Spring Boot, Laravel, React,</span> and 
            <span className="purple"> Angular.</span>
            <br />
            I enjoy solving complex problems and designing clean, user-focused solutions.
            <br />
            <br />
            When I'm not coding, I engage in activities that inspire me and improve my creativity.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Collaborating on Open Source Projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Skills
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)", fontStyle: "italic" }}>
            "Code not just to solve problems, but to build something meaningful."
          </p>
          <footer className="blockquote-footer">Oumaima Errada</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
