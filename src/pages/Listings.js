import React from "react";
import logo1 from './css/logo.png';
import editListing from './css/editLogo.png'
import deleteListing from './css/deleteLogo.png'
import closeSearch from './css/closeLogo.png'
import closeEdit from './css/closeLogo.png'
import closeDelete from './css/closeLogo.png'
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
                <Navbar className="Listings-navbar-color" bg="light" expand="lg" fixed="top">
                    <Container fluid>
                        <Navbar.Brand href="">
                            <img src={logo1} style={{ height: '7vh' }} alt="logo" onClick={props.activeStateHomePage} />
                        </Navbar.Brand>
                        <Navbar id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                navbarScroll
                            >
                                <Nav.Link className="navbar-links" onClick={props.activeStateCreate}>Create</Nav.Link>
                                <Nav.Link className="navbar-links" onClick={props.searchDisplay}>Search</Nav.Link>
                            </Nav>
                        </Navbar>
                    </Container>
                </Navbar>
                <div className="Listings-break"></div>
                <div className="Listings-search-div" style={{ display: props.displaySearch }}>
                    <div className="Listings-search-header">
                        <span className="Listings-search-label">
                            Search Filters
                        </span>
                        <span>
                            <img src={closeSearch} alt="closeSearchBtn"
                                className="Listings-search-close"
                                onClick={props.closeSearch}
                            />
                        </span>
                    </div>

                    <div style={{ marginTop: "10px" }}>
                        <label className="Listings-filter-label">OS Compatibility: </label>
                        <select style={{ width: "110px" }}
                            value={props.osCompatibilitySearch}
                            onChange={props.updateFormFieldGeneral}
                            name="osCompatibilitySearch"
                            className="Listings-filter-options form-select form-select-sm"
                            aria-label="multiple select example"
                        >
                            <option value="">All</option>
                            <option value="Windows" >Windows</option>
                            <option value="Mac">Mac</option>
                            <option value="Linux">Linux</option>
                        </select>
                    </div>
                    <div style={{ display: "inline-block", marginTop: "20px" }}>
                        <label className="Listings-filter-label">Hot-Swappable:</label>
                        <div style={{ display: "inline-block" }}>
                            <div className="Listings-filter-options form-check">
                                <input className="form-check-input" type="radio"
                                    value="true"
                                    name="hotSwappableSearch"
                                    onChange={props.updateFormFieldGeneral}
                                    checked={props.hotSwappableSearch === "true"}
                                />
                                <label className="form-check-label" style={{ marginRight: "10px" }}>
                                    Yes
                                </label>
                            </div>
                            <div className="Listings-filter-options form-check">
                                <input className="form-check-input" type="radio"
                                    value="false"
                                    name="hotSwappableSearch"
                                    onChange={props.updateFormFieldGeneral}
                                    checked={props.hotSwappableSearch === "false"}
                                />
                                <label className="form-check-label" style={{ marginRight: "10px" }}>
                                    No
                                </label>
                            </div>
                            <div className="Listings-filter-options form-check">
                                <input className="form-check-input" type="radio"
                                    value=""
                                    name="hotSwappableSearch"
                                    onChange={props.updateFormFieldGeneral}
                                    checked={props.hotSwappableSearch === ""}
                                />
                                <label className="form-check-label" style={{ marginRight: "10px" }}>
                                    All
                                </label>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: "10px" }}>
                        <label className="Listings-filter-label">Keyboard Size:</label>
                        <div style={{ width: "40vw", display: "inline-block" }}>
                            <div className="Listings-multiselect">
                                <div className="form-check Listings-multiselect-options">
                                    <input className="form-check-input Listings-filter-options"
                                        type="checkbox"
                                        value="60"
                                        name="keyboardSize"
                                        onChange={props.keyboardSizeSelected}
                                        checked={props.keyboardSize.includes("60")}
                                    />
                                    <label className="form-check-label">60%</label>
                                </div>
                                <div className="form-check Listings-multiselect-options">
                                    <input className="form-check-input Listings-filter-options"
                                        type="checkbox"
                                        value="65"
                                        name="keyboardSize"
                                        onChange={props.keyboardSizeSelected}
                                        checked={props.keyboardSize.includes("65")}
                                    />
                                    <label className="form-check-label">65%</label>
                                </div>
                                <div className="form-check Listings-multiselect-options">
                                    <input className="form-check-input Listings-filter-options"
                                        type="checkbox"
                                        value="75"
                                        name="keyboardSize"
                                        onChange={props.keyboardSizeSelected}
                                        checked={props.keyboardSize.includes("75")}
                                    />
                                    <label className="form-check-label">75%</label>
                                </div>
                                <div className="form-check Listings-multiselect-options">
                                    <input className="form-check-input Listings-filter-options"
                                        type="checkbox"
                                        value="80"
                                        name="keyboardSize"
                                        onChange={props.keyboardSizeSelected}
                                        checked={props.keyboardSize.includes("80")}
                                    />
                                    <label className="form-check-label">80%</label>
                                </div>
                                <div className="form-check Listings-multiselect-options">
                                    <input className="form-check-input Listings-filter-options"
                                        type="checkbox"
                                        value="100"
                                        name="keyboardSize"
                                        onChange={props.keyboardSizeSelected}
                                        checked={props.keyboardSize.includes("100")}
                                    />
                                    <label className="form-check-label">100%</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: "10px" }}>
                        <label className="Listings-filter-label-keyboard">Keyboard Brands: </label>
                        <div name="keyboardBrand" className="Listings-multiselect-options-brands">
                            {props.keyboardBrandOptions.map(eachKeyboardBrand => (
                                <React.Fragment key={eachKeyboardBrand}>
                                    <div className="form-check" style={{ marginLeft: "10px" }}>
                                        <input className="form-check-input"
                                            type="checkbox"
                                            value={eachKeyboardBrand}
                                            name="keyboardBrand"
                                            onChange={props.keyboardBrandSelected}
                                            checked={props.keyboardBrand.includes(eachKeyboardBrand)}
                                        />
                                        <label className="form-check-label">{eachKeyboardBrand}</label>
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                    <div style={{ marginTop: "20px" }}>
                        <label>Keyboard Model:</label>
                        <input type="text"
                            className="form-control"
                            name="textSearch"
                            placeholder="Optional"
                            onChange={props.updateFormFieldGeneral} />
                    </div>

                    <button className="btn btn-primary" style={{ marginTop: "20px" }} onClick={props.deriveSearch}>Submit</button>
                </div>
                <div className="Listings-break1"><h2 className="Listings-search-count">{props.dataCountMessage}</h2></div>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {props.data.map(each => (
                        <Col key={each._id}>
                            <div className="col d-flex justify-content-center">
                                <div>
                                    <Card style={{ width: '18rem' }} >
                                        <Card.Img variant="top" src={each.keyboard.keyboardImage} className="Listings-card-img" />
                                        <Card.Body>
                                            <Card.Title className="Listings-card-title">{each.keyboard.keyboardBrand} {each.keyboard.keyboardModel}</Card.Title>
                                            <Card.Text className="Listings-card-text">
                                                <Badge className="Listings-badge" pill bg="light" text="dark">{each.keyboard.keyboardSize + "%"}</Badge>{' '}
                                                <Badge pill bg="warning" text="dark">{each.hotSwappable === "true" ? "hot-swappable" : "soldered"}</Badge>{' '}
                                                <Badge pill bg="info">{each.keycap.keycapModel}</Badge>{' '}
                                            </Card.Text>
                                            <Button variant="primary" size="sm" onClick={() => props.activeStateEachListing(each)}>More Details</Button>
                                            <span style={{ "float": "right" }}>
                                                <img src={editListing} alt="editListingBtn"
                                                    style={{ height: "34px", width: "34px" }}
                                                    onClick={() => { props.displayEditConfirmation(each) }}
                                                />
                                                <img src={deleteListing} alt="deleteListingBtn"
                                                    style={{ height: "30px", width: "30px" }}
                                                    onClick={() => { props.displayDeleteConfirmation(each) }}
                                                />
                                            </span>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>

                        </Col>
                    ))}
                </Row>
                <div style={{ display: props.displayDelete }} className="Listings-delete-display">
                    <div style={{ display: props.displayDeleteVerification }}>
                        <h2 className="Listings-verification-title">Verification Required
                            <span>
                                <img src={closeDelete} alt="closeDeleteBtn"
                                    className="Listings-delete-close"
                                    onClick={props.closeDelete}
                                />
                            </span>
                        </h2>
                        <div className="Listings-verification-details">Only the creator of this post <span className="Listings-verification-details-span">{"<" + props.listingToDelete.keyboard.keyboardBrand + " " + props.listingToDelete.keyboard.keyboardModel + " >"}</span> can delete.</div>
                        <div>
                            <input type="email" className="form-control"
                                name="deleteEmailToVerify"
                                value={props.deleteEmailToVerify}
                                onChange={props.updateFormFieldGeneral} />
                        </div>
                        <div className="Listings-verification-status" style={{ display: props.deleteEmailNotVerified }}>Email Verification Failed. Please try again.</div>
                        <button className="btn btn-success verify-button" onClick={props.deleteListingEmailCheck}>Verify Email</button>
                    </div>
                    <div style={{ display: props.deleteEmailVerified }}>
                        <h2 className="Listings-verification-title">Email Verified
                            <span>
                                <img src={closeDelete} alt="closeDeleteBtn"
                                    className="Listings-delete-close"
                                    onClick={props.closeDelete}
                                />
                            </span>
                        </h2>
                        <div className="Listings-verification-details">Are you sure you want to delete?</div>
                        <div className="verify-button">
                            <button className="btn btn-danger btn-sm Listings-verify-buttons" onClick={props.deleteListingYes}>Yes</button>
                            <button className="btn btn-success btn-sm Listings-verify-buttons" onClick={props.deleteListingNo}>No</button>
                        </div>
                    </div>
                    <div style={{ display: props.displayDeleteStatus }}>
                        <h4>Listing has been deleted successfully</h4>
                    </div>
                </div>


                <div style={{ display: props.displayEdit }} className="Listings-edit-display">
                    <div style={{ display: props.displayEditVerification }}>
                        <h2 className="Listings-verification-title">Verification Required
                            <span>
                                <img src={closeEdit} alt="closeEditBtn"
                                    className="Listings-edit-close"
                                    onClick={props.closeEdit}
                                />
                            </span>
                        </h2>
                        <div className="Listings-verification-details">Only the creator of this post <span className="Listings-verification-details-span">{"<" + props.listingToEdit.keyboard.keyboardBrand + " " + props.listingToEdit.keyboard.keyboardModel + " >"}</span> can edit.</div>
                        <div>
                            <input type="email" className="form-control"
                                name="editEmailToVerify"
                                value={props.editEmailToVerify}
                                onChange={props.updateFormFieldGeneral} />
                        </div>
                        <div className="Listings-verification-status" style={{ display: props.editEmailNotVerified }}>Email Verification Failed. Please try again.</div>
                        <button className="btn btn-success Listings-verify-button" onClick={props.editListingEmailCheck}>Verify Email</button>
                    </div>
                    <div style={{ display: props.editEmailVerified }}>
                        <h2 className="Listings-verification-title">Email Verified
                            <span>
                                <img src={closeEdit} alt="closeEditBtn"
                                    className="Listings-edit-close"
                                    onClick={props.closeEdit}
                                />
                            </span>
                        </h2>
                        <div className="Listings-verification-details">Are you sure you want to edit?</div>
                        <div className="Listings-verify-button">
                            <button className="btn btn-danger btn-sm Listings-verify-buttons" onClick={props.editListingYes}>Yes</button>
                            <button className="btn btn-success btn-sm Listings-verify-buttons" onClick={props.editListingNo}>No</button>
                        </div>
                    </div>
                    <div style={{ display: props.displayEditStatus }}>
                        <h4>Listing has been updated successfully</h4>
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}