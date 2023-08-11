import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function submitForm(event) {
    event.preventDefault();

    let userData = {
        Email: email,
        Password: password,
    }

    console.log(userData);
  }
  
  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <Form>

          <Form.Group className="mb-3" controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

        <Button variant="primary" type="submit" className='btn btn-block' style={{width: '100%'}} onClick={submitForm}>
        Submit
        </Button>

      </Form>
    </div>
  )
}

export default Login