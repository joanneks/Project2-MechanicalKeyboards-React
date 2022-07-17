import React from "react";
import logo1 from './logo.png';
import editReview from './css/editReview.png'
import deleteReview from './css/deleteReview.png'
import './css/EachListing.css';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';

export default function EachListing(props) {
    return (
        <React.Fragment>
            <div className="EachListing">
                <Navbar bg="light" expand="lg" fixed="top">
                    <Container fluid>
                        <Navbar.Brand href="#">
                            <img src={logo1} style={{ height: '7vh' }} alt="logo" onClick={props.activeStateHomePage} />
                            </Navbar.Brand>
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
                <div className="EachListing-break1"></div>
                <div className="EachListing-content">
                    <Container>
                        <Row>
                            <Col></Col>
                            <Col>
                                <Button variant="outline-success" size="sm" 
                                    className="EachListing-return"
                                    onClick={props.returnPage}
                                    style={{"marginBottom":"20px"}}
                                >Return</Button>
                                <div className="EachListing-header">
                                    <h2 className="EachListing-title">{props.tempList.keyboard.keyboardBrand} {props.tempList.keyboard.keyboardModel} </h2>
                                    <p className="EachListing-post-by">posted by: {props.tempList.user.username}</p>
                                </div>
                                <div className="EachListing-keyboard">
                                    <img src={props.tempList.keyboard.keyboardImage} className="EachListing-keyboard-img" />
                                    <Row>
                                        <Col style={{ width: "80vw" }}>
                                            <Tabs
                                                defaultActiveKey="tempList-keyboard"
                                                id="props.tempList._id"
                                                className="mb-3"
                                                fill
                                            >
                                                <Tab eventKey="tempList-keyboard" title="Keyboard">
                                                    <Table striped bordered hover size="sm">
                                                        <thead>
                                                            <tr>
                                                                <th>Properties</th>
                                                                <th>Details</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td className="EachListing-properties">Brand:</td>
                                                                <td className="EachListing-details">{props.tempList.keyboard.keyboardBrand}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="EachListing-properties">Model:</td>
                                                                <td className="EachListing-details">{props.tempList.keyboard.keyboardModel}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="EachListing-properties">Size:</td>
                                                                <td className="EachListing-details">{props.tempList.keyboard.keyboardSize} %</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                    <span>Click on </span><a href={props.tempList.keyboard.keyboardProductLink} target="blank">product link</a><span> for more details</span>
                                                </Tab>
                                                <Tab eventKey="tempList-keycap" title="Keycap">
                                                    <Table striped bordered hover size="sm">
                                                        <thead>
                                                            <tr>
                                                                <th>Properties</th>
                                                                <th>Details</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td className="EachListing-properties">Manufacturer:</td>
                                                                <td className="EachListing-details">{props.tempList.keycap.keycapManufacturer}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="EachListing-properties">Model:</td>
                                                                <td className="EachListing-details">{props.tempList.keycap.keycapModel}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="EachListing-properties">Profile:</td>
                                                                <td className="EachListing-details">{props.tempList.keycap.keycapProfile}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="EachListing-properties">Material:</td>
                                                                <td className="EachListing-details">{props.tempList.keycap.keycapMaterial}</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </Tab>
                                                <Tab eventKey="tempList-others" title="Others">
                                                    <Table striped bordered hover size="sm">
                                                        <thead>
                                                            <tr>
                                                                <th>Properties</th>
                                                                <th>Details</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td className="EachListing-properties">Switches:</td>
                                                                <td className="EachListing-details">{props.tempList.switches}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="EachListing-properties">Hot-Swappable:</td>
                                                                <td className="EachListing-details">{props.tempList.hotSwappable === "true" ? "Yes" : "No"}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="EachListing-properties">OS Compatibility:</td>
                                                                <td className="EachListing-details">{props.tempList.osCompatibility}</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </Tab>
                                            </Tabs>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="EachListing-reviews">
                                    <div className="EachListing-comment">Comments</div>
                                    <div className="EachListing-comments-existing">
                                        {props.tempList.reviews.map(eachComment=>(
                                            <div className="EachListing-comments-existing-div" key={eachComment.reviewId}>
                                                 <span className="EachListing-comments-existing-username">{eachComment.username}</span>
                                                    <span style={{"float":"right"}}>
                                                        <img src={editReview} alt="editReviewBtn" style={{height:"21px",width:"21px"}}/>
                                                        <img src={deleteReview} alt="deleteReviewBtn" style={{height:"19px",width:"19px"}} 
                                                            onClick={()=>props.deleteComment(eachComment)}/>
                                                    </span>
                                                <div className="EachListing-comments-existing-comment">{eachComment.comments}</div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="EachListing-comment-input">
                                        <input type="text" placeholder="Add a comment"
                                            className="EachListing-add-comment"
                                            name="newComment"
                                            value={props.newComment}
                                            onChange={props.updateFormField}
                                        />
                                        <div className="EachListing-comment-errorMessage">{props.errorMessageAddComment}</div>
                                    </div>
                                    <div>
                                        <div className="EachListing-comment-user-details">
                                            <label className="EachListing-comment-user-details-text">User details is required to add comment</label>
                                            <div className="EachListing-comment-input-field">
                                                <label className="EachListing-comment-label">Username:</label>
                                                <input type="text" className="form-control form-control-sm EachListing-comment-input-username"
                                                    name="username"
                                                    value={props.username}
                                                    onChange={props.updateFormFieldGeneral}
                                                    
                                                />
                                            </div>
                                            <div className="EachListing-comment-input-field">
                                                <label className="EachListing-comment-label">Email:</label>
                                                <input type="email" className="form-control form-control-sm EachListing-comment-input-email"
                                                    name="email"
                                                    value={props.email}
                                                    onChange={props.updateFormFieldGeneral}
                                                />
                                            </div>
                                        </div>
                                        <div className="EachListing-comment-errorMessage">{props.errorMessageAddCommentUser}</div>
                                    </div>
                                    <Button variant="outline-success" size="sm" 
                                        className="EachListing-comment-submit"
                                        onClick={props.addNewComment}
                                        // onClick={props.addCommentValidation}
                                    >Submit</Button>

                                </div>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </React.Fragment>
    )
}