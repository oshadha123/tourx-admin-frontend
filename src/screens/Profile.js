import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Avatar from "@mui/material/Avatar";
import "../styles.css";
import { BASE_URL } from "../config";
import axios from "axios";
import Navigation from "../components/Navigation";

export default function Profile() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [details, setDetails] = useState({});
  const token = {
    headers: {
      authorization: "Bearer " + localStorage.getItem("token"),
    },
  };
  axios
    .get(`${BASE_URL}/profile`, token)
    .then((res) => {
      setDetails(res.data.data[0])
    })
    .catch((e) => {
      console.log(e);
    });

  // const update = (profilePicture, firstName, lastName, contactNumber, bio) => {
  //   console.log(profilePicture);
  //   console.log(firstName);
  //   console.log(lastName);
  //   console.log(contactNumber);
  //   console.log(bio);

  //   axios
  //     .patch(
  //       `${BASE_URL}/profile`,
  //       {
  //         change: {
  //           profilePicture,
  //           firstName,
  //           lastName,
  //           bio,
  //         },
  //       },
  //       token,
  //     )
  //     .then(res => {
  //       console.log(res.data);
  //     })
  //     .catch(e => {
  //       console.log(`Updating error ${e}`);
  //     });

  //   if (userInfo.contact == null) {
  //     axios
  //       .post(
  //         `${BASE_URL}/contact`,
  //         {
  //           contact: [contactNumber],
  //         },
  //         token,
  //       )
  //       .then(res => {
  //         console.log(res.data);
  //       })
  //       .catch(e => {
  //         console.log(`Updating error ${e}`);
  //       });
  //   } else {
  //     axios
  //       .patch(
  //         `${BASE_URL}/contact`,
  //         {
  //           contact: [contactNumber],
  //         },
  //         token,
  //       )
  //       .then(res => {
  //         console.log(res.data);
  //       })
  //       .catch(e => {
  //         console.log(`Updating error ${e}`);
  //       });
  //   }
  // };

  const styles = {
    container: {
      // backgroundImage: `url(${"https://res.cloudinary.com/tourx/image/upload/v1662577628/2204_w017_n001_443a_p30_443_ye0thy.jpg"})`,
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
    <Navigation/>	
      <div style={styles.container}>
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "25rem",
            margin:"0",
          }}
        >
          <Card style={cardStyles.container}>
          <Avatar
                          alt="Remy Sharp"
                          src="https://res.cloudinary.com/tourx/image/upload/v1659808282/l_zm1kaj.png"
                        />
            <Card.Body>
              <Card.Title className="text-center">
                 {details.firstName + " " + details.lastName}
              </Card.Title>
              <Card.Text>
                <p>
                  <b>Email : </b>htnaweenpasindu@gmail.com
                </p>
                <p>
                  <b>Phone Number : </b>{details.contact}
                </p>
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
              1 of 1 Admins of TourX
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
