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
                <Navbar bg="light" expand="lg" fixed="top">
                    <Container fluid>
                        <Navbar.Brand href="">
                            <img src={logo1} style={{ height: '7vh' }} alt="logo" onClick={props.activeStateHomePage} />
                        </Navbar.Brand>
                        <Navbar id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                navbarScroll
                            >
                                <Nav.Link onClick={props.activeStateCreate}>Create</Nav.Link>
                                <Nav.Link onClick={props.activeStateListings}>All Listings</Nav.Link>
                            </Nav>
                        </Navbar>
                    </Container>
                </Navbar>
                <div className="Create-break1"></div>
                <Container className="Create-container">
                    <div className="Create-container-div">
                        <label>OS Compatibility: </label>
                        <div className="Create-container-div-osCompatibility">
                            <input type="checkbox"
                                value="Windows"
                                name="osCompatibilityInput"
                                onChange={props.osCompatibilityInputSelected}
                                className="form-check-input" />
                            <label>Windows</label>
                            <input type="checkbox"
                                value="Mac"
                                name="osCompatibilityInput"
                                onChange={props.osCompatibilityInputSelected}
                                className="form-check-input" />
                            <label>Mac</label>
                            <input type="checkbox"
                                value="Linux"
                                name="osCompatibilityInput"
                                onChange={props.osCompatibilityInputSelected}
                                className="form-check-input" />
                            <label>Linux</label>
                        </div>
                    </div>
                    <div className="Create-container-div">
                        <label>Hot Swappable</label>
                        <select className="form-select form-select-sm"
                            name="hotSwappableInput"
                            value={props.hotSwappableInput}
                            onChange={props.updateFormFieldGeneral}>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </div>
                    <div className="Create-container-div">
                        <label>Type of Switch</label>
                        <textarea
                            name="switchesInput"
                            value={props.switchesInput}
                            onChange={props.updateFormFieldGeneral}></textarea>
                    </div>
                    <div className="Create-container-div">
                        <label>Keyboard Brand:</label>
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
                        <div className="Create-container-div">
                            {props.keyboardBrandInput === "new-input" ?
                                <div>
                                    <label>Create New Keyboard Brand</label>
                                    <input type="text" name="keyboardBrandInputNew" value={props.keyboardBrandInputNew}
                                        onChange={props.updateFormFieldGeneral}
                                    />
                                </div>
                                : <div></div>
                            }
                        </div>
                    </div>
                    <div className="Create-container-div">
                        <label>Keyboard Model:</label>
                        <input type="text"
                            name="keyboardModelInput"
                            value={props.keyboardModelInput}
                            onChange={props.updateFormFieldGeneral} />
                    </div>

                    <div className="Create-container-div">
                        <label>Keyboard Size:</label>
                        <div style={{ display: "flex", flexWrap: "wrap" }}>
                            <div>
                                <input className="form-check-input" type="radio"
                                    value="60"
                                    name="keyboardSizeInput"
                                    onChange={props.updateFormFieldGeneral}
                                    checked={props.keyboardSizeInput === "60"}
                                />
                                <label className="form-check-label">60%</label>
                            </div>
                            <div>
                                <input className="form-check-input" type="radio"
                                    value="65"
                                    name="keyboardSizeInput"
                                    onChange={props.updateFormFieldGeneral}
                                    checked={props.keyboardSizeInput === "65"}
                                />
                                <label className="form-check-label">65%</label>
                            </div>
                            <div>
                                <input className="form-check-input" type="radio"
                                    value="75"
                                    name="keyboardSizeInput"
                                    onChange={props.updateFormFieldGeneral}
                                    checked={props.keyboardSizeInput === "75"}
                                />
                                <label className="form-check-label">75%</label>
                            </div>
                            <div>
                                <input className="form-check-input" type="radio"
                                    value="80"
                                    name="keyboardSizeInput"
                                    onChange={props.updateFormFieldGeneral}
                                    checked={props.keyboardSizeInput === "80"}
                                />
                                <label className="form-check-label">80%</label>
                            </div>
                            <div>
                                <input className="form-check-input" type="radio"
                                    value="100"
                                    name="keyboardSizeInput"
                                    onChange={props.updateFormFieldGeneral}
                                    checked={props.keyboardSizeInput === "100"}
                                />
                                <label className="form-check-label">100%</label>
                            </div>
                        </div>
                    </div>
                    <div className="Create-container-div">
                        <label>Keyboard Product Link:</label>
                        <input type="text"
                            name="keyboardProductLinkInput"
                            value={props.keyboardProductLinkInput}
                            onChange={props.updateFormFieldGeneral} />
                    </div>
                    <div className="Create-container-div">
                        <label>Keyboard Image Link:</label>
                        <input type="text"
                            name="keyboardImageInput"
                            value={props.keyboardImageInput}
                            onChange={props.updateFormFieldGeneral} />
                    </div>
                    <div className="Create-container-div">
                        <label>Keycap Model:</label>
                        <input type="text"
                            name="keycapModelInput"
                            value={props.keycapModelInput}
                            onChange={props.updateFormFieldGeneral} />
                    </div>
                    <div className="Create-container-div">
                        <label>Keycap Material:</label>
                        <div style={{ display: "flex", flexWrap: "wrap" }}>
                            {props.keycapMaterialOptions.map(eachKeycapMaterial => (
                                <div key={eachKeycapMaterial}>
                                    <input className="form-check-input" type="radio"
                                        value={eachKeycapMaterial}
                                        name="keycapMaterialInput"
                                        onChange={props.updateFormFieldGeneral}
                                        checked={props.keycapMaterialInput === eachKeycapMaterial}
                                    />
                                    <label className="form-check-label">{eachKeycapMaterial}</label>
                                </div>
                            ))}
                            <div>
                                <input className="form-check-input" type="radio"
                                    value="new-input"
                                    name="keycapMaterialInput"
                                    onChange={props.updateFormFieldGeneral}
                                    checked={props.keycapMaterialInput === "new-input"}
                                />
                                <label className="form-check-label">Add New Keycap Material</label>
                            </div>
                        </div>
                        <div className="Create-container-div">
                            {props.keycapMaterialInput === "new-input" ?
                                <div>
                                    <label>Create New Keycap Material</label>
                                    <input type="text" name="keycapMaterialInputNew" value={props.keycapMaterialInputNew}
                                        onChange={props.updateFormFieldGeneral}
                                    />
                                </div>
                                : <div></div>
                            }
                        </div>
                    </div>
                    <div className="Create-container-div">
                        <label>Keycap Profile:</label>
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
                        <div className="Create-container-div">
                            {props.keycapProfileInput === "new-input" ?
                                <div>
                                    <label>Create New Keycap Profile</label>
                                    <input type="text" name="keycapProfileInputNew" value={props.keycapProfileInputNew}
                                        onChange={props.updateFormFieldGeneral}
                                    />
                                </div>
                                : <div></div>
                            }
                        </div>
                    </div>
                    <div className="Create-container-div">
                        <label>Keycap Manufacturer:</label>
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
                        <div className="Create-container-div">
                            {props.keycapManufacturerInput === "new-input" ?
                                <div>
                                    <label>Create New Keycap Manufacturer</label>
                                    <input type="text" name="keycapManufacturerInputNew" value={props.keycapManufacturerInputNew}
                                        onChange={props.updateFormFieldGeneral}
                                    />
                                </div>
                                : <div></div>
                            }
                        </div>
                    </div>
                    <div className="Create-container-div">
                        <label>Username:</label>
                        <input type="text"
                            name="usernameInput"
                            value={props.usernameInput}
                            onChange={props.updateFormFieldGeneral}
                        />
                    </div>
                    <div className="Create-container-div">
                        <label>Email:</label>
                        <input type="email"
                            name="emailInput"
                            value={props.emailInput}
                            onChange={props.updateFormFieldGeneral}
                        />
                    </div>
                    {/* <div className="Create-container-div">

                    </div> */}
                    <button className="btn btn-primary"
                        onClick={props.addNewListing}>
                        Add Listing
                    </button>
                </Container>
            </div>
        </React.Fragment>
    )
}