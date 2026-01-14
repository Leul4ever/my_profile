import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import foodly from "../../Assets/Projects/foodly.png";
import elearning from "../../Assets/Projects/elearning.jpeg";
import attendance from "../../Assets/Projects/attendance.jpeg";
import bank from "../../Assets/Projects/bank.png";

function Projects() {
  const [showGithubToast, setShowGithubToast] = useState(false);
  const [showDemoToast, setShowDemoToast] = useState(false);

  const handleGithubClick = () => {
    setShowGithubToast(true);
  };

  const handleDemoClick = () => {
    setShowDemoToast(true);
  };

  return (
    <>
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
         <Row style={{ justifyContent: "flex-start", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={bank}
                isBlog={false}
                title="Mobile Banking App"
                description="Developed a cross-platform mobile banking app using Flutter, delivering native-level performance on Android and iOS from a single codebase. The app supports secure money transfers, account management, and mortgage services, built with Clean Architecture, DDD, BLoC, and a feature-first approach, and integrated with a Golang backend for real-time, secure financial operations."
                ghLink="https://github.com/soumyajit4419/Chatify"
                demoLink="https://chatify-49.web.app/"
                onGithubClick={handleGithubClick}
                onDemoClick={handleDemoClick}
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={foodly}
                isBlog={false}
                title="Food delivery app"
                description=" Flutter-based food delivery app that lets users discover, order, and track meals. It includes authentication (Firebase Auth), browsing by categories and nearby restaurants, personalized recommendations, search, cart management, order tracking (pending → delivered), payment processing, Google Maps directions, and address management. The app includes offline support with caching and sync, encrypted storage and secure authentication, image caching and lazy loading, and an offline-aware UI."
                ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
                demoLink="https://blogs.soumya-jit.tech/"
                onGithubClick={handleGithubClick}
                onDemoClick={handleDemoClick}
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={elearning}
                isBlog={false}
                title="E‑learning Platform – Interactive Simulations"
                description="A STEM‑focused e‑learning platform built with Flutter and Riverpod that enables interactive scientific simulations. Learners adjust parameters like velocity or temperature and see real‑time outcomes through custom physics engines. It includes adaptive lessons, progress tracking, offline access, and features such as 3D molecular visualizations and circuit simulators. A Golang backend handles content, user data, and AI‑driven recommendations, while the responsive design works on phones and tablets."
                ghLink="https://github.com/soumyajit4419/Editor.io"
                demoLink="https://editor.soumya-jit.tech/"
                onGithubClick={handleGithubClick}
                onDemoClick={handleDemoClick}
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={attendance}
                isBlog={false}
                title="Geo-Attendance(CRM)"
                description="Built a location-verified attendance platform for enterprise field and remote teams using Flutter with Riverpod and a feature-first architecture. The system validates on-site check-ins through GPS, geofencing, motion sensors, AI-based fraud detection, and biometric verification, supports complex shift and leave rules, works reliably offline with background sync, and provides real-time dashboards, analytics, and secure backend services to prevent spoofing and ensure data integrity."
                ghLink="https://github.com/soumyajit4419/Plant_AI"
                demoLink="https://plant49-ai.herokuapp.com/"
                onGithubClick={handleGithubClick}
                onDemoClick={handleDemoClick}
              />
            </Col>

           

            
          </Row>
        </Container>
      </Container>

      <ToastContainer 
        position="top-end" 
        className="p-3" 
        style={{ 
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 9999 
        }}
      >
        <Toast
          onClose={() => setShowGithubToast(false)}
          show={showGithubToast}
          delay={3000}
          autohide
          style={{
            backgroundColor: 'rgba(98, 54, 134, 0.95)',
            border: '1px solid rgba(199, 112, 240, 0.5)',
            borderRadius: '10px',
            boxShadow: '0 4px 15px rgba(119, 53, 136, 0.5)',
            color: 'white',
            backdropFilter: 'blur(10px)'
          }}
        >
          <Toast.Body style={{ 
            padding: '15px 20px',
            fontSize: '1rem',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <span>Contact me to get the github link url</span>
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={() => setShowGithubToast(false)}
              aria-label="Close"
              style={{ marginLeft: '15px', opacity: '0.8' }}
            />
          </Toast.Body>
        </Toast>

        <Toast
          onClose={() => setShowDemoToast(false)}
          show={showDemoToast}
          delay={3000}
          autohide
          style={{
            backgroundColor: 'rgba(98, 54, 134, 0.95)',
            border: '1px solid rgba(199, 112, 240, 0.5)',
            borderRadius: '10px',
            boxShadow: '0 4px 15px rgba(119, 53, 136, 0.5)',
            color: 'white',
            backdropFilter: 'blur(10px)'
          }}
        >
          <Toast.Body style={{ 
            padding: '15px 20px',
            fontSize: '1rem',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <span>Contact me to get the apk</span>
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={() => setShowDemoToast(false)}
              aria-label="Close"
              style={{ marginLeft: '15px', opacity: '0.8' }}
            />
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
}

export default Projects;
