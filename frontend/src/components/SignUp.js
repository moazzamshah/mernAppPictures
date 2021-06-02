import React, { useState } from 'react';
import { Form, Col, Button, Row } from 'react-bootstrap';
import axios from 'axios';

const SignUp = () => {

  const [user, setUser] = useState({
    userName: '',
    email: '',
    password: ''
  });

  const getValue = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const createUser = (e) => {
    e.preventDefault();
    console.log(user);
    axios.post('/user/create', user)
    .then(res => {
      console.log(res);
      window.location.href = '/signinpassport';
    })
  }

  return (
    <Row>
      <Col>
        <Form onSubmit={createUser}>
          <Form.Group controlId='username'>
            <Form.Label>Name</Form.Label>
            <Form.Control type='text' name='username' onChange={getValue} />
          </Form.Group>
          <Form.Group controlId='email'>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' name='email' onChange={getValue} />
          </Form.Group>
          <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' name='password' onChange={getValue} />
          </Form.Group>
          <Button variant='success' type='submit'>
            Sign Up
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default SignUp;
