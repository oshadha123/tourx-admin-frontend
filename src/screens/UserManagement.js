import { React, useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Button } from "react-bootstrap";
import Navigation from "../components/Navigation";
import Modal from "react-bootstrap/Modal";
import { BASE_URL } from "../config";
import axios from "axios";

export default function UserManagement() {
  const [users, setUsers] = useState([]);
  const [selected, setSelected] = useState();
  const [reports, setReports] = useState([]);
  const [show, setShow] = useState(false);
  const [showRemove, setShowRemove] = useState(false);
  const handleClose = () => setShow(false);
  const handleCloseRemove = () => setShowRemove(false);
  const handleShowRemove = () => setShowRemove(true);
  function handleShow() {
    setShow(true);
    // setSelected(userid);
    showModel();
  }
  // console.log(selected);

  var count = 1;
  const token = {
    headers: {
      authorization: "Bearer " + localStorage.getItem("token"),
    },
  };
  useEffect(() => {
    axios
      .get(`${BASE_URL}/user/reported/all`, token)
      .then((details) => {
        setUsers(details.data.data[0]);
        console.log(details);
      })

      .catch((e) => {
        console.log(e);
      });
  }, []);

  // view only selected user

  axios
    .get(`${BASE_URL}/user/reported/${selected}`, token)
    .then((details) => {
      setReports(details.data.data);
    })

    .catch((e) => {
      console.log(e);
    });

  axios
    .post(`${BASE_URL}/user/banned`,       {selected
    , token })
    .then((details) => {
      console.log(details);
    })

    .catch((e) => {
      console.log(e);
    });

  const renderTable = () => {
    // return users.map(user => {
    return (
      <tr 
      key={users["userId"]}
      >
        <td>{count}</td>
        <td>{users["firstName"]}</td>
        <td>{users["lastName"]}</td>
        <td>
          <Button
            onClick={() => {
              setSelected(users["userId"]);
              handleShow();
            }}
          >
            See more{" "}
          </Button>
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>
                {users["firstName"] + " " + users["lastName"]}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ overflow: "scroll", maxHeight: "90%" }}>
              <ol>
                {reports.map((e) => (
                  <li>
                    <div style={{ display: "flex" }}>
                      <div>
                        <p>Date:</p>
                        <p>Description: </p>
                        <p>Reason:</p>
                      </div>
                      <div>
                        <p>{e.reportedDate}</p>
                        <p> {e.description}</p>
                        <p> {e.reason ? e.reason : "-"}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </td>
        <td>
          <Button
            onClick={handleShowRemove}
            style={{ backgroundColor: "transparent", outline: "none" }}
          >
            <DeleteIcon style={{ color: "e26d5c" }} />
          </Button>
          <Modal
            show={showRemove}
            onHide={handleCloseRemove}
            backdrop="static"
            keyboard={false}
            centered
            style={{ height: "15rem" }}
          >
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
              Are you sure you want to ban this user from TourX?
            </Modal.Body>
           <Modal.Footer>
                <Button
                  variant="primary"
                  onClick={() => {
                    handleCloseRemove();
                  }}
                >
                  Cancel
                </Button>
                <Button
                  variant="danger"
                  onClick={() => {
                    handleCloseRemove();
                  }}
                >
                  Remove
                </Button>
              </Modal.Footer>
          </Modal>
        </td>
      </tr>
    );
    // })
  };

  return (
    <>
      <Navigation />
      <Table striped bordered hover style={{ margin: "1rem", width: "98%" }}>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Reports</th>
            <th>Remove User</th>
          </tr>

          {renderTable()}
        </thead>
      </Table>
    </>
  );
}
