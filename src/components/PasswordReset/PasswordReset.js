import React from "react";
import PropTypes from 'prop-types'; // ES6

import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
function PasswordReset({handleOnChange,email,handleOnSubmit}) {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center">Reset Password</h1>
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

           
            <Button type="submit">LOGIN</Button>
          </Form>
          <hr />
        </Col>
      </Row>

 {/* //forget password */}
      <Row>
        <Col>
          <a href="#">Login Now ?</a>
        </Col>
      </Row>
    </Container>
  );
}

 PasswordReset.propTypes = {
     handleOnChange: PropTypes.func.isRequired,
     email: PropTypes.string.isRequired,

     handleOnSubmit:PropTypes.func.isRequired,
 }
export default PasswordReset;
