import React from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

function MainPage() {
  let tab = ['https://i.pinimg.com/222x/0d/98/b2/0d98b2916254548f2c79a57eb8768969.jpg',
  'https://m.media-amazon.com/images/I/71Aa-6i+epL._AC_SL1500_.jpg',
  'https://i.ytimg.com/vi/BqyQcGMnRRY/mqdefault.jpg','https://i.pinimg.com/736x/94/bf/44/94bf4431cd0530fa0f48334cf34e8be1.jpg']
  return (
    <div className="container my-3">
      <div className="div-card">
        <Row xs={1} md={3} className="g-4">
          {tab.map((el, idx) => (
            <Col>
              <Card>
                <Card.Img height="250" variant="top" src={el} />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <div className="div-form">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default MainPage;
