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
              I’m a Software Engineer with a strong focus on data analytics, artificial intelligence, and machine learning. I enjoy working with data end-to-end — from collecting and cleaning it, to analyzing patterns, building models, and turning insights into actionable solutions.
              <br />
              <br />
              I have hands-on experience designing data pipelines, working with relational databases, and building analytics workflows using Python and SQL. I’m comfortable handling both structured and unstructured data, and I value data quality, reproducibility, and clear communication of insights.
              <br />
              <br />
              Alongside data and AI, I build full-stack web applications and cross-platform mobile apps. I enjoy developing clean, maintainable backends, intuitive user interfaces, and systems where data and intelligence are seamlessly integrated into real products.
              <br />
              <br />
              I’m motivated by solving real problems, learning continuously, and building software that is both technically sound and practically useful.


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
