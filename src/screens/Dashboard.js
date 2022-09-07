import React, { useEffect } from "react";
import { useState } from "react";
import "../styles.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Navigation from "../components/Navigation";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Registrations from "../components/Registrations";
import Composition from "../components/UserComposition";
import UserType from "../components/AccountType";

const UserData = [
  {
    date: "01",
    tourist: 10,
    tourguide: 6,
  },
  {
    date: "02",
    tourist: 15,
    tourguide: 3,
  },
  {
    date: "03",
    tourist: 7,
    tourguide: 4,
  },
  {
    date: "04",
    tourist: 11,
    tourguide: 8,
  },
  {
    date: "05",
    tourist: 20,
    tourguide: 10,
  },
  {
    date: "06",
    tourist: 22,
    tourguide: 7,
  },
  {
    date: "07",
    tourist: 18,
    tourguide: 5,
  },
];

const RegData = [
  { type: "Tourists", num: 130 },
  { type: "Tour Guides", num: 20 },
];

const TypeData = [
  { type: "Regular", num: 15 },
  { type: "Premium", num: 5 },
];

export default function Dashboard() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.date),
    datasets: [
      {
        label: "Tourists",
        data: UserData.map((data) => data.tourist),
        backgroundColor: ["#12adc1"],
      },
      {
        label: "Tour Guides",
        data: UserData.map((data) => data.tourguide),
        backgroundColor: ["#dd6e42"],
      },
    ],
  });

  const [regData, setReg] = useState({
    labels: RegData.map((data) => data.type),
    datasets: [
      {
        label: ["Tourists", "Tour Guides"],
        data: RegData.map((data) => data.num),
        backgroundColor: ["#0295a9", "#dd6e42"],
      },
    ],
  });

  const [typeData, setType] = useState({
    labels: TypeData.map((data) => data.type),
    datasets: [
      {
        label: ["Regular", "Premium"],
        data: TypeData.map((data) => data.num),
        backgroundColor: ["#0295a9", "#fdd037"],
      },
    ],
  });

  // const [api, setApi] = useState({
  //   apiResponse: "",
  // });

  // const callAPI = () => {
  //   fetch("http://localhost:9000/testAPI")
  //     .then((res) => res.text())
  //     .then((res) => {
  //       const temp = { ...api };
  //       temp.apiResponse = res;
  //       setApi(temp);
  //     });
  // };

  // useEffect(() => {
  //   callAPI();
  //   console.log("component mounted");
  // }, []);

  return (
    <div className="App">
      {/* <p>{api.apiResponse}</p> */}
      <Navigation />

      <div className="d-flex flex-row mb-3">
        <div style={{ textAlign: "center" }} className="p-2">
          <Card style={{ margin: 10 }}>
            <Card.Body>
              <div>
                <Card.Title>Pending tours:</Card.Title>
                <h2>16</h2>
              </div>
              <div>
                <Card.Title>Created tours:</Card.Title>
                <h2>30</h2>
              </div>
              <Button variant="primary">Go to Tours</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem", margin: 10 }}>
            <Card.Body>
              <div style={{ textAlign: "center" }}>
                <Card.Title>
                  Virtual tour to site visitation conversion rate:{" "}
                </Card.Title>
                <h2>
                  38% <ArrowUpwardIcon style={{ color: "#a4eb34" }} />
                </h2>
              </div>
            </Card.Body>
          </Card>
        </div>

        <div className="p-2">
          <h3 style={{ textAlign: "center" }}>Tour Guide Account Types</h3>
          <UserType chartData={typeData} />
        </div>

        <div style={{ width: "40rem" }} className="p-2">
          <h3 style={{ textAlign: "center" }}>Daily Registrations</h3>
          <Registrations chartData={userData} />
        </div>
      </div>

      <div className="d-flex flex-row mb-3">
        <div className="p-2" style={{ textAlign: "center" }}>
          <Card style={{ width: "18rem", margin: 10 }}>
            <Card.Body>
              <div>
                <Card.Title>Reported Users:</Card.Title>
                <h2>4</h2>
              </div>
              <Button variant="danger">Go to Rule Management</Button>
            </Card.Body>
          </Card>
        </div>
        <div style={{ width: "20rem" }} className="p-2">
          <h3 style={{ textAlign: "center" }}>User Composition</h3>
          <Composition chartData={regData} />
        </div>
      </div>
    </div>
  );
}
