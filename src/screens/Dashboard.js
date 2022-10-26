import React, { useEffect, useContext } from "react";
import { useState } from "react";
import "../styles.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Registrations from "../components/Registrations";
import Composition from "../components/UserComposition";
import UserType from "../components/AccountType";
import Navigation from "../components/Navigation";
import axios from "axios";
import { BASE_URL } from ".././config";

const UserData = [
  {
    date: "21-10-2022",
    tourist: 10,
    tourguide: 6,
  },
  {
    date: "22-10-2022",
    tourist: 15,
    tourguide: 3,
  },
  {
    date: "23-10-2022",
    tourist: 7,
    tourguide: 4,
  },
  {
    date: "24-10-2022",
    tourist: 11,
    tourguide: 8,
  },
  {
    date: "25-10-2022",
    tourist: 20,
    tourguide: 10,
  },
  {
    date: "26-10-2022",
    tourist: 22,
    tourguide: 7,
  },
  {
    date: "27-10-2022",
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
  const [touristNum, setTouristNum] = useState();
  const [tourguideNum, setTourguideNum] = useState();
  const token = {
    headers: {
      authorization: "Bearer " + localStorage.getItem("token"),
    },
  };
  axios
    .get(`${BASE_URL}/stats/userRegistration`, token)
    .then((details) => {
      console.log(details);
      setTouristNum(details.data.data.tourist.length);
      setTourguideNum(details.data.data.tourguide.length);
    })
    .catch((e) => {
      console.log(e);
    });

  axios
    .get(`${BASE_URL}/stats/user/Reported`, token)
    .then((reported) => {
      console.log(reported);
      // setTouristNum(details.data.data.tourist.length);
      // setTourguideNum(details.data.data.tourguide.length);
    })
    .catch((e) => {
      console.log(e);
    });

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.date),
    datasets: [
      {
        label: "Tourists",
        data: UserData.map((data) => data.tourist),
        backgroundColor: ["#1768AC"],
      },
      {
        label: "Tour Guides",
        data: UserData.map((data) => data.tourguide),
        backgroundColor: ["#ADE25D"],
      },
    ],
  });

  const newRegData = {
    labels: ["Tourists", "Tour Guides"],
    datasets: [
      {
        label: ["Tourists", "Tour Guides"],
        data: [touristNum, tourguideNum],
        backgroundColor: ["#1768AC", "#ADE25D"],
      },
    ],
  };

  const [typeData, setType] = useState({
    labels: TypeData.map((data) => data.type),
    datasets: [
      {
        label: ["Regular", "Premium"],
        data: TypeData.map((data) => data.num),
        backgroundColor: ["#1768AC", "#06BEE1"],
      },
    ],
  });

  return (
    <div className="App">
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
              <a href="./TourManagement">
                <Button variant="primary">Go to Tours</Button>
              </a>
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
              <a href="./UserManagement">
                <Button variant="danger">Go to User Management</Button>
              </a>
            </Card.Body>
          </Card>
        </div>
        <div style={{ width: "20rem" }} className="p-2">
          <h3 style={{ textAlign: "center" }}>User Composition</h3>
          <Composition chartData={newRegData} />
        </div>
      </div>
    </div>
  );
}
