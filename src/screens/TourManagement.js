import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import data from "./TourData";
import { Avatar } from "@mui/material";

function TourManagement() {
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
      <section className="py-4 container">
        <div className="row justify-content-center">
          <div className="col-12 mb-0">
            <div className="mb-3 col-4 mx-auto text-center">
              <h4 className="form-label h4">Search for Events</h4>
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
                    <Card.Img variant="top" src={item.img} />
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
                        style={{ margin: "1rem" }}
                        className="position-absolute bottom-0 start-0"
                        variant="primary"
                        active
                      >
                        Review
                      </Button>
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
