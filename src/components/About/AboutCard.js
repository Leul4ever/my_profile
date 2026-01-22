import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left", fontWeight: "400", lineHeight: "1.8" }}>
            Hi everyone! I’m <span className="purple">Leul Abera</span>.
            <br />
            <br />
            I’m a Software Engineer with a strong focus on data analytics, artificial intelligence, and building practical, scalable software systems. I enjoy working across the full lifecycle of software — from data collection and analysis to backend services and user-facing applications.
            <br />
            <br />
            I hold a Bachelor’s degree in <span className="purple">Software Engineering</span> from <span className="purple">Arba Minch University</span>.
            <br />
            <br />
            Outside of formal work, I stay curious and hands-on. I enjoy activities that sharpen my thinking and keep me learning:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing chess — improving strategic and analytical thinking
            </li>
            <li className="about-activity">
              <ImPointRight /> Building personal and real-world projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new technologies, especially in data, AI, and analytics
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code with purpose. Learn without limits!"{" "}
          </p>
          <footer className="blockquote-footer">Leul</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
