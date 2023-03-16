import React, { useState } from "react";
import { Button, Row, Col, Container, InputGroup, Modal } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DataForm.css';
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const DataForm = () => {

    const [FirstName, setFirstName] = useState("");
    const [MiddleName, setMiddleName] = useState("");
    const [LastName, setLastName] = useState("");
    const [NPM, setNPM] = useState(0);
    const [Birthdate, setBirthdate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [validated, setValidated] = useState(false);
    
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        } else {
        event.preventDefault();
        setShow(true);
        }
        setValidated(true);
    }

    const handleClose = () => setShow(false);

    // const date = new Date();
    // const currentYear = date.getFullYear();
    // const Age = currentYear - parseInt(Birthdate.slice(0, 4));
    
    var Age = new Date().getFullYear() - new Date(Birthdate).getFullYear();

    return (
        <div className="wrapper d-flex align-items-center justify-content-center">
            <div className="fromList">
                <h4><font className='fw-bold' color='blue'>Complete</font> your profile</h4>
                <p><font color='gray'>Insert the data below</font></p>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Col className="mb-3 mt-5">
                        <Form.Group className="mb-3" md="4" controlId="validationCustom01">
                            <Form.Label>First Name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Your first name"
                                    onChange={(event) => setFirstName(event.target.value)}
                                />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" md="4" controlId="validationCustom02">
                                <Form.Label>Middle name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Your middle name"
                                    onChange={(event) => setMiddleName(event.target.value)}
                                />
                            <Form.Control.Feedback>Nice!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" md="4" controlId="validationCustom03">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Your last name"
                                    onChange={(event) => setLastName(event.target.value)}
                                />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom04">
                            <Form.Label>NPM</Form.Label>
                            <Form.Control 
                                type="number" 
                                required 
                                maxLength={10}
                                // pattern="[0-9]*"
                                onChange={(event) => setNPM(event.target.value)} />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid NPM.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="6" controlId="validationCustom04">
                            <Form.Label>Birthdate</Form.Label>
                            <DatePicker
                                className="form-control"
                                selected={Birthdate}
                                dateFormat="yyyy-MM-dd"
                                required
                                onChange={(date) => {setBirthdate(date)}}
                            />
                        </Form.Group>
                    </Row>
                    <Button type="submit" className="mt-4">Submit</Button>
                </Form>
            </div>
                <Modal show={show} onHide={handleClose} centered>
                    <Modal.Header closeButton className="d-flex justify-content-center">
                        <Modal.Title>Congrats!
                        </Modal.Title>
                        
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Row>
                                <Col xs="3">NPM</Col>
                                <Col xs="1">: </Col>
                                <Col>{NPM}</Col>
                            </Row>
                            <Row>
                                <Col xs="3">Fullname</Col>
                                <Col xs="1">: </Col>
                            <Col>
                                {FirstName} {MiddleName} {LastName}
                            </Col>
                            </Row>
                            <Row>
                                <Col xs="3">Age</Col>
                                <Col xs="1">: </Col>
                                <Col>
                                    {Age}{" "}
                                    {Age.toString().slice(-1) === 1
                                    ? "st"
                                    : Age.toString().slice(-1) === 2
                                    ? "nd"
                                    : Age.toString().slice(-1) === 3
                                    ? "rd"
                                    : "th"}
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                </Modal>
        </div>
    );
    }


export default DataForm;