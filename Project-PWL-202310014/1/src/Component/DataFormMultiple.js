import React, { useEffect, useState } from "react";
import { Button, Row, Col, Container, InputGroup, Modal, ButtonGroup, ToggleButton } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import './DataFormMultiple.css';
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import { PlusCircle, Trash3 } from "react-bootstrap-icons";

function DataFormMultiple () {
    // var today = new Date();
    // const currentYear = formatDate(today);
    const [inputList, setinputList]= useState([{
        firstName:"", 
        middleName:"",
        lastName:"",
        npm: 0,
        birthdate: new Date()
    }]);

    const [inputDataSet, setInputDataSet] = useState({firstName:'', middleName:'', lastName:'', npm: 0, birthdate: new Date()});
    
    const [validated, setValidated] = useState(false);
    const [show, setShow] = useState(false); 
    const [modalData, setModalData] = useState({
        show: false,
        message: "",
    });
    
    const [fullName, setFullName] = useState('');
    const handleinputchange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        const newData = {
            ...list[index],
            [name]: value,
            npm: parseInt(value)
        };
        const fullName = `${newData.firstName} ${newData.middleName} ${newData.lastName}`;
        setFullName(fullName);
        
        list[index] = newData;
        setinputList(list);
        setInputDataSet({ ...inputDataSet, ...newData });
    };
    

    const handleremove= index=>{
        const list=[...inputList];
        list.splice(index,1);
        setinputList(list);
    }
    
    const handleaddclick=()=>{ 
        setinputList([...inputList, { 
            firstName: "",
            middleName: "",
            lastName: "",
            npm: 0,
            birthdate: new Date()
        }]);
    }

    useEffect(() => {
        const fullName = inputList.map(data => `${data.firstName} ${data.middleName} ${data.lastName}`).join(', ')
        setFullName(fullName)
      }, [inputList])

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
            setValidated(true);
            return;
        }
        setShow(true);
        const hookContent = (
            <div>
                {inputList.map((v, index) => (
                    v &&
                    <Container key={index} data={v} index={index}>
                        <Row>
                            <Col xs="3">NPM</Col>
                            <Col xs="1">: </Col>
                            <Col>{v.npm}</Col>
                        </Row>
                        <Row>
                            <Col xs="3">Fullname</Col>
                            <Col xs="1">: </Col>
                        <Col>
                        {`${inputDataSet.firstName} ${inputDataSet.middleName} ${inputDataSet.lastName}`}
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
                    
                ))}
            </div>
        )
        setModalData({...modalData, message: hookContent, show: true});
    }
    
    // const handleClose = () => setModalData(false);
    const handleClose = () => {
        setModalData({ show: false, message: '' });
        setShow(false);
    }

    const calculateAge = (birthdate) => {
        var today = new Date();
        var birthDate = new Date(birthdate);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
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
                                        className="smaller-input"
                                        required
                                        type="text"
                                        placeholder="First name"
                                        onChange={ (e) => {handleinputchange(e,i); setInputDataSet({ ...inputDataSet, firstName: e.target.value })}}
                                    />
                                </Form.Group>
                                
                                <Form.Group className="mb-3" as={Col} md="2" controlId="validationCustom02">
                                    <Form.Label>Middle name</Form.Label>
                                    <Form.Control
                                        className="smaller-input"
                                        type="text"
                                        placeholder="Middle name"
                                        onChange={ (e) => {handleinputchange(e,i); setInputDataSet({ ...inputDataSet, middleName: e.target.value })}}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" md="2" as={Col} controlId="validationCustom03">
                                        <Form.Label>Last name</Form.Label>
                                        <Form.Control
                                            className="smaller-input"
                                            required
                                            type="text"
                                            placeholder="Last name"
                                            onChange={ (e) => {handleinputchange(e,i); setInputDataSet({ ...inputDataSet, lastName: e.target.value })}}
                                            />
                                </Form.Group>
                                
                                <Form.Group as={Col} md="2" controlId="validationCustom04">
                                    <Form.Label>NPM</Form.Label>
                                    <Form.Control 
                                        className="smaller-input"
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
                                        className="form-control smaller-input"
                                        selected={new Date(inputDataSet.birthdate)}
                                        dateFormat="yyyy-MM-dd"
                                        required
                                        onChange={(value) =>
                                            setInputDataSet({ ...inputDataSet, birthdate: formatDate(value) })
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
                                        <Trash3 className="my-1 trash"/>
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

const formatDate = (datestring) => {
    const today = new Date(datestring);
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    return yyyy + "-" + mm + "-" + dd;
}




export default DataFormMultiple;