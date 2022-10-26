import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import data from "./TourData";
import { Avatar } from "@mui/material";
import Modal from "react-bootstrap/Modal";
import Navigation from "../components/Navigation";
import axios from "axios";
import { BASE_URL } from "../config";

function TourManagement() {
  const token = {
    headers: {
      authorization: "Bearer" + localStorage.getItem("token"),
    },
  };

  useEffect(() => {
    axios
      .get(`${BASE_URL}/tour/all`, token)
      .then((details) => {
        console.log(details);
      })
      .catch((e) => {
        console.log(e);
      });
  });

  // const [modalShow, setModalShow] = React.useState(false);

  const [show, setShow] = useState(false);
  const [displayModal, setDisplayModal] = useState(0);
  const handleClose = () => {
    setShow(false);
    data.cardData.splice(1, 1);
  };
  const handleShow = () => {setShow(true);}

  const [filter, setFilter] = useState("");
  const searchText = (event) => {
    setFilter(event.target.value);
  };
  // const Search = () => {
  let dataSearch = data.cardData.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });
  // };
  var count = 0;
  return (
    <>
      <Navigation />
      <section className="py-4 container">
        <div className="row justify-content-center">
          <div className="col-12 mb-0">
            <div className="mb-3 col-4 mx-auto text-center">
              <h4 className="form-label h4">Search for Tours</h4>
              <input
                type="text"
                className="form-control"
                value={filter}
                onChange={searchText.bind(this)}
              />
            </div>
          </div>
        </div>
      </section>

      <Container fluid>
        <Row>
          {dataSearch.map((item, index) => {
            count++;
            return (
              <>
                <Col lg={4}>
                  <Card
                    style={{
                      width: "20rem",
                      height: "25rem",
                      margin: "1rem",
                    }}
                    className="shadow"
                  >
                    <Card.Img
                      variant="top"
                      src={item.img}
                      style={{ maxHeight: "50%" }}
                    />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text className="overflow-hidden">
                        <Avatar
                          alt="Remy Sharp"
                          src={item.tg_img}
                        />
                        by {item.tour_guide}{" "}
                      </Card.Text>
                      <Button
                        onClick={handleShow}
                        style={{ margin: "1rem" }}
                        className="position-absolute bottom-0 start-0"
                        variant="primary"
                        active
                      >
                        Review
                      </Button>
                      <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                        centered
                        key={item.id}
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>Sigiri Dambulu Tour</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <p>
                            {" "}
                            <b>Attraction Places : </b> Ancient wall arts, hiking {" "}
                          </p>
                          <p>
                            {" "}
                            <b>Cost per head : </b> LKR 8500{" "}
                          </p>
                          <p>
                            {" "}
                            <b>Duration : </b> 2 Days, 1 Night{" "}
                          </p>
                          <p>
                            {" "}
                            <b>Traveeling modes : </b> By bus, By bicycles{" "}
                          </p>
                          <p style={{textAlign:"center"}}>
                            {" "}
                            <a href="https://kuula.co/share/collection/799hb?logo=1&info=1&fs=1&vr=0&zoom=1&autop=10&autopalt=1&thumbs=1"><b>VR tour</b></a>{" "}
                          </p>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="success" onClick={handleClose}>
                            Accept
                          </Button>
                          <Button variant="danger">Reject</Button>
                        </Modal.Footer>
                      </Modal>
                      {/* <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                      /> */}
                    </Card.Body>
                  </Card>
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default TourManagement;
