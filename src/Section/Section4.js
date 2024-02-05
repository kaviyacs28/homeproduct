import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const ResponsiveCard = () => {
  return (
    <div className="container">
      <Row className="justify-content-md-center">
        <Col sm={12} md={6} lg={4}>
          <Card className="mb-3">
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                This is a sample card with some placeholder content. You can add more here.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <Card className="mb-3">
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>Another Card</Card.Title>
              <Card.Text>
                Another example card with some placeholder content. You can add more here.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <Card className="mb-3">
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>Yet Another Card</Card.Title>
              <Card.Text>
                Yet another example card with some placeholder content. You can add more here.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ResponsiveCard;
