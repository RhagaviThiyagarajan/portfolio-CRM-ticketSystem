import React, { useState } from "react";
import './Entry.style.css';
import  LoginComp  from "../../components/login/LoginComp";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import  PasswordReset  from '../../components/PasswordReset/PasswordReset';
import {Navigate}  from "react-router-dom";
import { BrowserRouter,Link, Routes, Route } from "react-router-dom";
import { Form } from "react-bootstrap";


export default  function Entry (){

    const[email,setEmail]=useState();
    const[password,setPassword]=useState("PasswordReset");
    const[formLoad,setFormLoad]=useState("login");


    const handleOnChange=(e)=>
    {
        const {name,value}=e.target;

        switch(name)
        {
            case 'email':
                setEmail(value)
                break

                case 'password':
                    setPassword(value)
                    break

                default:
                    break
        }

    };


    const handleOnSubmit=(e)=>
    {
        e.preventDefault()
        if(!email || !password)
        {
           return alert("fill up all the form");
        }
    };

    

    <BrowserRouter>
    <nav>
<Link to="/PasswordReset"></Link>
</nav>


<Routes>
    <Route path="/#" element={<LoginComp/>}/>
  <Route path="/PasswordReset" element={<PasswordReset/>} />
</Routes>

</BrowserRouter>

//todo call api to submit the form
    console.log(email,password);
 return(
    <div className="entry-page bg-info">
       
        
        <Card>
        <Card style={{ width: '18rem' }}>

      <Card.Body className='form-box'>
      <Card.Text>
{formLoad==="login" ?


        <LoginComp
        email={email}
        password={password}
        setPassword={setPassword}
        handleOnSubmit={handleOnSubmit}
         handleOnChange={handleOnChange}/>:



    <PasswordReset
        
        password={password}
        handleOnSubmit={handleOnSubmit}
         handleOnChange={handleOnChange}/>}
        </Card.Text>
        <Button onClick={<Navigate to= '/PasswordReset'/>}>Click here</Button>

      </Card.Body>
    </Card> 
    </Card>
    </div>
 )
}