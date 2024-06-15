import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jhibram </span>
            from <span className="purple"> México.</span>
            <br />
            I am a software developer with a taste for Android development 📱
            <br />
            I love the feeling of solving problems with tools I learn every day 🧰
            <br />
            <br />
            Apart from coding, some other activities I love are:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Nintendo Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Running
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking (and eating, mainly)
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Detachment is the art of enjoying something while always being open to the possibility of losing it someday"{" "}
          </p>
          <footer className="blockquote-footer">John B. Bejo</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
