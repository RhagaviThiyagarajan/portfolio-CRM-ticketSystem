import React,{useState}from 'react'
import { useEffect } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import AddTicketForm from '../../components/AddTicketForm/AddTicketForm'
import BreadCrumpb from '../../components/breadcrumb/BreadCrumpb'
import {shortText} from '../../utilis/validation';

const initialFormData={
    subject:'',
    issueDate:'',
    details:''
}
const initialFormError={
    subject:false,
    issueDate:false,
    details:false,
}
function AddTicket() {
    const [formData,setFormData]=useState(initialFormData);
    const [formDataError,setFormDataError]=useState(initialFormError);
    useEffect(() => {},[formData]);
    const handleOnChange=(e)=>
    {
const {name,value}=e.target;

 

setFormData({
    ...formData,
    [name]:value,
})

    };

    const handleOnSubmit=async (e)=>
    {
        e.preventDefault();
        setFormDataError(initialFormData)
        const isSubjectValid= await shortText(formData.subject);


 setFormDataError({
            ...initialFormError,
            subject:!isSubjectValid,
        });



        console.log("Form Submit request is received");
    };
    return (
        <Container>
          <Row>
            <Col>
             <BreadCrumpb page="newTicket"/>
            </Col>
          </Row>
    
          <Row>
            <Col>
             <AddTicketForm handleOnSubmit={handleOnSubmit}
             formData={formData} formDataError={formDataError} handleOnChange={handleOnChange}/>
            </Col>
          </Row>
        </Container>
      );
}

export default AddTicket