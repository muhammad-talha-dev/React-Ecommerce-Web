import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

function Signup() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');

  function submitForm(event) {
    event.preventDefault();

    let userData = {
        Email: email,
        Password: password,
        Full_Name: fullName,
    }

    console.log(userData);
  }


  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <Form>

      <Form.Group className="mb-3" controlId="formGridName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control 
            placeholder="Full Name" 
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit" className='btn btn-block' style={{width: '100%'}} onClick={submitForm}>
        Submit
        </Button>

      </Form>
    </div>
  )
}

export default Signup