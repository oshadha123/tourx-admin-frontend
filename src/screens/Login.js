import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Card } from 'react-bootstrap';

function LoginForm({Login,error}) {
    const[details, setDetails] = useState({name:"", email:"", password:""});
    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }

    const cardStyles = {
        container: {
          display: "flex",
          boxShadow: "0 0 3px 2px #cec7c759",
          alignItems: "center",
          padding: 20,
          borderRadius: 20,
        }
    }

  return (
    <>
     
<div style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: '25rem'}}>
    <Card style={cardStyles.container}>
        <img src={'https://res.cloudinary.com/tourx/image/upload/v1662298253/tourx_equkdk.png'} style={{height:'auto', width:'10rem'}} alt='Logo'/>
      <Form onSubmit={submitHandler}>
        <h4 style={{textAlign:'center'}}>Login</h4>
        {(error != "") ? (<div className="error">{error}</div>) : ""}

              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label htmlFor="email">Email:</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" id="email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email}/>
                  <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                  </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label htmlFor="password">Password:</Form.Label>
                  <Form.Control type="password" placeholder="Password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember Me" />
              </Form.Group>

              <Button variant="primary" type="submit">
                  Login
              </Button>
          </Form>
          </Card>
          </div>
        </>

  )
}

export default LoginForm

