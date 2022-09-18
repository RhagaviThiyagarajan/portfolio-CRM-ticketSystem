import React from "react";
import PropTypes from 'prop-types'; // ES6
import { Navigate } from "react-router-dom";


import { Container, Row, Col, Form, Button } from "react-bootstrap";
import PasswordReset from "../PasswordReset/PasswordReset";

function LoginComp({handleOnChange,setPassword,email,password,handleOnSubmit}) {

  
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center">Client Login</h1>
          <hr />
          <Form autoComplete='off' onSubmit={handleOnSubmit}>
            {/* //email */}
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={handleOnChange}
                placeholder="Enter Email"
                required
              ></Form.Control>
            </Form.Group>

            {/* //password */}
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={password}
                onChange={handleOnChange}
                placeholder="Enter Password"
                required
              ></Form.Control>
            </Form.Group>
            <Button type="submit">LOGIN</Button>
          </Form>
          <hr />
        </Col>
      </Row>

 {/* //forget password */}
      <Row>
        <Col>
     
    <Button onClick={<Navigate replace to="/PasswordReset"/>}>Forget Password?</Button>
     
        </Col>
      </Row>
    </Container>
  );
}

 LoginComp.propTypes = {
     handleOnChange: PropTypes.func.isRequired,
     email: PropTypes.string.isRequired,
     password: PropTypes.string.isRequired,
     handleOnSubmit:PropTypes.func.isRequired,
 }
export default LoginComp;
