import React from "react";
import logo1 from './logo.png';
import editListing from './css/editLogo.png'
import deleteListing from './css/deleteLogo.png'
import './css/Listings.css';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Listings(props) {
    return (
        <React.Fragment>
            <div className="Listings">
                <Navbar bg="light" expand="lg" fixed="top">
                    <Container fluid>
                        <Navbar.Brand href="#">
                            <img src={logo1} style={{ height: '7vh' }} alt="logo" onClick={props.activeStateHomePage} />
                        </Navbar.Brand>
                        <Navbar id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                navbarScroll
                            >
                                <Nav.Link onClick={props.activeStateCreate}>Create</Nav.Link>
                                <Nav.Link onClick={props.searchDisplay}>Search</Nav.Link>
                            </Nav>
                        </Navbar>
                    </Container>
                </Navbar>
                <div className="Listings-break1"></div>
                <div style={{display:props.displaySearch}}>
                    <div>
                        <label>OS Compatibility: </label>
                        <select className="form-select" aria-label="multiple select example">
                            <option selected value="Windows">Windows</option>
                            <option value="Mac">Mac</option>
                            <option value="Linux">Linux</option>
                        </select>
                    </div>
                    <div>
                        <label>Hot-Swappable: </label>
                        <div style={{display:"flex",flexWrap:"wrap"}}>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" value="true" name="hotSwappable"/>
                                <label className="form-check-label">
                                    Yes
                                </label>
                            </div>
                            <div>
                                <input className="form-check-input" type="radio" value="false" name="hotSwappable"/>
                                <label className="form-check-label">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label>Keyboard Size: </label>
                        <div style={{display:"flex",flexWrap:"wrap"}}>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="60" name="keyboardSize"/>
                                <label className="form-check-label">60%</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="65" name="keyboardSize"/>
                                <label className="form-check-label">65%</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="75" name="keyboardSize"/>
                                <label className="form-check-label">75%</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="80" name="keyboardSize"/>
                                <label className="form-check-label">80%</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="100" name="keyboardSize"/>
                                <label className="form-check-label">100%</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label>Brands: </label>
                        <select className="form-select" multiple aria-label="multiple select example">
                            <option selected value="Windows">Windows</option>
                            <option value="Mac">Mac</option>
                            <option value="Linux">Linux</option>
                        </select>
                    </div>
                </div>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {props.data.map(each => (
                        <Col key={each._id}>
                            <div className="col d-flex justify-content-center">
                                <div>
                                    <Card style={{ width: '18rem' }} >
                                        <Card.Img variant="top" src={each.keyboard.keyboardImage} className="Listings-card-img" />
                                        <Card.Body>
                                            <Card.Title>{each.keyboard.keyboardBrand} {each.keyboard.keyboardModel}</Card.Title>
                                            <Card.Text className="Listings-card-text">
                                                <Badge pill bg="light" text="dark">{each.keyboard.keyboardSize + "%"}</Badge>{' '}
                                                <Badge pill bg="warning" text="dark">{each.hotSwappable === "true" ? "hot-swappable" : "soldered"}</Badge>{' '}
                                                <Badge pill bg="info">{each.keycap.keycapModel}</Badge>{' '}
                                            </Card.Text>
                                            <Button variant="primary" size="sm" onClick={() => props.activeStateEachListing(each)}>More Details</Button>
                                            <span style={{ "float": "right" }}>
                                                <img src={editListing} alt="editListingBtn"
                                                    style={{ height: "34px", width: "34px" }}
                                                />
                                                <img src={deleteListing} alt="deleteListingBtn"
                                                    style={{ height: "30px", width: "30px" }}
                                                />
                                            </span>
                                            </Card.Body>
                                    </Card>
                                </div>
                            </div>

                        </Col>
                    ))}
                </Row>

            </div>
        </React.Fragment>
    )
}