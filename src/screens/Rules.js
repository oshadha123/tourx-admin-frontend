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
import { BASE_URL } from "../config";
import axios from "axios";

const tours = [
  { id: 1, name: "tour1", location: "Kandy", route: "route" },
  { id: 2, name: "tour2", location: "Colombo", route: "route" },
  { id: 3, name: "tour3", location: "Anuradhapura", route: "route" },
  { id: 4, name: "tour4", location: "Galle", route: "route" },
];

export default function Rules() {
  const [rules, setRules] = useState([]);
  const [selected, setSelected] = useState();
  <Navigation />;
  const token = {
    headers: {
      authorization: "Bearer " + localStorage.getItem("token"),
    },
  };
  axios
    .get(`${BASE_URL}/rule/types`, token)
    .then((details) => {
      setRules(details.data.data);
    })
    .catch((e) => {
      console.log(e);
    });
  // console.log(rules);
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
                {rules.map((e) => (
                  <NavItem style={{ height: "5rem" }} onClick={()=> setSelected(e.ruleId)}>
                    <NavLink eventKey={e.ruleId}>{e.ruleName}</NavLink>
                  </NavItem>
                ))}
              </Nav>
            </Col>
            <Col sm={9} style={{ backgroundColor:"#eef3f7", borderRadius:"8px"}}>
              <TabContent>
                {selected}
              </TabContent>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
