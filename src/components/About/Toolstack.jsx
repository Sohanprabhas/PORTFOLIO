import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPostman,
  SiVercel,
  SiFigma,
  SiGithub,
} from "react-icons/si";
import { FaWindows } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <VscCode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaWindows />
      </Col>
    </Row>
  );
}

export default Toolstack;