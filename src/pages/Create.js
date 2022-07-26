import React from "react";
import logo1 from './logo.png';
import './css/Create.css';


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function Create(props) {
    return (
        <React.Fragment>
            <div className="Create">
                <Navbar className="Create-navbar-color" bg="light" expand="lg" fixed="top">
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
                                <Nav.Link className="navbar-links" onClick={props.activeStateListings}>All Listings</Nav.Link>
                            </Nav>
                        </Navbar>
                    </Container>
                </Navbar>
                <div className="Create-break1"></div>
                <Container className="Create-container">
                    <div className="Create-container-div row">
                        <div className=" col-12 col-sm-5 col-md-4 col-lg-3">
                            <label>OS Compatibility: </label>
                        </div>
                        <div className="col-12 col-sm-7 col-md-7 col-lg-8">
                            <div className="Create-container-div-osCompatibility">
                                <div>
                                    <input type="checkbox"
                                        value="Windows"
                                        name="osCompatibilityInput"
                                        onChange={props.osCompatibilityInputSelected}
                                        className="form-check-input" />
                                    <label className="osCompatibility-label form-check-label">Windows</label>
                                </div>
                                <div>
                                    <input type="checkbox"
                                        value="Mac"
                                        name="osCompatibilityInput"
                                        onChange={props.osCompatibilityInputSelected}
                                        className="form-check-input" />
                                    <label className="osCompatibility-label form-check-label">Mac</label>
                                </div>
                                <div>
                                    <input type="checkbox"
                                        value="Linux"
                                        name="osCompatibilityInput"
                                        onChange={props.osCompatibilityInputSelected}
                                        className="form-check-input" />
                                    <label className="osCompatibility-label form-check-label">Linux</label>
                                </div>
                            </div>
                            <div className="Create-div-input-error">{props.osCompatibilityInputError}
                            </div>
                        </div>
                    </div>
                    <div className="Create-container-div">
                        <div className="row">
                            <div className="col-12 col-sm-5 col-md-4 col-lg-3">
                                <label>Hot Swappable:</label>
                            </div>
                            <div className=" col-12 col-sm-7 col-md-3 col-lg-3">
                                <select className="form-select form-select-sm"
                                    name="hotSwappableInput"
                                    value={props.hotSwappableInput}
                                    onChange={props.updateFormFieldGeneral}
                                >
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </select>
                            </div>
                        <div className="Create-div-input-error"></div>
                        </div>
                    </div>
                    <div className="Create-container-div row">
                        <div className="col-12 col-sm-5 col-md-4 col-lg-3">
                            <label>Switch Name:</label>
                        </div>
                        <div style={{ display: "inline" }} className="col-12 col-sm-7 col-md-7 col-lg-8">
                            <textarea
                                name="switchesInput"
                                value={props.switchesInput}
                                onChange={props.updateFormFieldGeneral}
                                placeholder="e.g Cherry Speed Silver Switches"
                                rows="1"
                                className="col-12 form-control"
                            >
                            </textarea>
                            <div className="Create-div-input-error">{props.switchesInputError}</div>

                        </div>
                    </div>
                    <div className="Create-container-div row">
                        <div className="col-12 col-sm-5 col-md-4 col-lg-3">
                            <label>Keyboard Brand:</label>
                        </div>
                        <div className="col-12 col-sm-7 col-md-7 col-lg-8">
                            <select className="form-select form-select-sm"
                                name="keyboardBrandInput"
                                value={props.keyboardBrandInput}
                                onChange={props.updateFormFieldGeneral}
                            >
                                {props.keyboardBrandOptions.map(eachKeyboardBrand => (
                                    <React.Fragment key={eachKeyboardBrand}>
                                        <option value={eachKeyboardBrand}>{eachKeyboardBrand}</option>
                                    </React.Fragment>
                                ))}
                                <option value="new-input">Add Brand</option>
                            </select>
                        </div>
                        <div className="Create-container-div">
                            {props.keyboardBrandInput === "new-input" ?
                                <div className="row">
                                    <div className="col-1 col-sm-5 col-md-4 col-lg-3">
                                    </div>
                                    <div className="col-12 col-sm-7 col-md-7 col-lg-8">
                                        <label className="col-12">New Keyboard Brand:</label>
                                        <div className="col-12">
                                            <input type="text" name="keyboardBrandInputNew"
                                                value={props.keyboardBrandInputNew}
                                                onChange={props.updateFormFieldGeneral}
                                                className="col-12 form-control"
                                            />
                                        </div>
                                        <div className="col-1 col-sm-5 col-md-4 col-lg-3">
                                        </div>
                                        <div className="Create-div-input-error col-12">{props.keyboardBrandInputError}</div>
                                    </div>
                                </div>
                                : <div></div>
                            }
                        </div>
                    </div>
                    <div className="Create-container-div row">
                        <div className="col-12 col-sm-5 col-md-4 col-lg-3">
                            <label>Keyboard Model:</label>
                        </div>
                        <div className="col-12 col-sm-7 col-md-7 col-lg-8">
                            <input type="text"
                                className="col-12  form-control"
                                placeholder="e.g GMMK 2"
                                name="keyboardModelInput"
                                value={props.keyboardModelInput}
                                onChange={props.updateFormFieldGeneral} />
                            <div className="Create-div-input-error">{props.keyboardModelInputError}</div>
                        </div>
                    </div>
                    <div className="Create-container-div row">
                        <div className="col-12 col-sm-5 col-md-4 col-lg-3">
                            <label>Keyboard Size:</label>
                        </div>
                        <div className="col-12 col-sm-7 col-md-7 col-lg-8">
                            <div style={{ display: "flex", flexWrap: "wrap" }}>
                                <div>
                                    <input className="form-check-input" type="radio"
                                        value="60"
                                        name="keyboardSizeInput"
                                        onChange={props.updateFormFieldGeneral}
                                        checked={props.keyboardSizeInput === "60"}
                                    />
                                    <label className="form-check-label keyboardSize-label">60%</label>
                                </div>
                                <div>
                                    <input className="form-check-input" type="radio"
                                        value="65"
                                        name="keyboardSizeInput"
                                        onChange={props.updateFormFieldGeneral}
                                        checked={props.keyboardSizeInput === "65"}
                                    />
                                    <label className="form-check-label keyboardSize-label">65%</label>
                                </div>
                                <div>
                                    <input className="form-check-input" type="radio"
                                        value="75"
                                        name="keyboardSizeInput"
                                        onChange={props.updateFormFieldGeneral}
                                        checked={props.keyboardSizeInput === "75"}
                                    />
                                    <label className="form-check-label keyboardSize-label">75%</label>
                                </div>
                                <div>
                                    <input className="form-check-input" type="radio"
                                        value="80"
                                        name="keyboardSizeInput"
                                        onChange={props.updateFormFieldGeneral}
                                        checked={props.keyboardSizeInput === "80"}
                                    />
                                    <label className="form-check-label keyboardSize-label">80%</label>
                                </div>
                                <div>
                                    <input className="form-check-input" type="radio"
                                        value="100"
                                        name="keyboardSizeInput"
                                        onChange={props.updateFormFieldGeneral}
                                        checked={props.keyboardSizeInput === "100"}
                                    />
                                    <label className="form-check-label keyboardSize-label">100%</label>
                                </div>
                            </div>
                            <div className="Create-div-input-error">{props.keyboardSizeInputError}</div>
                        </div>
                    </div>
                    <div className="Create-container-div row">
                        <label className="col-12 col-sm-5 col-md-4 col-lg-3">Keyboard Product Link:</label>
                        <div className="col-12 col-sm-7 col-md-7 col-lg-8">
                            <textarea
                                name="keyboardProductLinkInput"
                                rows="2"
                                className="col-12 form-control"
                                placeholder="e.g https://"
                                value={props.keyboardProductLinkInput}
                                onChange={props.updateFormFieldGeneral}>
                            </textarea>
                            <div className="Create-div-input-error">{props.keyboardProductLinkInputError}</div>
                        </div>
                    </div>
                    <div className="Create-container-div row">
                        <label className="col-12 col-sm-5 col-md-4 col-lg-3">Keyboard Image Link:</label>
                        <div className="col-12 col-sm-7 col-md-7 col-lg-8">
                            <textarea
                                name="keyboardImageInput"
                                rows="1"
                                className="col-12 form-control"
                                placeholder="e.g https://"
                                value={props.keyboardImageInput}
                                onChange={props.updateFormFieldGeneral}>
                            </textarea>
                            <div className="Create-div-input-error">{props.keyboardImageInputError}</div>
                        </div>
                    </div>
                    <div className="Create-container-div row">
                        <label className="col-12 col-sm-5 col-md-4 col-lg-3">Keycap Model:</label>
                        <div className="col-12 col-sm-7 col-md-7 col-lg-8">
                            <input type="text"
                                name="keycapModelInput"
                                className="col-12 form-control"
                                placeholder="e.g Black and Silver"
                                value={props.keycapModelInput}
                                onChange={props.updateFormFieldGeneral} />
                            <div className="Create-div-input-error">{props.keycapModelInputError}</div>
                        </div>
                    </div>
                    <div className="Create-container-div row">
                        <div className="col-12 col-sm-5 col-md-4 col-lg-3">
                            <label>Keycap Material:</label>
                        </div>
                        <div className="col-12 col-sm-6 col-md-7 col-lg-8 Create-container-div-keycapMaterial">
                            {props.keycapMaterialOptions.map(eachKeycapMaterial => (
                                <div key={eachKeycapMaterial}>
                                    <input className="form-check-input" type="radio"
                                        value={eachKeycapMaterial}
                                        name="keycapMaterialInput"
                                        onChange={props.updateFormFieldGeneral}
                                        checked={props.keycapMaterialInput === eachKeycapMaterial}
                                    />
                                    <label className="form-check-label keycapMaterial-label">{eachKeycapMaterial}</label>
                                </div>
                            ))}
                            <div>
                                <input className="form-check-input" type="radio"
                                    value="new-input"
                                    name="keycapMaterialInput"
                                    onChange={props.updateFormFieldGeneral}
                                    checked={props.keycapMaterialInput === "new-input"}
                                />
                                <label className="form-check-label keycapMaterial-label">Add Keycap Material</label>
                            </div>
                        </div>
                        <div className="Create-container-div">
                            {props.keycapMaterialInput === "new-input" ?
                                <div className="row">
                                    <div className="col-1 col-sm-5 col-md-4 col-lg-3">
                                    </div>
                                    <div className="col-12 col-sm-7 col-md-7 col-lg-8">
                                        <label>New Keycap Material</label>
                                        <div className="col-12">
                                            <input type="text" name="keycapMaterialInputNew"
                                                className="col-12 form-control"
                                                value={props.keycapMaterialInputNew}
                                                onChange={props.updateFormFieldGeneral}
                                            />
                                        </div>
                                        <div className="col-1 col-sm-5 col-md-4 col-lg-3">
                                        </div>
                                    </div>
                                    <div className="col-1 col-sm-5 col-md-4 col-lg-3">
                                    </div>
                                    <div className="Create-div-input-error col-12 col-sm-7 col-md-7 col-lg-8">{props.keycapMaterialInputError}</div>
                                </div>
                                : <div></div>
                            }
                        </div>
                    </div>
                    <div className="Create-container-div row">
                        <div className="col-12 col-sm-5 col-md-4 col-lg-3">
                            <label>Keycap Profile:</label>
                        </div>
                        <div className="col-12 col-sm-7 col-md-7 col-lg-8">
                            <select className="form-select form-select-sm"
                                name="keycapProfileInput"
                                value={props.keycapProfileInput}
                                onChange={props.updateFormFieldGeneral}
                            >
                                {props.keycapProfileOptions.map(eachKeycapProfile => (
                                    <React.Fragment key={eachKeycapProfile}>
                                        <option value={eachKeycapProfile}>{eachKeycapProfile}</option>
                                    </React.Fragment>
                                ))}
                                <option value="new-input">Add Keycap Profile</option>
                            </select>
                        </div>
                        <div className="Create-container-div">
                            {props.keycapProfileInput === "new-input" ?
                                <div className="row">
                                    <div className="col-1 col-sm-5 col-md-4 col-lg-3">
                                    </div>
                                    <div className="col-12 col-sm-7 col-md-7 col-lg-8">
                                        <label className="col-12">New Keycap Profile</label>
                                        <div className="col-12">
                                            <input className="col-12 form-control" 
                                                type="text" 
                                                name="keycapProfileInputNew" 
                                                value={props.keycapProfileInputNew}
                                                onChange={props.updateFormFieldGeneral}
                                            />
                                        </div>
                                        <div className="col-1 col-sm-5 col-md-4 col-lg-3">
                                        </div>
                                        <div className="Create-div-input-error col-12">{props.keycapProfileInputError}</div>
                                    </div>
                                </div>
                                : <div></div>
                            }
                        </div>
                    </div>
                    <div className="Create-container-div row">
                        <div className="col-12 col-sm-5 col-md-4 col-lg-3">
                            <label>Keycap Manufacturer:</label>
                        </div>
                        <div className="col-12 col-sm-7 col-md-7 col-lg-8">
                            <select className="form-select form-select-sm"
                                name="keycapManufacturerInput"
                                value={props.keycapManufacturerInput}
                                onChange={props.updateFormFieldGeneral}
                            >
                                {props.keycapManufacturerOptions.map(eachKeycapManufacturer => (
                                    <React.Fragment key={eachKeycapManufacturer}>
                                        <option value={eachKeycapManufacturer}>{eachKeycapManufacturer}</option>
                                    </React.Fragment>
                                ))}
                                <option value="new-input">Add KeyCap Manufacturer</option>
                            </select>
                        </div>
                        <div className="Create-container-div">
                            {props.keycapManufacturerInput === "new-input" ?
                                <div className="row">
                                    <div className="col-1 col-sm-5 col-md-4 col-lg-3">
                                    </div>
                                    <div className="col-12 col-sm-7 col-md-7 col-lg-8">
                                        <label className="col-12">Create New Keycap Manufacturer</label>
                                        <div className="col-12">
                                            <input className="col-12 form-control" 
                                                type="text" 
                                                name="keycapManufacturerInputNew" 
                                                value={props.keycapManufacturerInputNew}
                                                onChange={props.updateFormFieldGeneral}
                                            />
                                        </div>
                                        <div className="col-1 col-sm-5 col-md-4 col-lg-3">
                                        </div>
                                        <div className="Create-div-input-error col-12">{props.keycapManufacturerInputError}</div>
                                    </div>
                                </div>
                                : <div></div>
                            }
                        </div>
                    </div>
                    <div className="Create-container-div row">
                        <div className="col-12 col-sm-5 col-md-4 col-lg-3">
                            <label>Username:</label>
                        </div>
                        <div className="col-12 col-sm-7 col-md-7 col-lg-8">
                            <input type="text"
                                className="col-12 form-control"
                                name="usernameInput"
                                value={props.usernameInput}
                                onChange={props.updateFormFieldGeneral}
                            />
                            <div className="Create-div-input-error">{props.usernameInputError}</div>
                        </div>
                    </div>
                    <div className="Create-container-div row">
                        <div className="col-12 col-sm-5 col-md-4 col-lg-3">
                            <label>Email:</label>
                        </div>
                        <div className="col-12 col-sm-7 col-md-7 col-lg-8">
                            <input type="email"
                                className="col-12 form-control"
                                name="emailInput"
                                value={props.emailInput}
                                onChange={props.updateFormFieldGeneral}
                            />
                            <div className="Create-div-input-error">{props.emailInputError}</div>
                        </div>
                    </div>
                    <button className="btn btn-primary"
                        onClick={props.addNewListing}>
                        Add Listing
                    </button>
                </Container>
            </div>
        </React.Fragment>
    )
}