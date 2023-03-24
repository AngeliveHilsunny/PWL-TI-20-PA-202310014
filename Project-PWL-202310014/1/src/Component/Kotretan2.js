import React, { useEffect, useState } from "react";
import { Button, Row, Col, Container, InputGroup, Modal, ButtonGroup, ToggleButton } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DataFormMultiple.css';
import DatePicker from "react-datepicker"
import { PlusCircle, Trash3 } from "react-bootstrap-icons";



function DataFormMultiple () {
    // const Age = currentYear - parseInt(Birthdate.slice(0, 4));
    var today = new Date();
    const currentYear = formatDate(today);
    const [inputList, setinputList]= useState([{
        firstName:'', 
        middleName:'',
        lastName:'',
        npm: 0,
        Birthdate: currentYear
    }]);

    const handleinputchange=(e, index)=>{
        const {name, value}= e.target;
        const list= [...inputList];
        list[index][name]= value;
        setinputList(list);

    }
    
    const handleremove= index=>{
        const list=[...inputList];
        list.splice(index,1);
        setinputList(list);
    }
    
    const handleaddclick=()=>{ 
        setinputList([...inputList, { 
            firstName:'', 
            middleName:'',
            lastName:'',
            npm: 0,
            Birthdate: currentYear
        }]);
    }

    // const [Birthdate, setBirthdate] = useState(new Date());
    const [inputDataSet, setInputDataSet] = useState(inputList);
    const [show, setShow] = useState(false);
    const [validated, setValidated] = useState(false);
    // const [postData, setPostData] = useState([inputList]);
    const [modalData, setModalData] = useState({show: false, message: ''});
    

    const handleSubmit = (e) => {
        e.preventDefault(); 
        var form = e.target.id;
        var target = document.getElementById(form);
        // var buttonSubmit = target.getElementsByClassName("btn-submit")[0];
        // buttonSubmit.textContent = "Loading...";
        // buttonSubmit.disabled = true;
        const hookContent = (
            <Container>
                <Row>
                    <Col xs="3">NPM</Col>
                    <Col xs="1">: </Col>
                    <Col>{inputDataSet.npm}</Col>
                </Row>
                <Row>
                    <Col xs="3">Fullname</Col>
                    <Col xs="1">: </Col>
                <Col>
                    {inputDataSet.firstName} {inputDataSet.middleName} {inputDataSet.lastName}
                </Col>
                </Row>
                <Row>
                    <Col xs="3">Age</Col>
                    <Col xs="1">: </Col>
                    <Col>
                        {calculateAge(inputDataSet.birthdate)}
                    </Col>
                </Row>
            </Container>
        )
        setModalData({...modalData, message: hookContent, show: true});
        // buttonSubmit.textContent = "Submit";
        // buttonSubmit.disabled = false;
    }
    const handleClose = () => setModalData(false);

    // const currentYear = date.getFullYear();
    return (
        <div className="wrapper d-flex align-items-center justify-content-center">
            <div className="fromList">
                <h4><font className='fw-bold' color='blue'>Input</font> student profile</h4>
                <p className='mb-5'><font color='gray'>Insert the data below</font></p>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                { 
                    inputList.map( (x,i) => {
                    return(
                        <div className="data-form-input">
                            <Row className="mb-2">
                                <Form.Group className="mb-3" as={Col} md="2" controlId="validationCustom01">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="First name"
                                        onChange={ (e) => {handleinputchange(e,i); setInputDataSet({ ...inputDataSet, firstName: e.target.value })}}
                                    />
                                </Form.Group>
                                
                                <Form.Group className="mb-3" as={Col} md="2" controlId="validationCustom02">
                                    <Form.Label>Middle name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Middle name"
                                        onChange={ (e) => {handleinputchange(e,i); setInputDataSet({ ...inputDataSet, middleName: e.target.value })}}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" md="2" as={Col} controlId="validationCustom03">
                                        <Form.Label>Last name</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Last name"
                                            onChange={ (e) => {handleinputchange(e,i); setInputDataSet({ ...inputDataSet, lastName: e.target.value })}}
                                            />
                                </Form.Group>
                                
                                <Form.Group as={Col} md="2" controlId="validationCustom04">
                                    <Form.Label>NPM</Form.Label>
                                    <Form.Control 
                                        type="number" 
                                        required 
                                        maxLength={10}
                                        // pattern="[0-9]*"
                                        onChange={ (e) => {handleinputchange(e,i); setInputDataSet({ ...inputDataSet, npm: e.target.value })}}
                                        />
                                </Form.Group>

                                <Form.Group as={Col} md="2" controlId="validationCustom04">
                                    <Form.Label>Birthdate</Form.Label>
                                    <DatePicker
                                        className="form-control"
                                        selected={today}
                                        dateFormat="yyyy-MM-dd"
                                        required
                                        onChange={(value) =>
                                            {handleinputchange(i); setInputDataSet({ ...inputDataSet, Birthdate: currentYear(value) })}
                                        }
                                        />
                                </Form.Group>

                                { inputList.length!==1 &&
                                    <ButtonGroup as={Col} className="align-items-end mb-3" md="1">
                                        <ToggleButton className="remove-button"
                                            id="toggle-check"
                                            type="checkbox"
                                            onClick={ handleremove }
                                            >
                                        <Trash3 className="my-2"/>
                                            </ToggleButton>
                                    </ButtonGroup>
                                }
                            </Row>
                        
                            { inputList.length-1===i &&
                                <ButtonGroup className="mb-3 add-button">
                                    <ToggleButton className="add-button"
                                        id="toggle-check"
                                        type="checkbox"
                                        onClick={ handleaddclick }
                                        >
                                    <PlusCircle className="me-2 my-1"/>
                                        Add new row
                                        </ToggleButton>
                                </ButtonGroup>
                            }
                        </div>
                    );
                } )} 
                    <ButtonGroup className="d-flex">
                        <Button type="submit" className="mt-4">Save</Button>
                    </ButtonGroup>
                </Form>
            </div>
            <ModalPopUP
            show={modalData.show}
            handleClose={handleClose}
            message={modalData.message}
        />
        </div>
    );
}

const ModalPopUP = ({ show, handleClose, message }) => {
    return (
        <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton className="d-flex justify-content-center">
            <Modal.Title>Congrats!
            </Modal.Title>
            
        </Modal.Header>
        <Modal.Body>
            {message}
        </Modal.Body>
        </Modal>
    )
}

const formatDate = (dateString) => {
    const today = new Date(dateString);
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    return yyyy + "-" + mm + "-" + dd;
};

const calculateAge = (birthdate) => {
    var today = new Date();
    var birthdate = new Date(birthdate);
    var age = today.getFullYear() - birthdate.getFullYear();
    var m = today.getMonth() - birthdate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
    age--; // tahun dikurangi, untuk di konversi ke bulan
    }
    return age;
};


export default DataFormMultiple;