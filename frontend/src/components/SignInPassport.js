import axios from 'axios';
import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

const SignInPassport = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const getValue = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const localLogin = (e) => {
    e.preventDefault();
    axios
      .post('signin/passport/local', user)
      .then((res) => console.log('Data from backend', res.data));
  };

  return (
    <Row>
      <Col>
        <Form onSubmit={localLogin}>
          <Form.Group controlId='email'>
            <Form.Label>Email:</Form.Label>
            <Form.Control type='email' name='email' onChange={getValue} />
          </Form.Group>
          <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' name='password' onChange={getValue} />
          </Form.Group>
          <Button className='my-3' variant='success' type='submit'>
            Local Login
          </Button>
          <Button
            className='mx-2'
            variant='primary'
            type='submit'
          >
            Facebook Login
          </Button>
          <Button variant='dark' type='submit'>
            Github Login
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default SignInPassport;
