import React, { useState, useCallback, useRef } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { sendEmail } from "../../services/emailService";

function ContactForm() {
  // Form data state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  // Validation state
  const [validation, setValidation] = useState({
    name: { isValid: true, message: "" },
    email: { isValid: true, message: "" },
    subject: { isValid: true, message: "" },
    message: { isValid: true, message: "" }
  });

  // Submission state
  const [submissionState, setSubmissionState] = useState("idle"); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState("");
  
  // Ref for focus management
  const nameInputRef = useRef(null);

  // Validate individual field
  const validateField = useCallback((field, value) => {
    let isValid = true;
    let message = "";

    switch (field) {
      case "name":
        if (!value.trim()) {
          isValid = false;
          message = "Name is required";
        } else if (value.trim().length < 2) {
          isValid = false;
          message = "Name must be at least 2 characters";
        } else if (value.trim().length > 50) {
          isValid = false;
          message = "Name must be less than 50 characters";
        } else if (!/^[a-zA-Z\s]+$/.test(value.trim())) {
          isValid = false;
          message = "Name can only contain letters and spaces";
        }
        break;

      case "email":
        if (!value.trim()) {
          isValid = false;
          message = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          isValid = false;
          message = "Please enter a valid email address";
        }
        break;

      case "subject":
        if (!value.trim()) {
          isValid = false;
          message = "Subject is required";
        } else if (value.trim().length < 5) {
          isValid = false;
          message = "Subject must be at least 5 characters";
        } else if (value.trim().length > 100) {
          isValid = false;
          message = "Subject must be less than 100 characters";
        }
        break;

      case "message":
        if (!value.trim()) {
          isValid = false;
          message = "Message is required";
        } else if (value.trim().length < 10) {
          isValid = false;
          message = "Message must be at least 10 characters";
        } else if (value.trim().length > 1000) {
          isValid = false;
          message = "Message must be less than 1000 characters";
        }
        break;

      default:
        break;
    }

    setValidation(prev => ({
      ...prev,
      [field]: { isValid, message }
    }));

    return { isValid, message };
  }, []);

  // Handle input changes
  const handleInputChange = useCallback((field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Trigger validation for the field
    validateField(field, value);
  }, [validateField]);

  // Check form validity without triggering state updates (for render)
  const checkFormValidity = useCallback(() => {
    const nameValid = formData.name.trim().length >= 2 && 
                      formData.name.trim().length <= 50 && 
                      /^[a-zA-Z\s]+$/.test(formData.name.trim());
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim());
    const subjectValid = formData.subject.trim().length >= 5 && 
                         formData.subject.trim().length <= 100;
    const messageValid = formData.message.trim().length >= 10 && 
                         formData.message.trim().length <= 1000;
    
    return nameValid && emailValid && subjectValid && messageValid;
  }, [formData]);

  // Validate entire form (triggers state updates)
  const validateForm = () => {
    const nameValidation = validateField("name", formData.name);
    const emailValidation = validateField("email", formData.email);
    const subjectValidation = validateField("subject", formData.subject);
    const messageValidation = validateField("message", formData.message);

    return nameValidation.isValid && 
           emailValidation.isValid && 
           subjectValidation.isValid && 
           messageValidation.isValid;
  };

  // Check if submit button should be enabled (no state updates)
  const isSubmitDisabled = !checkFormValidity() || submissionState === "loading";

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setSubmissionState("loading");
    setErrorMessage("");
    
    try {
      await sendEmail(formData);
      setSubmissionState("success");
      resetForm();
      
      // Focus first field after reset
      if (nameInputRef.current) {
        nameInputRef.current.focus();
      }
    } catch (error) {
      setSubmissionState("error");
      setErrorMessage(error.message || "There was an error sending your message. Please try again.");
    }
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    
    setValidation({
      name: { isValid: true, message: "" },
      email: { isValid: true, message: "" },
      subject: { isValid: true, message: "" },
      message: { isValid: true, message: "" }
    });
    
    setSubmissionState("idle");
    setErrorMessage("");
  };

  return (
    <div className="contact-form">
      <Form onSubmit={handleSubmit} noValidate>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="contactName">
              <Form.Label>
                Name <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                isInvalid={!validation.name.isValid}
                aria-describedby="nameError"
                aria-required="true"
                ref={nameInputRef}
              />
              <Form.Control.Feedback type="invalid" id="nameError">
                {validation.name.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          
          <Col md={6}>
            <Form.Group className="mb-3" controlId="contactEmail">
              <Form.Label>
                Email <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                isInvalid={!validation.email.isValid}
                aria-describedby="emailError"
                aria-required="true"
              />
              <Form.Control.Feedback type="invalid" id="emailError">
                {validation.email.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="contactSubject">
          <Form.Label>
            Subject <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter subject"
            value={formData.subject}
            onChange={(e) => handleInputChange("subject", e.target.value)}
            isInvalid={!validation.subject.isValid}
            aria-describedby="subjectError"
            aria-required="true"
          />
          <Form.Control.Feedback type="invalid" id="subjectError">
            {validation.subject.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="contactMessage">
          <Form.Label>
            Message <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Enter your message"
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            isInvalid={!validation.message.isValid}
            aria-describedby="messageError"
            aria-required="true"
          />
          <Form.Control.Feedback type="invalid" id="messageError">
            {validation.message.message}
          </Form.Control.Feedback>
        </Form.Group>

        <div className="text-center">
          <Button
            variant="primary"
            type="submit"
            disabled={isSubmitDisabled}
            className="contact-submit-btn"
          >
            {submissionState === "loading" ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </Button>
        </div>

        {submissionState === "success" && (
          <div className="alert alert-success mt-3" role="alert">
            <strong>Success!</strong> Your message has been sent successfully. I'll get back to you soon!
          </div>
        )}

        {submissionState === "error" && (
          <div className="alert alert-danger mt-3" role="alert">
            <strong>Error!</strong> {errorMessage || "There was an error sending your message. Please try again."}
          </div>
        )}
      </Form>
    </div>
  );
}

export default ContactForm;