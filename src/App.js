import "./styles.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Navigation from "./components/Navigation";
import DonutChart from "./components/DonutChart";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function App() {
  return (
    <div className="App">
      <Navigation />

      <div style={{ display: "flex" }}>
        <div style={{ textAlign: "center" }}>
          <Card style={{margin:10}}>
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

        <DonutChart />
      </div>
    </div>
  );
}
