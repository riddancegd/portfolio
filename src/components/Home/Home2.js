import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/cv-trimmed.jpg";
import Tilt from "react-parallax-tilt";
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
            Since the first moment I held a rectangle with a screen in my hand I fell in love with it, and i still am to this day 📲
              <br />
              <br />My main stack consists of
              <i>
                <b className="purple"> Kotlin, XML, Compose and Java. </b>
              </i>
              <br />But I have also worked with
              <i>
                <b className="purple"> Html, Css, Php, Javascript and MySQL. </b>
              </i>
              <br />
              <br />
              I'm always looking to build new exciting projects on&nbsp;
              <i>
                <b className="purple">Android</b> 
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing tools
              for other <b className="purple">Handheld devices</b> 
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
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
                  href="https://github.com/riddancegd"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jhibram/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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
