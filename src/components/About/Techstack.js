import { View } from "@react-pdf/renderer";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Next } from "react-bootstrap/esm/PageItem";
import { SiDocker, SiNextdotjs, SiJenkins, SiGithubactions, SiSpring, SiSpringsecurity, SiHibernate } from "react-icons/si";
import { DiGithub, DiMongodb } from "react-icons/di";

import { FaDatabase } from "react-icons/fa";
import { GiServerRack } from "react-icons/gi";

import {
  DiJavascript1,
  DiReact,
  DiPhp,
  DiBootstrap,
  DiGit,
  DiLaravel,
  DiPostgresql,
  DiJava,
} from "react-icons/di";
import {
  SiTailwindcss,
  SiMysql,
  SiSpringboot,
} from "react-icons/si";
import {  TbBrandHtml5, TbBrandCss3, TbBlade } from "react-icons/tb";

function Techstack() {
  const [hoveredSkill, setHoveredSkill] = useState("");

  const skills = [
    { Icon: DiJava, name: "Java" },
    { Icon: SiSpringboot, name: "SpringBoot" },
    { Icon: DiJavascript1, name: "JavaScript" },
    { Icon: DiReact, name: "React" },
    { Icon: TbBrandHtml5, name: "Html" },
    { Icon: TbBrandCss3, name: "css" },
    { Icon: DiPhp, name: "PHP" },
    { Icon: DiLaravel, name: "Laravel" },
    { Icon: SiSpring, name: "Spring" },
    { Icon: SiTailwindcss, name: "Tailwind CSS" },
    { Icon: DiBootstrap, name: "Bootstrap" },
    { Icon: TbBlade, name: "Blade" },
    { Icon: SiNextdotjs, name: "Next.js" },
    { Icon: SiSpringsecurity, name: "Springsecurity" },
    { Icon: SiHibernate, name: "Hibernate" },
    { Icon: FaDatabase, name: "JPA" },
  { Icon: GiServerRack, name: "JEE" },



    

    { Icon: DiPostgresql, name: "Postgresql" },
    { Icon: SiMysql, name: "MySQL" },
    { Icon: DiMongodb, name: "Mongodb" },

      { Icon: DiGit, name: "Git" },
      { Icon: SiDocker, name: "Docker" },
    { Icon: SiJenkins, name: "Jenkins" },
    { Icon: SiGithubactions, name: "Githubactions" }
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {skills.map(({ Icon, name }) => (
        <Col
          key={name}
          xs={4}
          md={2}
          className="tech-icons"
          onMouseEnter={() => setHoveredSkill(name)}
          onMouseLeave={() => setHoveredSkill("")}
          style={{ position: "relative", textAlign: "center" }}
        >
          {hoveredSkill === name && (
            <div className="skill-name">{name}</div>
          )}
          <Icon />
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
