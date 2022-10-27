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
import { Doughnut } from "react-chartjs-2";

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

export default function Dashboard() {
  const [touristData, setTouristData] = useState([]);
  const [tourguideData, setTourguideData] = useState([]);
  const [tours, setTours] = useState(8);
  const [premium, setPremium] = useState(0);
  const [nonPremium, setNonPremium] = useState(0);
  const [touristNum, setTouristNum] = useState();
  const [tourguideNum, setTourguideNum] = useState();
  const token = {
    headers: {
      authorization: "Bearer " + localStorage.getItem("token"),
    },
  };
  useEffect(() => {
    axios
      .get(`${BASE_URL}/stats/userRegistration`, token)
      .then((details) => {
        // console.log(details);
        // setTouristData(details.data.data.tourist);
        // setTourguideData(details.data.data.tourguide);
        setTouristNum(details.data.data.tourist.length);
        setTourguideNum(details.data.data.tourguide.length);
      })
      .catch((e) => {
        console.log(e);
      });
  });

  useEffect(() => {
    axios
      .get(`${BASE_URL}/stats/user/Reported`, token)
      .then((reported) => {
        console.log(reported);
      })
      .catch((e) => {
        console.log(e);
      });
  });

  useEffect(() => {
    axios
      .get(`${BASE_URL}/stats/tour`, token)
      .then((tour) => {
        // console.log(tour);
        setTours(tour.data.data.new);
      })
      .catch((e) => {
        console.log(e);
      });
  });

  useEffect(() => {
    axios
      .get(`${BASE_URL}/stats/user/accountType`, token)
      .then((e) => {
        // console.log(e);
        setPremium(e.data.data["Premium"]);
        setNonPremium(e.data.data["NonPremium"]);
        console.log(premium);
      })
      .catch((e) => {
        console.log(e);
      });
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

  const Touristdata = {
    labels: ["21st", "22nd", "23rd", "24th", "25th", "26th", "27th"],
    datasets: [
      {
        label: "Tourists",
        fill: false,
        lineTension: 0.1,
        borderColor: "#E26D5C",
        pointBorderColor: "#E26D5C",
        pointRadius: 1,
        data: [1, 2, 0, 1, 1, 0, 1],
      },
    ],
  };

  const TourguideData = {
    labels: ["21st", "22nd", "23rd", "24th", "25th", "26th", "27th"],
    datasets: [
      {
        label: "Tour Guides",
        fill: false,
        lineTension: 0.1,
        borderColor: "#1768AC",
        pointBorderColor: "#1768AC",
        pointRadius: 1,
        data: [0, 1, 0, 2, 0, 0, 1],
      },
    ],
  };

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
    labels: ["Non-premium", "Premium"],
    datasets: [
      {
        label: ["Non-premium", "Premium"],
        data: [2, 2],
        backgroundColor: ["#1768AC", "#06BEE1"],
      },
    ],
  });

  return (
    <div className="App">
      <Navigation />
      <div className="d-flex flex-row mb-3">
        <div style={{ textAlign: "center" }} className="p-2">
          <Card style={{ margin: 10, height:"12rem" , }}>
            <Card.Body style={{alignItems:"center"}}>
              <div>
                <br></br>
                <Card.Title>Pending tours:</Card.Title>
                <h2>{tours}</h2>
              </div>
              <a href="./TourManagement">
                <Button variant="primary">Go to Tours</Button>
              </a>
            </Card.Body>
          </Card>

          
          <Card style={{ width: "18rem", margin: 10 , height:"12rem" }}>
            <Card.Body>
              <div><br></br>
                <Card.Title>Reported Users:</Card.Title>
                <h2>1</h2>
              </div>
              <a href="./UserManagement">
                <Button variant="danger">Go to User Management</Button>
              </a>
            </Card.Body>
          </Card>
        </div>

        <div className="d-flex flex-column mb-3">
          <div className="p-2">
            <h3 style={{ textAlign: "center" }}>Tour Guide Account Types</h3>
            <UserType chartData={typeData} />
          </div>
          <div style={{ width: "20rem" }} className="p-2">
            <h3 style={{ textAlign: "center" }}>User Composition</h3>
            <Composition chartData={newRegData} />
          </div>
        </div>

        <div style={{ width: "40rem" }} className="p-2">
          <h3 style={{ textAlign: "center" }}>Daily Registrations</h3>
          <Registrations chartData={TourguideData} />
          <Registrations chartData={Touristdata} />
        </div>
      </div>
    </div>
  );
}
