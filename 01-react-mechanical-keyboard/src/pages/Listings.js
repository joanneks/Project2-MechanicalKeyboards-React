import React from "react";
import logo1 from './logo.png';
import './css/Listings.css';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';


export default function Listings(props) {
    return (
        <React.Fragment>
            <div className="Listings">
                <Navbar bg="light" expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="#"><img src={logo1} className="Listings-logo" alt="logo" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="#action1">Home</Nav.Link>
                                <Nav.Link href="#" disabled>
                                    Link
                                </Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div className="container row ms-0 me-0">
                    {props.data.map(each => (
                        <div className="col d-flex justify-content-center" key={each._id}>
                            <div>
                                <Card style={{ width: '18rem' }} >
                                    <Card.Img variant="top" src={each.keyboard.keyboardImage} />
                                    <Card.Body>
                                        <Card.Title>{each.keyboard.keyboardBrand} {each.keyboard.keyboardModel}</Card.Title>
                                        <Card.Text>
                                            <Badge pill bg="light" text="dark">{each.keyboard.keyboardSize + "%"}</Badge>{' '}
                                            <Badge pill bg="warning" text="dark">{each.hotSwappable === "true" ? "hot-swappable" : "soldered"}</Badge>{' '}
                                            <Badge pill bg="info">{each.keycap.keycapModel}</Badge>{' '}
                                        </Card.Text>
                                        <Button variant="primary" size="sm" onClick={()=>{props.renderEachListing(each)}}>More Details</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment>
    )
}