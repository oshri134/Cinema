import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col>
            <p className="text-center">
              Address: 123 Main Street, City, Country
            </p>
            <p className="text-center">Phone: +1 123-456-7890</p>
            <p className="text-center">
              &copy; {new Date().getFullYear()} All rights reserved to Oshri
              Shekuri
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
