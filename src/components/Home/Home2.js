import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

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
              I’m a passionate Flutter Developer focused on building beautiful, 
              high-quality mobile apps for iOS and Android. I specialize in crafting seamless user experiences with clean architecture,
               real-time features, and smooth animations. 
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  Flutter, React.js, Node.js, and Java{" "}
                </b>
              </i>
              — and I enjoy learning new technologies and pushing creative boundaries.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                   cross-platform mobile applications,  real-time communication systems,  AI-driven experiences, {" "}
                </b>
              </i>
              and scalable software architectures.
              <br />
              <br />
               I   {" "}<b className="purple">love </b> {" "} every step of the journey. Let's build something amazing together.

             
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
