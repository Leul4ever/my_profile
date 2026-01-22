import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
// import { sendEmail } from "../../services/emailService"; // Not used anymore

function ContactForm() {
  return (
    <div className="contact-form">
      {/* 
        FORMSPREE INTEGRATION 
        Replace 'YOUR_FORMSPREE_ID' with the code you get from https://formspree.io/ 
        Example: action="https://formspree.io/f/xbldwlgj"
      */}
      <Form
        action={process.env.REACT_APP_FORMSPREE_URL || "https://formspree.io/f/YOUR_FORM_ID"}
        method="POST"
        encType="multipart/form-data"
      >
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="contactName">
              <Form.Label>
                Name <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3" controlId="contactEmail">
              <Form.Label>
                Email <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="contactSubject">
          <Form.Label>
            Subject <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            type="text"
            name="subject"
            placeholder="Enter subject"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="contactMessage">
          <Form.Label>
            Message <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            rows={5}
            placeholder="Enter your message"
            required
          />
        </Form.Group>

        <div className="text-center">
          <Button
            variant="primary"
            type="submit"
            className="contact-submit-btn"
          >
            Send Message
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default ContactForm;