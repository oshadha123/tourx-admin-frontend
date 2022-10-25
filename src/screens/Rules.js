import React, { useState } from "react";
import "../styles.css";
import Navigation from "../components/Navigation";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Button from "react-bootstrap/Button";

const tours = [
  {
    id: 1,
    name: "Seasons rule",
    start: "2022-08-09",
    end: "2022-11-01",
  },
  {
    id: 2,
    name: "Premium price",
    start: "2022-06-01",
    end: "2023-01-01",
  },
];

export default function Rules() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            {tours.map((tour) => (
              <Nav.Item>
                <Nav.Link eventKey={tour.id}>{tour.name}</Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="1">
              <p>{tours[0].name}</p>
              <p>{tours[0].start}</p>
              <p>{tours[0].end}</p>
<Button>Edit</Button>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}
