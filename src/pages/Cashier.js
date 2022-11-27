import React, { Component } from "react";

import { Row, Col, Card, Button } from "react-bootstrap";

export default class Cashier extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundImage: "url(/assets/bg.jpg)",
        }}
      >
        <Row row-cols-1 row-cols-md-3 g-4>
          <Col>
            <Card style={{ textAlign: "center", width: "250px" }}>
              <Card.Body>
                <Card.Title>Morning</Card.Title>
                <Card.Text>07.00 am - 02.59 pm</Card.Text>
                <a href="/Home">
                  <Button variant="primary">Select</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ textAlign: "center", width: "250px" }}>
              <Card.Body>
                <Card.Title>Middle</Card.Title>
                <Card.Text>03.00 pm - 10.59 pm</Card.Text>
                <a href="/Home">
                  <Button variant="primary">Select</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ textAlign: "center", width: "250px" }}>
              <Card.Body>
                <Card.Title>Night</Card.Title>
                <Card.Text>10.00 pm - 06.00 am</Card.Text>
                <a href="/Home">
                  <Button variant="primary">Select</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
