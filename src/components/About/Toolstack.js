import React from "react";
import { Col, Row } from "react-bootstrap";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import { SiGooglechrome, SiWindows, SiAndroidstudio } from "react-icons/si";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
             <SiWindows fontSize={"24px"} />
             <div className="tech-icons-text">Windows</div>
           </Col>
      <Col xs={4} md={2} className="tech-icons">
              <SiAndroidstudio fontSize={"24px"} />
              <div className="tech-icons-text">Android Studio</div>
            </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">Vs Code</div>
      </Col>

       <Col xs={4} md={2} className="tech-icons">
        <SiGooglechrome fontSize={"24px"} />
        <div className="tech-icons-text">Chrome</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
