import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Avatar from "@mui/material/Avatar";
import "../styles.css";

export default function Profile() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const styles = {
    container: {
      backgroundImage: `url(${"https://res.cloudinary.com/tourx/image/upload/v1662577628/2204_w017_n001_443a_p30_443_ye0thy.jpg"})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width: "100vw",
      height: "100vh",
    },
  };

  const cardStyles = {
    container: {
      display: "flex",
      boxShadow: "0 0 3px 2px #cec7c759",
      alignItems: "center",
      padding: 20,
      borderRadius: 20,
      opacity: 0.8,
    },
  };

  return (
    <>
      <div style={styles.container}>
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "25rem",
          }}
        >
          <Card style={cardStyles.container}>
            <Avatar sx={{ width: 56, height: 56 }}>VK</Avatar>
            <Card.Body>
              <Card.Title className="text-center">
                Venodi Widanagamage
              </Card.Title>
              <Card.Text>
                <p>
                  <b>Email : </b>venodiwidanagamage@gmail.com
                </p>
                <p>
                  <b>Phone Number : </b>077 49 01 380
                </p>
                {/* <p>
                  A motivated computer science undergraduate who is willing to
                  contribute her maximum effort to the organization while being
                  exposed to new technologies. A good team player with good
                  social skills who likes to expand her network among industry
                  individuals to gain valuable experience in a professional IT
                  environment.
                </p> */}
              </Card.Text>

              <div style={{ textAlign: "center" }}>
                <Button variant="warning" onClick={handleShow}>
                  Edit
                </Button>
              </div>

              <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                  <Modal.Title>Edit your details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Name</Form.Label>
                      <Form.Control as="textarea" rows={1} />

                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        autoFocus
                      />

                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control as="textarea" rows={1} />
                    </Form.Group>
                    {/* <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Bio</Form.Label>
                      <Form.Control as="textarea" rows={5} />
                    </Form.Group> */}
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="danger" onClick={handleClose}>
                    Discard
                  </Button>
                  <Button variant="success" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
            <Card.Footer className="text-muted">
              1 of 5 Admins of TourX
            </Card.Footer>
            {/* <div style={{ textAlign: "center" }}>
                <GoogleLogin
                  className="rounded-box"
                  clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                  buttonText="Login with Google"
                ></GoogleLogin>
              </div> */}
          </Card>
        </div>
      </div>
    </>
  );
}
