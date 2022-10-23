import React, { useState } from "react";
import "../styles.css";
import {
  Container,
  Col,
  Row,
  Tab,
  Card,
  Button,
  Nav,
  NavLink,
  NavItem,
  TabContent,
  TabPane,
} from "react-bootstrap";
import Navigation from "../components/Navigation";

const tours = [
  { id: 1, name: "tour1", location: "Kandy", route: "route" },
  { id: 2, name: "tour2", location: "Colombo", route: "route" },
  { id: 3, name: "tour3", location: "Anuradhapura", route: "route" },
  { id: 4, name: "tour4", location: "Galle", route: "route" },
];

export default function Rules() {
  return (
    <>
      <div className="App">
        <Navigation />
        <Container
          id="left-tabs-example"
          defaultActiveKey="first"
          className="mt-5"
        >
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                {tours.map((e) => (
                  <NavItem>
                    <NavLink eventKey={e.id}>{e.name}</NavLink>
                  </NavItem>
                ))}
              </Nav>
            </Col>
            <Col sm={9} style={{ border: "1px solid black" }}>
              <TabContent>
                {tours.map((item) => {
                  return <TabPane eventKey="1">{item.name}</TabPane>;
                })}
              </TabContent>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
