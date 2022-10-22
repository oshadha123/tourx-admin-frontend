import "../styles.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavbarBrand } from "react-bootstrap";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonIcon from "@material-ui/icons/Person";
import NavDropdown from "react-bootstrap/NavDropdown";
import SettingsIcon from "@mui/icons-material/Settings";

export default function Navigation() {
  return (
      <Navbar
        expand="lg"
        style={{
          marginBottom: 10,
          backgroundColor: "#fcec52",
          alignItems: "end",
        }}
      >
        <Container>
          <NavbarBrand href="#home">
            <img src={'https://res.cloudinary.com/tourx/image/upload/v1662298253/tourx_equkdk.png'} style={{ maxHeight: "5rem", maxWidth: "8rem" }}/>
          </NavbarBrand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#tours">Tours</Nav.Link>
              <Nav.Link href="#rules">Rules</Nav.Link>
              <NavDropdown
                title="Profile"
                id="basic-nav-dropdown"
                style={{ justifyContent: "right" }}
              >
                <NavDropdown.Item href="#profile">
                  <PersonIcon /> Profile
                </NavDropdown.Item>
                <NavDropdown.Item href="#settings">
                  <SettingsIcon />
                  Settings
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#logout">
                  <ExitToAppIcon /> Log Out
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}
