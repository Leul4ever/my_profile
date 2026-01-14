import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Sorawak Abeya</span>{" "}
            from <span className="purple">Addis Ababa, Ethiopia</span>.
            <br />
            I’m {" "}
             <span className="purple">focused</span> on{" "}
              building clean, scalable, and practical applications{" "}
            <br />I hold a Bachelor’s degree in {" "}
            <span className="purple">Software Engineering</span> from{" "}
            <span className="purple">AMU</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing chess ♟️
            </li>
            <li className="about-activity">
              <ImPointRight /> Building side projects 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new tech 🛠️
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code with purpose. Learn without limits!"{" "}
          </p>
          <footer className="blockquote-footer">Sorawak</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
