import React from "react";
import "../style/Footer.css"; // Ensure the path is correct

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <p>&copy; 2024 Royal Kludge. All rights reserved.</p>
          </Col>
          <Col className="text-md-end container-fluid">
            <p>
              Unauthorized use or duplication of this material without express
              and written permission from Royal Kludge is strictly prohibited.
              For permission requests, please contact us at
              info@royalkludge.com.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
