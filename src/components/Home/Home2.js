import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import myImg from "../../Assets/me.JPG";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import './Home.css';
function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "3em", fontWeight: "bold" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body" style={{ fontSize: "1.2em", lineHeight: "1.8em" }}>
              I am a dedicated full-stack developer with strong skills in building modern and interactive web applications. 
              I specialize in back-end technologies like{" "}
              <b className="purple">Java</b>, <b className="purple">Spring Boot</b>, and <b className="purple">Laravel</b>.
              <br />
              <br />
              On the front-end, I work with frameworks such as{" "}
              <b className="purple">React</b>, <b className="purple">Angular</b>, and{" "}
              <b className="purple">Tailwind CSS</b> to create user-friendly interfaces. 
              My experience includes managing databases with <b className="purple">PostgreSQL</b>, <b className="purple">MongoDB</b>, and{" "}
              <b className="purple">MySQL</b>.
              <br />
              <br />
              I am also experienced in leveraging tools like <b className="purple">Git</b>,{" "}
              <b className="purple">Docker</b>, and Agile methodologies to deliver scalable, robust applications. 
              Solving challenges with clean and efficient code is my primary goal.
            </p>
            
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid rounded-circle bordered-image" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 style={{ fontSize: "2em", fontWeight: "bold" }}>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a href="https://github.com/erradaoumaimaa" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a href="https://www.linkedin.com/in/oumaima-errada-94308219b/" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a href="mailto:erradaoumaima@gmail.com" className="icon-colour home-social-icons">
                  <AiOutlineMail />
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

