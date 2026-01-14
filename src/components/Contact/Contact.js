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
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Get In <strong className="purple">Touch </strong>
              </h1>
              <p style={{ textAlign: "center" }}>
                Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.
                <br />
                Simply fill the below form and send me an email.
              </p>
            </Col>
          </Row>
          
          <Row style={{ justifyContent: "center", paddingTop: "20px" }}>
            <Col md={8} lg={6} className="contact-form-col">
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Contact;