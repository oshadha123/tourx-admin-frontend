import { React, useState } from "react";
import Table from "react-bootstrap/Table";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "react-bootstrap";
import Navigation from "../components/Navigation";
import { BASE_URL } from "../config";
import axios from "axios";

export default function UserManagement() {
  const [users, setUsers] = useState([]);
  var count  = 1;
  const token = {
    headers: {
      authorization: "Bearer " + localStorage.getItem("token"),
    },
  };
  axios
    .get(`${BASE_URL}/stats/reported/all`, token)
    .then((details) => {
      console.log(details);
      // setUsers(details.data.data);
      // setTouristNum(details.data.data.tourist.length);
    })
    .catch((e) => {
      console.log(e);
    });
  return (
    <>
      <Navigation />
      <Table striped bordered hover style={{margin:"1rem", width:"98%"}} >
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th></th>
          </tr>
          <tr>
          <td>{count}</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td><DeleteIcon/></td>
        </tr>
        <tr>
          <td>2</td>
          <td >Larry</td>
          <td>Bird</td>
          <td><DeleteIcon/></td>
        </tr>
        </thead>
        <tbody>
          {/* {users.map(e=>( */}
          <tr>
            <td>3</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>
              <DeleteIcon />
            </td>
          </tr>
          {/* ))}           */}
        </tbody>
      </Table>
    </>
  );
}
