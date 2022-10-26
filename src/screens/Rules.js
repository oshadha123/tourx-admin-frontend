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
import data from "./sampleRules";

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
        <Tab.Container
          id="left-tabs-example"
          defaultActiveKey="first"
          className="mt-5"
        >
          <Row>
            <Col sm={1}></Col>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                {/*<NavItem style={{ height: "5rem" }} onClick={()=> setSelected(e.ruleId)}>
                    <NavLink eventKey={e.ruleId}>{e.ruleName}</NavLink>
                   </NavItem> */}
                <Nav.Item>
                  <Nav.Link eventKey="first">Package Period</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Season Period</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Package Price</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Report Count</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Points per React</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={7} style={{ backgroundColor: "#eef3f7", borderRadius: "8px" }}>
              <Tab.Content>
                <Tab.Pane eventKey="first" style={{margin: "50px"}}>Premium package period is a monthly package and it has set on 20.10.2022</Tab.Pane>
                <Tab.Pane eventKey="second" style={{margin: "50px"}}>Tourist Leaderboard validity period is for 10 days and it has set on 15.10.2022</Tab.Pane>
                <Tab.Pane eventKey="third" style={{margin: "50px"}}>Premium account price is LKR 800/= it has set on 18.10.2022</Tab.Pane>
                <Tab.Pane eventKey="fourth" style={{margin: "50px"}}>Once the report count exceeds 5, the user's profile will be visible in admin's user management window which would be reviewed by the admin. the rule has set on 22.10.2022</Tab.Pane>
                <Tab.Pane eventKey="fifth" style={{margin: "50px"}}>Each react would count as 10 points and it has set on 25.10.2022</Tab.Pane>
              </Tab.Content>
            </Col>
            <Col sm={1}></Col>
          </Row>
        </Tab.Container>
      </div>
    </>
  );
}
