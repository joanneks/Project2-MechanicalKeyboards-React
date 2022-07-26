import React from "react";
import logo1 from './logo.png';
import './css/Edit.css';


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function Edit(props) {
    return (
        <React.Fragment>
            <div className="Edit">
                <Navbar className="Edit-navbar-color" bg="light" expand="lg" fixed="top">
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
                <div className="Edit-break1"></div>
                <Container className="Edit-container">
                    <div className="Edit-container-div row">
                        <div className=" col-12 col-sm-5 col-md-4 col-lg-3">
                            <label>OS Compatibility: </label>
                        </div>
                        <div className="col-12 col-sm-7 col-md-7 col-lg-8">
                            <div className="Edit-container-div-osCompatibility">
                                <div>
                                    <input type="checkbox"
                                        value="Windows"
                                        name="osCompatibility"
                                        checked={props.listingToEdit.osCompatibility.includes("Windows") ? true : false}
                                        onChange={props.osCompatibilityEdit}
                                        className="form-check-input" />
                                    <label className="osCompatibility-label form-check-label">Windows</label>
                                </div>
                                <div>
                                    <input type="checkbox"
                                        value="Mac"
                                        name="osCompatibility"
                                        checked={props.listingToEdit.osCompatibility.includes("Mac") ? true : false}
                                        onChange={props.osCompatibilityEdit}
                                        className="form-check-input" />
                                    <label className="osCompatibility-label form-check-label">Mac</label>
                                </div>
                                <div>
                                    <input type="checkbox"
                                        value="Linux"
                                        name="osCompatibility"
                                        checked={props.listingToEdit.osCompatibility.includes("Linux") ? true : false}
                                        onChange={props.osCompatibilityEdit}
                                        className="form-check-input" />
                                    <label className="osCompatibility-label form-check-label">Linux</label>
                                </div>
                            </div>
                            <div className="Edit-div-input-error">{props.osCompatibilityInputError}
                            </div>
                        </div>
                    </div>
                    <div className="Edit-container-div">
                        <div className="row">
                            <div className="col-12 col-sm-5 col-md-4 col-lg-3">
                                <label>Hot Swappable:</label>
                            </div>
                            <div className=" col-12 col-sm-7 col-md-3 col-lg-3">
                                <select className="form-select form-select-sm"
                                    name="hotSwappable"
                                    value={props.listingToEdit.hotSwappable}
                                    onChange={props.updateFormFieldEdit}
                                >
                                    <option value="true" checked={props.listingToEdit.hotSwappable.includes("true") ? true : false}>Yes</option>
                                    <option value="false" checked={props.listingToEdit.hotSwappable.includes("false") ? true : false}>No</option>
                                </select>
                            </div>
                            <div className="CEdit-div-input-error"></div>
                        </div>
                    </div>
                    <div className="Edit-container-div row">
                        <div className="col-12 col-sm-5 col-md-4 col-lg-3">
                            <label>Switch Name:</label>
                        </div>
                        <div style={{ display: "inline" }} className="col-12 col-sm-7 col-md-7 col-lg-8">
                            <textarea
                                name="switches"
                                value={props.listingToEdit.switches}
                                onChange={props.updateFormFieldEdit}
                                rows="1"
                                className="col-12 form-control"
                            >
                            </textarea>
                            <div className="Edit-div-input-error">{props.switchesInputError}</div>
                        </div>
                    </div>
                    <div className="Edit-container-div row">
                        <div className="col-12 col-sm-5 col-md-4 col-lg-3">
                            <label>Keyboard Brand:</label>
                        </div>
                        <div className="col-12 col-sm-7 col-md-7 col-lg-8">
                            <select className="form-select form-select-sm"
                                name="keyboardBrand"
                                value={props.listingToEdit.keyboard.keyboardBrand}
                                onChange={props.updateFormFieldEditKeyboard}
                            >
                                {props.keyboardBrandOptions.map(eachKeyboardBrand => (
                                    <React.Fragment key={eachKeyboardBrand}>
                                        <option value={eachKeyboardBrand}>{eachKeyboardBrand}</option>
                                    </React.Fragment>
                                ))}
                                <option value="new-input">Add Brand</option>
                            </select>
                        </div>
                        <div className="Edit-container-div">
                            {props.listingToEdit.keyboard.keyboardBrand === "new-input" ?
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
                                        <div className="Edit-div-input-error col-12">{props.keyboardBrandInputError}</div>
                                    </div>
                                </div>
                                : <div></div>
                            }
                        </div>
                    </div>
                    <div className="Edit-container-div row">
                        <div className="col-12 col-sm-5 col-md-4 col-lg-3">
                            <label>Keyboard Model:</label>
                        </div>
                        <div className="col-12 col-sm-7 col-md-7 col-lg-8">
                            <input type="text"
                                className="col-12 form-control"
                                name="keyboardModel"
                                value={props.listingToEdit.keyboard.keyboardModel}
                                onChange={props.updateFormFieldEditKeyboard} />
                            <div className="Edit-div-input-error">{props.keyboardModelInputError}</div>
                        </div>
                    </div>
                    <div className="Edit-container-div row">
                        <div className="col-12 col-sm-5 col-md-4 col-lg-3">
                            <label>Keyboard Size:</label>
                        </div>
                        <div className="col-12 col-sm-7 col-md-7 col-lg-8">
                            <div style={{ display: "flex", flexWrap: "wrap" }}>
                                <div>
                                    <input className="form-check-input" type="radio"
                                        value="60"
                                        name="keyboardSize"
                                        onChange={props.updateFormFieldEditKeyboard}
                                        checked={props.listingToEdit.keyboard.keyboardSize === "60"}
                                    />
                                    <label className="form-check-label keyboardSize-label">60%</label>
                                </div>
                                <div>
                                    <input className="form-check-input" type="radio"
                                        value="65"
                                        name="keyboardSize"
                                        onChange={props.updateFormFieldEditKeyboard}
                                        checked={props.listingToEdit.keyboard.keyboardSize === "65"}
                                    />
                                    <label className="form-check-label keyboardSize-label">65%</label>
                                </div>
                                <div>
                                    <input className="form-check-input" type="radio"
                                        value="75"
                                        name="keyboardSize"
                                        onChange={props.updateFormFieldEditKeyboard}
                                        checked={props.listingToEdit.keyboard.keyboardSize === "75"}
                                    />
                                    <label className="form-check-label keyboardSize-label">75%</label>
                                </div>
                                <div>
                                    <input className="form-check-input" type="radio"
                                        value="80"
                                        name="keyboardSize"
                                        onChange={props.updateFormFieldEditKeyboard}
                                        checked={props.listingToEdit.keyboard.keyboardSize === "80"}
                                    />
                                    <label className="form-check-label keyboardSize-label">80%</label>
                                </div>
                                <div>
                                    <input className="form-check-input" type="radio"
                                        value="100"
                                        name="keyboardSize"
                                        onChange={props.updateFormFieldEditKeyboard}
                                        checked={props.listingToEdit.keyboard.keyboardSize === "100"}
                                    />
                                    <label className="form-check-label keyboardSize-label">100%</label>
                                </div>
                            </div>
                            <div className="Edit-div-input-error">{props.keyboardSizeInputError}</div>
                        </div>
                    </div>
                    <div className="Edit-container-div row">
                        <label className="col-12 col-sm-5 col-md-4 col-lg-3">Keyboard Product Link:</label>
                        <div className="col-12 col-sm-7 col-md-7 col-lg-8">
                            <textarea
                                name="keyboardProductLink"
                                rows="2"
                                className="col-12 form-control"
                                value={props.listingToEdit.keyboard.keyboardProductLink}
                                onChange={props.updateFormFieldEditKeyboard}>
                            </textarea>
                            <div className="Edit-div-input-error">{props.keyboardProductLinkInputError}</div>
                        </div>
                    </div>
                    <div className="Edit-container-div row">
                        <label className="col-12 col-sm-5 col-md-4 col-lg-3">Keyboard Image Link:</label>
                        <div className="col-12 col-sm-7 col-md-7 col-lg-8">
                            <textarea
                                name="keyboardImage"
                                rows="1"
                                className="col-12 form-control"
                                value={props.listingToEdit.keyboard.keyboardImage}
                                onChange={props.updateFormFieldEditKeyboard}>
                            </textarea>
                            <div className="Edit-div-input-error">{props.keyboardImageInputError}</div>
                        </div>
                    </div>
                    <div className="Edit-container-div row">
                        <label className="col-12 col-sm-5 col-md-4 col-lg-3">Keycap Model:</label>
                        <div className="col-12 col-sm-7 col-md-7 col-lg-8">
                            <input type="text"
                                name="keycapModel"
                                className="col-12"
                                value={props.listingToEdit.keycap.keycapModel}
                                onChange={props.updateFormFieldEditKeycap} />
                            <div className="Edit-div-input-error">{props.keycapModelInputError}</div>
                        </div>
                    </div> 
                    <div className="Edit-container-div row">
                        <div className="col-12 col-sm-5 col-md-4 col-lg-3">
                            <label>Keycap Material:</label>
                        </div>
                        <div className="col-12 col-sm-6 col-md-7 col-lg-8 Edit-container-div-keycapMaterial">
                            {props.keycapMaterialOptions.map(eachKeycapMaterial => (
                                <div key={eachKeycapMaterial}>
                                    <input className="form-check-input" type="radio"
                                        value={eachKeycapMaterial}
                                        name="keycapMaterial"
                                        onChange={props.updateFormFieldEditKeycap}
                                        checked={props.listingToEdit.keycap.keycapMaterial === eachKeycapMaterial}
                                    />
                                    <label className="form-check-label keycapMaterial-label">{eachKeycapMaterial}</label>
                                </div>
                            ))}
                            <div>
                                <input className="form-check-input" type="radio"
                                    value="new-input"
                                    name="keycapMaterial"
                                    onChange={props.updateFormFieldEditKeycap}
                                    checked={props.listingToEdit.keycap.keycapMaterial === "new-input"}
                                />
                                <label className="form-check-label keycapMaterial-label">Add Keycap Material</label>
                            </div>
                        </div>
                        <div className="Edit-container-div">
                            {props.listingToEdit.keycap.keycapMaterial === "new-input" ?
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
                                    <div className="Edit-div-input-error col-12 col-sm-7 col-md-7 col-lg-8">{props.keycapMaterialInputError}</div>
                                </div>
                                : <div></div>
                            }
                        </div>
                    </div>
                    <div className="Edit-container-div row">
                        <div className="col-12 col-sm-5 col-md-4 col-lg-3">
                            <label>Keycap Profile:</label>
                        </div>
                        <div className="col-12 col-sm-7 col-md-7 col-lg-8">
                            <select className="form-select form-select-sm"
                                name="keycapProfile"
                                value={props.listingToEdit.keycap.keycapProfile}
                                onChange={props.updateFormFieldEditKeycap}
                            >
                                {props.keycapProfileOptions.map(eachKeycapProfile => (
                                    <React.Fragment key={eachKeycapProfile}>
                                        <option value={eachKeycapProfile}>{eachKeycapProfile}</option>
                                    </React.Fragment>
                                ))}
                                <option value="new-input">Add Keycap Profile</option>
                            </select>
                        </div>
                        <div className="Edit-container-div">
                            {props.listingToEdit.keycap.keycapProfile === "new-input" ?
                                <div className="row">
                                    <div className="col-1 col-sm-5 col-md-4 col-lg-3">
                                    </div>
                                    <div className="col-12 col-sm-7 col-md-7 col-lg-8">
                                        <label className="col-12">New Keycap Profile</label>
                                        <div className="col-12">
                                            <input className="col-12 form-control" 
                                                type="text" name="keycapProfileInputNew" 
                                                value={props.keycapProfileInputNew}
                                                onChange={props.updateFormFieldGeneral}
                                            />
                                        </div>
                                        <div className="col-1 col-sm-5 col-md-4 col-lg-3">
                                        </div>
                                        <div className="Edit-div-input-error col-12">{props.keycapProfileInputError}</div>
                                    </div>
                                </div>
                                : <div></div>
                            }
                        </div>
                    </div>
                    <div className="Edit-container-div row">
                        <div className="col-12 col-sm-5 col-md-4 col-lg-3">
                            <label>Keycap Manufacturer:</label>
                        </div>
                        <div className="col-12 col-sm-7 col-md-7 col-lg-8">
                            <select className="form-select form-select-sm"
                                name="keycapManufacturer"
                                value={props.listingToEdit.keycap.keycapManufacturer}
                                onChange={props.updateFormFieldEditKeycap}
                            >
                                {props.keycapManufacturerOptions.map(eachKeycapManufacturer => (
                                    <React.Fragment key={eachKeycapManufacturer}>
                                        <option value={eachKeycapManufacturer}>{eachKeycapManufacturer}</option>
                                    </React.Fragment>
                                ))}
                                <option value="new-input">Add KeyCap Manufacturer</option>
                            </select>
                        </div>
                        <div className="Edit-container-div">
                            {props.listingToEdit.keycap.keycapManufacturer === "new-input" ?
                                <div className="row">
                                    <div className="col-1 col-sm-5 col-md-4 col-lg-3">
                                    </div>
                                    <div className="col-12 col-sm-7 col-md-7 col-lg-8">
                                        <label className="col-12">Create New Keycap Manufacturer</label>
                                        <div className="col-12">
                                            <input className="col-12 form-control" 
                                                type="text" name="keycapManufacturerInputNew" 
                                                value={props.keycapManufacturerInputNew}
                                                onChange={props.updateFormFieldGeneral}
                                            />
                                        </div>
                                        <div className="col-1 col-sm-5 col-md-4 col-lg-3">
                                        </div>
                                        <div className="Edit-div-input-error col-12">{props.keycapManufacturerInputError}</div>
                                    </div>
                                </div>
                                : <div></div>
                            }
                        </div>
                    </div>
                    <div className="Edit-container-div row">
                        <div className="col-12 col-sm-5 col-md-4 col-lg-3">
                            <label>Username:</label>
                        </div>
                        <div className="col-12 col-sm-7 col-md-7 col-lg-8">
                            <input type="text"
                                className="col-12 form-control"
                                name="username"
                                value={props.listingToEdit.user.username}
                                onChange={props.updateFormFieldEditUser}
                            />
                            <div className="Edit-div-input-error">{props.usernameInputError}</div>
                        </div>
                    </div>
                    <div className="Edit-container-div row">
                        <div className="col-12 col-sm-5 col-md-4 col-lg-3">
                            <label>Email:</label>
                        </div>
                        <div className="col-12 col-sm-7 col-md-7 col-lg-8">
                            <input type="email"
                                className="col-12 form-control"
                                name="email"
                                value={props.listingToEdit.user.email}
                                onChange={props.updateFormFieldEditUser}
                            />
                            <div className="Edit-div-input-error">{props.emailInputError}</div>
                        </div>
                    </div>
                    <button className="btn btn-primary"
                    onClick={props.confirmChanges}
                    >
                        Confirm Changes
                    </button>
                </Container>
            </div>
        </React.Fragment>
    )
}