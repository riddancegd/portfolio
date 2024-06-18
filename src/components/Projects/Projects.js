import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import guardiaEscolar from "../../Assets/Projects/guardiaEscolar.png";
import cscGo from "../../Assets/Projects/cscGo.png";
import rickandmorty from "../../Assets/Projects/rickandmorty.png";

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

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cscGo}
              isBlog={false}
              showGitHubButton={false}
              title="CSC Go"
              description="An app that allows users of CSC laundry machines to pay for their laundry and monitor the status of it. Also, it has other functions like a digital wallet, mobile inbox and a referral system to earn free laundry cycles"
              /*ghLink="https://github.com/soumyajit4419/Chatify"*/
              demoLink="https://play.google.com/store/apps/details?id=com.cscsw.cscgo&hl=en"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={guardiaEscolar}
              isBlog={false}
              showGitHubButton={false}
              title="Guardia Escolar"
              description="This project consisted of mobile apps for android and iOS, a backend and a web application for the school. 
              The objective of the system was to enable the parents and teachers to see the times of entrance and exit of the students, 
              along with many other educational functions like assign and show grades to the parents, etc."
              /*ghLink="https://github.com/soumyajit4419/Chatify"*/
              demoLink="https://play.google.com/store/apps/details?id=com.schoolguardian.school_guardian_final&hl=es_PA&gl=US"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rickandmorty}
              isBlog={false}
              showGitHubButton={true}
              title="Rick & Morty Compose"
              description="An open source andoid app that shows rick and morty characters along with their description. Made using jetpack compose, MVVM, Dependency Injection and other tools along with good android development practices"
              ghLink="https://github.com/riddancegd/rickandmorty-compose"
              // demoLink="https://play.google.com/store/apps/details?id=com.schoolguardian.school_guardian_final&hl=es_PA&gl=US"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
