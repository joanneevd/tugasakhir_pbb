import React, { Component } from "react";

import { Card, Button } from "react-bootstrap";

export default class LandingPage extends Component {
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
        <Card style={{ width: "30rem", textAlign: "center" }}>
          <Card.Body>
            <Card.Title>Jo's Cafe</Card.Title>
            <Card.Text>Cafe is currently closed</Card.Text>
            <a href="/cashier">
              <Button variant="primary">Open</Button>
            </a>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
