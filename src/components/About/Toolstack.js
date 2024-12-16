import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

import {
  SiVisualstudiocode,
  SiPostman,
  SiUbuntu,
  SiGithub,
  SiGithubpages,
  SiXampp,
  SiFigma,
  SiJira,
  SiCanva,
  SiPhpmyadmin,
  SiIntellijidea,
  SiApachetomcat,
  SiLaragon,
  SiJunit5,
  SiApachemaven,

} from "react-icons/si";

import './About.css'

function Toolstack() {
  const [hoveredTool, setHoveredTool] = useState("");

  const tools = [
    { Icon: SiJira, name: "Jira" },
    { Icon: SiPostman, name: "Postman" },
    { Icon: SiGithub, name: "GitHub" },
    { Icon: SiXampp, name: "Xampp" },
    { Icon: SiApachetomcat, name: "Tomcat" },
    { Icon: SiJunit5, name: "Junit5" },
    { Icon: SiApachemaven, name: "Maven" },
    { Icon: SiApachetomcat, name: "Tomcat" },
    { Icon: SiLaragon, name: "Laragon" },
    { Icon: SiUbuntu, name: "Ubuntu" },
    { Icon: SiVisualstudiocode, name: "Visual Studio Code" },

    { Icon: SiFigma, name: "Figma" },
   { Icon: SiIntellijidea, name: "Intellijidea" },
   //{ Icon: SiCanva, name: "Canva" },
  ];
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map(({ Icon, name }) => (
        <Col
          key={name}
          xs={4}
          md={2}
          className="tech-icons"
          onMouseEnter={() => setHoveredTool(name)}
          onMouseLeave={() => setHoveredTool("")}
          style={{ position: "relative", textAlign: "start" }}
        >
          {hoveredTool === name && (
            <div className="skill-name">{name}</div>
          )}
          <Icon />
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
