import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer className="bg-dark border-top border-light text-white">
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p>
              Copyright © {new Date().getFullYear()}
              &nbsp;Your Company. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
