import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import data from "./TourData";
import { Avatar } from "@mui/material";
import Modal from "react-bootstrap/Modal";
import Navigation from "../components/Navigation";

// function MyVerticallyCenteredModal(props) {
//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           Tour Details
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <h4>Centered Modal</h4>
//         <p>
//           Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
//           dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
//           consectetur ac, vestibulum at eros.
//         </p>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="success" onClick={props.onHide}>
//           Accept
//         </Button>
//         <Button variant="danger" onClick={props.onHide}>
//           Reject
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

function TourManagement() {
  // const [modalShow, setModalShow] = React.useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
                    <Card.Img variant="top" src={item.img} style={{maxHeight:"50%"}} />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text className="overflow-hidden">
                        <Avatar
                          alt="Remy Sharp"
                          src="https://i.pinimg.com/originals/ff/f6/bf/fff6bfeb98ab54ed461280042d911019.png"
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
                          {console.log(item.title)}
                          <Modal.Title>Mirissa Breeze</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <p>
                            {" "}
                            <b>Attraction Places : </b> Waterfalls, hiking paths{" "}
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
                          <p>
                            {" "}
                            <b>Attraction Places : </b> Gregory lake, Haggala
                            Gardens{" "}
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
