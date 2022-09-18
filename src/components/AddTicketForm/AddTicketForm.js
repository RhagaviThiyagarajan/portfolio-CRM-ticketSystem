import React from "react";
import { Card, Form, Button,Row,Col} from "react-bootstrap";
import './AddTicket.css';
import {shortText} from '../../utilis/validation';
import PropTypes from 'prop-types';



function AddTicketForm({ handleOnSubmit, handleOnChange,formData,formDataError }) {
  console.log(formData);
  return (
    <Card className='mt-3 add-new-ticket bg-light'>
      <h1 className='text-info text-center'>Add New Ticket</h1>
      <hr/>
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={3} >Subject</Form.Label>
          <Col sm={9}>
          <Form.Control
            name="subject"
            minLength='3'
            maxLength="100"
          value={ formData.subject}
            onChange={handleOnChange}
            placeholder="Subject"
            required
          ></Form.Control>
          <Form.Text className="text-danger">
            {formDataError.subject && 'subject is required'}
          </Form.Text>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={3}>Issue Form</Form.Label>
          <Col sm={9}>
          <Form.Control
           type="date" name="issueDate" 
           rows="5"
           value={ formData.issueDate}
           onChange={handleOnChange}
           required></Form.Control>
             </Col> 
        </Form.Group>
   
        <Form.Group as={Row}>
          <Form.Label column sm={3} >Password</Form.Label>
          <Col sm={9}>
          <Form.Control
           type="textarea" name="details" 
           rows="5"
           value={ formData.details}
           onChange={handleOnChange}
           required></Form.Control>
          </Col>
        </Form.Group>

      </Form>
      <Button type="submit" variant="info"block="true" >submit</Button>
    </Card>
  );
}
AddTicketForm.propTypes={
  handleOnSubmit:PropTypes.func.isRequired,
  handleOnChange:PropTypes.func.isRequired,
  formData:PropTypes.object.isRequired,
};
export default AddTicketForm;
