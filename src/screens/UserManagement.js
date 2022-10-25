import React from 'react';
import Table from 'react-bootstrap/Table';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from 'react-bootstrap';

export default function UserManagement() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td><DeleteIcon/></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td><DeleteIcon/></td>
        </tr>
        <tr>
          <td>3</td>
          <td >Larry</td>
          <td>Bird</td>
          <td><DeleteIcon/></td>
        </tr>
      </tbody>
    </Table>
  );
}