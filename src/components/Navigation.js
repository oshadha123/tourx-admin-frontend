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
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";

export function logout(){
  const navigate = useNavigate();
  localStorage.clear();
  navigate("/");
}

export default function Navigation() {
  return (
    <Navbar
      expand="lg"
      style={{
        marginBottom: 10,
        backgroundColor: "#FCEC52",
        alignItems: "end",
      }}
    >
      <Container>
        <LinkContainer to="/">
          <NavbarBrand>
            <img
              src={
                "https://res.cloudinary.com/tourx/image/upload/v1662298253/tourx_equkdk.png"
              }
              style={{ maxHeight: "5rem", maxWidth: "8rem" }}
            />
          </NavbarBrand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/Dashboard">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/TourManagement">
              <Nav.Link>Tours</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Rules">
              <Nav.Link>Rules</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/UserManagement">
              <Nav.Link>Users</Nav.Link>
            </LinkContainer>
            <NavDropdown
              title="Profile"
              id="basic-nav-dropdown"
              style={{ justifyContent: "right" }}
            >
              <NavDropdown.Item>
                <LinkContainer to="/Profile">
                  <Nav.Link>
                    <PersonIcon />
                    Profile
                  </Nav.Link>
                </LinkContainer>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#logout">
                <a href="/" style={{textDecoration:"none", color:"black"}}><ExitToAppIcon /> Log Out</a>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
