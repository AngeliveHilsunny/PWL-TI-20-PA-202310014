import React, { useEffect, useState } from "react";
import { Button, Row, Col, Container, InputGroup, Modal, ButtonGroup, ToggleButton } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import './Login.css';
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import { PlusCircle, Trash3 } from "react-bootstrap-icons";
import { Navigate } from "react-router-dom";

function Login () {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState("")
    const [direct, setDirect] = useState(false)

    const [inputList, setinputList]= useState([{
        email:"", 
        password:"",
    }]);

    
    const [validated, setValidated] = useState(false);
    const handleSubmitLogin = (event) => {
        event.preventDefault()
        if (email && password) {
        <Navigate to='/home' replace={true} />
        setDirect(true)
        setErrors("")
        }
        else if (!email || !password) {
        setErrors("Masukkan email dan password")
        setDirect(false)
        }
        
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
            return;
        }
    }
        
    if (direct === true) {
        return <Navigate to='/home' replace={true} />
    }
    
    return (
        <div className="wrapper d-flex align-items-center justify-content-center">
            <div className="fromList">
                <h4><font className='fw-bold' color='blue'>Login</font>!</h4>
                <p className='mb-5'><font color='gray'>Insert the data below</font></p>
                <Form noValidate validated={validated} onSubmit={handleSubmitLogin}>
                { 
                    inputList.map( (x,i) => {
                    return(
                        <div className="data-form-input">
                            <Col className="mb-2">
                                <Form.Group className="mb-3" md="4" controlId="validationCustom01">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        className="smaller-input"
                                        required
                                        id="email"
                                        value={email}
                                        type="email"
                                        placeholder="youremail@gmail.com"
                                        onChange={(e) => setEmail(e.target.value)} 
                                    />
                                </Form.Group>
                                
                                <Form.Group className="mb-3" md="4" controlId="validationCustom02">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password" 
                                        required
                                        className="smaller-input"
                                        placeholder="insert your password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)} 
                                    />
                                </Form.Group>
                            </Col>
                        </div>
                    );
                } )} 
                    <ButtonGroup className="d-flex">
                        <Button type="submit" className="mt-4">Login</Button>
                    </ButtonGroup>
                </Form>
            </div>
        </div>
    );
}

export default Login;