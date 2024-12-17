import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import "../asset/css/Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-between">
          <Col xs={12} md={6} className="mb-3 mb-md-0">
            <p className="copyright">
              © {new Date().getFullYear()} Koi Delivery. All rights reserved.
            </p>
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-end">
            <Nav>
              <Nav.Item>
                <Nav.Link href="/about" className="footer-link">
                  About Us
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/contact" className="footer-link">
                  Contact
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/privacy" className="footer-link">
                  Privacy Policydsads
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
