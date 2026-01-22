import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <section>
      <Container fluid className="contact-section" id="contact">
        <Particle />
        <Container className="contact-content">
          <Row>
            {/* Left Column: Contact Info */}
            <Col md={6} className="contact-info-col" style={{ textAlign: "left", paddingTop: "50px" }}>
              <div className="contact-info-header">
                <span className="purple" style={{ fontSize: "3em" }}>📧</span>
                <h1 style={{ fontSize: "3.5em", fontWeight: "bold", paddingTop: "10px" }}>
                  Contact <span className="purple">Me</span>
                </h1>
                <p className="contact-desc" style={{ fontSize: "1.2em", paddingTop: "10px", paddingBottom: "30px", opacity: "0.9" }}>
                  The typical response time is up to 24 hours.
                </p>

                <div className="contact-detail">
                  <h4 style={{ fontWeight: "bold", fontSize: "1.3em" }}>Email Reference</h4>
                  <p style={{ fontSize: "1.1em", color: "#c770f0" }}>
                    leul0593@gmail.com
                  </p>
                </div>
              </div>
            </Col>

            {/* Right Column: Contact Form */}
            <Col md={6} className="contact-form-col">
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Contact;