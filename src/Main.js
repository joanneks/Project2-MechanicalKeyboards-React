import React from 'react';
import axios from 'axios';

import Create from './pages/Create';
import Listings from './pages/Listings';
import HomePage from './pages/HomePage';
import EachListing from './pages/EachListing';
import Edit from './pages/Edit';


export default class Main extends React.Component {
    // url = "https://8000-joanneks-project2mechan-wyo4981gl1z.ws-us54.gitpod.io/";
    url = "https://mechanical-keyboards-express.herokuapp.com/";

    state = {
        active: 'home-page',
        data: [],
        dataCount: "",
        dataCountMessage: "",
        database: [],
        tempList: {
            reviews: []
        },
        tempListId: "",
        commentToDelete: "",
        commentToEdit: {
            comments: ""
        },
        displaySearch: "none",
        count: 0,
        displayEditComment: "none",
        displayEditCommentCheck: "none",
        displayEditCommentEmailStatus: "none",
        displayEditCommentText:"none",
        displayDelete: "none",
        displayDeleteVerification: "none",
        displayDeleteCheck: "none",
        listingToDelete: {
            keyboard: {
                keyboardBrand: "",
                keyboardModel: ""
            }
        },
        deleteEmailToVerify: "",
        deleteEmailVerified: "none",
        deleteEmailNotVerified: "none",
        displayDeleteStatus: "none",
        displayEdit: "none",
        displayEditVerification: "none",
        displayEditCheck: "none",
        displayEditStatus:"none",
        listingToEdit: {
            hotSwappable: "",
            osCompatibility: [],
            switches: "",
            keyboard: {
                keyboardBrand: "",
                keyboardModel: "",
                keyboardSize: "",
                keyboardProductLink: "",
                keyboardImage: ""
            },
            keycap: {
                keycapModel: "",
                keycapProfile: "",
                keycapMaterial: "",
                keycapManufacturer: ""
            },
            user: {
                username: "",
                email: ""
            }
        },
        editEmailToVerify: "",
        editEmailVerified: "none",
        editEmailNotVerified: "none",
        newComment: "",
        username: "",
        editCommentEmail: "",
        email: "",
        errorMessageAddComment: [],
        errorMessageAddCommentUser: [],
        keyboardBrandOptions: [],
        osCompatibility: "Windows",
        hotSwappable: "true",
        keyboardSize: [],
        keyboardSizeError: "",
        keyboardBrand: [],
        keyboardBrandError: "",
        searchError: "",
        textSearch: "",
        osCompatibilityInput: [],
        hotSwappableInput: "true",
        switchesInput: "",
        keyboardBrandInput: "Glorious",
        keyboardBrandInputNew: "",
        keyboardModelInput: "",
        keyboardSizeInput: "",
        keyboardProductLinkInput: "",
        keyboardImageInput: "",
        keycapModelInput: "",
        keycapProfileOptions: [],
        keycapProfileInput: "ASA",
        keycapProfileInputNew: "",
        keycapMaterialOptions: [],
        keycapMaterialInput: "",
        keycapMaterialInputNew: "",
        keycapManufacturerOptions: [],
        keycapManufacturerInput: "Akko",
        keycapManufacturerInputNew: "",
        usernameInput: "",
        emailInput: "",
        osCompatibilityInputError: "",
        switchesInputError: "",
        keyboardBrandInputError: "",
        keyboardModelInputError: "",
        keyboardSizeInputError: "",
        keyboardProductLinkInputError: "",
        keyboardImageInputError: "",
        keycapModelInputError: "",
        keycapMaterialInputError: "",
        keycapProfileInputError: "",
        keycapManufacturerInputError: "",
        usernameInputError: "",
        emailInputError: ""
    }
    async componentDidMount() {
        let response = await axios.get(this.url + "listings");

        await Promise.all([
            this.deriveKeyboardBrands(),
            this.deriveKeycapProfile(),
            this.deriveKeycapMaterial(),
            this.deriveKeycapManufacturer()
        ])
        this.setState({
            data: response.data.data,
            dataCount: response.data.count,
            database: response.data.data1
        })
        console.log(response.data.data)
        // console.log(response.data.data1)
    }

    changePage = (page) => {
        this.clearAddListingErrors(page)
        this.setState({
            active: page
        })
    }
    renderPage() {
        if (this.state.active === "create") {
            return <Create
                data={this.state.data}
                activeStateCreate={() => this.changePage("create")}
                activeStateListings={() => this.changePage("listings")}
                activeStateHomePage={() => this.changePage("home-page")}
                osCompatibilityInput={this.state.osCompatibilityInput}
                osCompatibilityInputSelected={this.osCompatibilityInputSelected}
                hotSwappableInput={this.state.hotSwappableInput}
                switchesInput={this.state.switchesInput}
                keyboardBrandOptions={this.state.keyboardBrandOptions}
                keyboardBrandInput={this.state.keyboardBrandInput}
                keyboardBrandInputNew={this.state.keyboardBrandInputNew}
                keyboardModelInput={this.state.keyboardModelInput}
                keyboardProductLinkInput={this.state.keyboardProductLinkInput}
                keyboardImageInput={this.state.keyboardImageInput}
                keycapModelInput={this.state.keycapModelInput}
                keyboardSizeInput={this.state.keyboardSizeInput}
                keycapProfileOptions={this.state.keycapProfileOptions}
                keycapProfileInput={this.state.keycapProfileInput}
                keycapProfileInputNew={this.state.keycapProfileInputNew}
                keycapMaterialOptions={this.state.keycapMaterialOptions}
                keycapMaterialInput={this.state.keycapMaterialInput}
                keycapMaterialInputNew={this.state.keycapMaterialInputNew}
                keycapManufacturerOptions={this.state.keycapManufacturerOptions}
                keycapManufacturerInput={this.state.keycapManufacturerInput}
                keycapManufacturerInputNew={this.state.keycapManufacturerInputNew}
                usernameInput={this.state.usernameInput}
                emailInput={this.state.emailInput}
                osCompatibilityInputError={this.state.osCompatibilityInputError}
                switchesInputError={this.state.switchesInputError}
                keyboardBrandInputError={this.state.keyboardBrandInputError}
                keyboardModelInputError={this.state.keyboardModelInputError}
                keyboardSizeInputError={this.state.keyboardSizeInputError}
                keyboardProductLinkInputError={this.state.keyboardProductLinkInputError}
                keyboardImageInputError={this.state.keyboardImageInputError}
                keycapModelInputError={this.state.keycapModelInputError}
                keycapMaterialInputError={this.state.keycapMaterialInputError}
                keycapManufacturerInputError={this.state.keycapManufacturerInputError}
                keycapProfileInputError={this.state.keycapProfileInputError}
                usernameInputError={this.state.usernameInputError}
                emailInputError={this.state.emailInputError}
                updateFormFieldGeneral={this.updateFormFieldGeneral}
                addNewListing={this.addNewListing}
            />
        } else if (this.state.active === "listings") {
            return <Listings
                data={this.state.data}
                activeStateCreate={() => this.changePage("create")}
                activeStateHomePage={() => this.changePage("home-page")}
                activeStateEdit={(each) => {
                    this.setState({
                        active: "edit",
                        listingToEdit: each,
                        // listingToEditId: each._id
                    });
                }}
                activeStateEachListing={(each) => {
                    this.setState({
                        active: "each-listing",
                        tempList: each,
                        tempListId: each._id,
                        displayDelete:"none",
                        displayEdit:"none"
                    });
                }}
                keyboardBrandOptions={this.state.keyboardBrandOptions}
                searchDisplay={() => {
                    let count = this.state.count
                    this.setState({
                        count: count + 1
                    })
                    if (count % 2 === 0) {
                        this.setState({
                            displaySearch: "block",
                        })
                        // this.deriveKeyboardBrands();
                    } else if (count % 2 === 1) {
                        this.setState({
                            displaySearch: "none",
                        })
                    }
                }}
                displaySearch={this.state.displaySearch}
                osCompatibility={this.state.osCompatibility}
                hotSwappable={this.state.hotSwappable}
                keyboardSize={this.state.keyboardSize}
                keyboardSizeSelected={this.keyboardSizeSelected}
                keyboardBrandSelected={this.keyboardBrandSelected}
                keyboardBrand={this.state.keyboardBrand}
                updateFormFieldGeneral={this.updateFormFieldGeneral}
                dataCount={this.state.dataCount}
                dataCountMessage={this.state.dataCountMessage}
                keyboardSizeError={this.state.keyboardSizeError}
                keyboardBrandError={this.state.keyboardBrandError}
                searchError={this.state.searchError}
                textSearch={this.state.textSearch}
                deriveSearch={this.deriveSearch}
                closeSearch={this.closeSearch}
                listingToDelete={this.state.listingToDelete}
                displayDelete={this.state.displayDelete}
                displayDeleteVerification={this.state.displayDeleteVerification}
                closeDelete={this.closeDelete}
                displayDeleteConfirmation={(each) => {
                    this.setState({
                        displayEdit:"none",
                        deleteEmailToVerify: "",
                        deleteEmailNotVerified: "none",
                        deleteEmailVerified: "none",
                        displayDelete: "block",
                        displayDeleteVerification: "block",
                        displayDeleteStatus: "none",
                        listingToDelete: each
                    })
                }}
                deleteEmailToVerify={this.state.deleteEmailToVerify}
                deleteEmailVerified={this.state.deleteEmailVerified}
                deleteEmailNotVerified={this.state.deleteEmailNotVerified}
                deleteListingEmailCheck={this.deleteListingEmailCheck}
                displayDeleteCheck={this.state.displayDeleteCheck}
                displayDeleteStatus={this.state.displayDeleteStatus}
                deleteListingNo={this.deleteListingNo}
                deleteListingYes={this.deleteListingYes}
                listingToEdit={this.state.listingToEdit}
                displayEdit={this.state.displayEdit}
                displayEditStatus={this.state.displayEditStatus}
                displayEditVerification={this.state.displayEditVerification}
                closeEdit={this.closeEdit}
                displayEditConfirmation={(each) => {
                    this.setState({
                        displayDelete:"none",
                        editEmailToVerify: "",
                        editEmailNotVerified: "none",
                        editEmailVerified: "none",
                        displayEdit: "block",
                        displayEditStatus: "none",
                        displayEditVerification: "block",
                        listingToEdit: each
                    })
                }}
                editEmailToVerify={this.state.editEmailToVerify}
                editEmailVerified={this.state.editEmailVerified}
                editEmailNotVerified={this.state.editEmailNotVerified}
                editListingEmailCheck={this.editListingEmailCheck}
                displayEditCheck={this.state.displayEditCheck}
                editListingNo={this.editListingNo}
                editListingYes={this.editListingYes}
            />
        } else if (this.state.active === "each-listing") {
            return <EachListing
                activeStateCreate={() => this.changePage("create")}
                activeStateListings={() => this.changePage("listings")}
                activeStateHomePage={() => this.changePage("home-page")}
                tempList={this.state.tempList}
                newComment={this.state.newComment}
                username={this.state.username}
                email={this.state.email}
                editCommentEmail={this.state.editCommentEmail}
                updateFormFieldGeneral={this.updateFormFieldGeneral}
                updateFormField={this.updateFormField}
                updateFormFieldEditComment={this.updateFormFieldEditComment}
                errorMessageAddComment={this.state.errorMessageAddComment}
                errorMessageAddCommentUser={this.state.errorMessageAddCommentUser}
                addNewComment={async () => {
                    this.addNewComment(
                        this.state.username,
                        this.state.email,
                        this.state.newComment,
                        this.state.tempList,
                        this.state.data,
                    )
                }}
                deleteComment={this.deleteComment}
                commentToEdit={this.state.commentToEdit}
                displayEditCommentText={this.state.displayEditCommentText}
                displayEditComment={this.state.displayEditComment}
                displayEditCommentCheck={this.state.displayEditCommentCheck}
                displayEditCommentEmailStatus={this.state.displayEditCommentEmailStatus}
                editComment={this.editComment}
                editCommentVerification={this.editCommentVerification}
                editCommentEmailCheck={async () => {
                    this.editCommentEmailCheck(
                        this.state.tempList,
                        this.state.commentToEdit,
                        this.state.data,
                        this.state.editCommentEmail

                    )
                }}
                returnPage={this.returnPage}

            />
        } else if (this.state.active === "home-page") {
            return <HomePage
                activeStateCreate={async () => this.changePage("create")}
                activeStateListings={async () => this.changePage("listings")}
            />
        } else if (this.state.active === "edit") {
            return <Edit
                activeStateHomePage={() => this.changePage("home-page")}
                activeStateCreate={async () => this.changePage("create")}
                activeStateListings={async () => this.changePage("listings")}
                listingToEdit={this.state.listingToEdit}
                keyboardBrandOptions={this.state.keyboardBrandOptions}
                keycapProfileOptions={this.state.keycapProfileOptions}
                keycapMaterialOptions={this.state.keycapMaterialOptions}
                keycapManufacturerOptions={this.state.keycapManufacturerOptions}
                keyboardBrandInputNew={this.state.keyboardBrandInputNew}
                keycapProfileInputNew={this.state.keycapProfileInputNew}
                keycapMaterialInputNew={this.state.keycapMaterialInputNew}
                keycapManufacturerInputNew={this.state.keycapManufacturerInputNew}

                osCompatibilityEdit={this.osCompatibilityEdit}
                osCompatibilityInputError={this.state.osCompatibilityInputError}
                switchesInputError={this.state.switchesInputError}
                keyboardBrandInputError={this.state.keyboardBrandInputError}
                keyboardModelInputError={this.state.keyboardModelInputError}
                keyboardSizeInputError={this.state.keyboardSizeInputError}
                keyboardProductLinkInputError={this.state.keyboardProductLinkInputError}
                keyboardImageInputError={this.state.keyboardImageInputError}
                keycapModelInputError={this.state.keycapModelInputError}
                keycapMaterialInputError={this.state.keycapMaterialInputError}
                keycapProfileInputError={this.state.keycapProfileInputError}
                keycapManufacturerInputError={this.state.keycapManufacturerInputError}
                usernameInputError={this.state.usernameInputError}
                emailInputError={this.state.emailInputError}

                updateFormFieldGeneral={this.updateFormFieldGeneral}
                updateFormFieldEdit={this.updateFormFieldEdit}
                updateFormFieldEditKeyboard={this.updateFormFieldEditKeyboard}
                updateFormFieldEditKeycap={this.updateFormFieldEditKeycap}
                updateFormFieldEditUser={this.updateFormFieldEditUser}
                confirmChanges={this.confirmChanges}
            />
        }
    };
    deleteListingEmailCheck = () => {
        let listingToDelete = this.state.listingToDelete
        let creatorEmail = listingToDelete.user.email
        let deleteEmailToVerify = this.state.deleteEmailToVerify
        if (deleteEmailToVerify === creatorEmail) {
            this.setState({
                deleteEmailVerified: "block",
                displayDeleteVerification: "none"
            })
        } else {
            this.setState({
                deleteEmailNotVerified: "block"
            })
        }
        console.log(creatorEmail, deleteEmailToVerify)

    }
    closeDelete = () => {
        this.setState({
            displayDelete: "none"
        })
    }
    deleteListingYes = async () => {
        let listingToDelete = this.state.listingToDelete
        await axios.delete(this.url + "listings/delete/" + listingToDelete._id)
        let indexToRemove = this.state.data.findIndex(function (eachListing) {
            if (eachListing._id === listingToDelete._id) {
                return true
            } else {
                return false
            }
        })
        let dataCount = this.state.dataCount - 1
        let revisedData = [...this.state.data.slice(0, indexToRemove), ...this.state.data.slice(indexToRemove + 1)]
        this.setState({
            data: revisedData,
            dataCount,
            deleteEmailVerified: "none",
            displayDeleteStatus: "block"
        })
        setTimeout(() => {
            this.setState({
                displayDelete: "none",
                displayDeleteStatus: "none"
            })
        }, 1500);
    }
    deleteListingNo = () => {
        this.setState({
            displayDelete: "none",
            deleteEmailVerified: "none"
        })
    }
    editListingEmailCheck = () => {
        let listingToEdit = this.state.listingToEdit
        let creatorEmail = listingToEdit.user.email
        let editEmailToVerify = this.state.editEmailToVerify
        if (editEmailToVerify === creatorEmail) {
            this.setState({
                editEmailVerified: "block",
                displayEditVerification: "none"
            })
        } else {
            this.setState({
                editEmailNotVerified: "block"
            })
        }
        console.log(creatorEmail, editEmailToVerify)

    }
    closeEdit = () => {
        this.setState({
            displayEdit: "none"
        })
    }
    editListingYes = async () => {
        // let listingToDelete = this.state.listingToDelete
        this.setState({
            active:"edit",
            editEmailVerified: "none"
        })
    }
    editListingNo = () => {
        this.setState({
            displayEdit: "none",
            editEmailVerified: "none"
        })
    }
    addNewListing = async () => {
        let osCompatibility = this.state.osCompatibilityInput
        let hotSwappable = this.state.hotSwappableInput
        let switches = this.state.switchesInput
        let keyboardBrand = this.state.keyboardBrandInput
        if (keyboardBrand === "new-input") {
            keyboardBrand = this.state.keyboardBrandInputNew
        } else {
            keyboardBrand = this.state.keyboardBrandInput
        }
        let keyboardModel = this.state.keyboardModelInput
        let keyboardSize = this.state.keyboardSizeInput
        let keyboardProductLink = this.state.keyboardProductLinkInput
        let keyboardImage = this.state.keyboardImageInput
        let keycapModel = this.state.keycapModelInput
        let keycapMaterial = this.state.keycapMaterialInput
        if (keycapMaterial === "new-input") {
            keycapMaterial = this.state.keycapMaterialInputNew
        } else {
            keycapMaterial = this.state.keycapMaterialInput
        }
        console.log(keycapMaterial)
        let keycapProfile = this.state.keycapProfileInput
        if (keycapProfile === "new-input") {
            keycapProfile = this.state.keycapProfileInputNew
        } else {
            keycapProfile = this.state.keycapProfileInput
        }
        let keycapManufacturer = this.state.keycapManufacturerInput
        if (keycapManufacturer === "new-input") {
            keycapManufacturer = this.state.keycapManufacturerInputNew
        } else {
            keycapManufacturer = this.state.keycapManufacturerInput
        }
        let username = this.state.usernameInput
        let email = this.state.emailInput
        if (osCompatibility.length === 0) {
            let osCompatibilityInputError = "At least one option must be selected"
            this.setState({
                osCompatibilityInputError
            })
        } else {
            this.setState({
                osCompatibilityInputError: ""
            })
        }
        if (switches.length < 5) {
            let switchesInputError = "Field value must be at least 5 characters long"
            this.setState({
                switchesInputError
            })
        } else {
            this.setState({
                switchesInputError: ""
            })
        }
        if (keyboardBrand.length < 5) {
            let keyboardBrandInputError = "Field value must be at least 5 characters long"
            this.setState({
                keyboardBrandInputError
            })
        } else {
            this.setState({
                keyboardBrandInputError: ""
            })
        }
        if (keyboardModel.length < 3) {
            let keyboardModelInputError = "Field value must be at least 3 characters long"
            this.setState({
                keyboardModelInputError
            })
        } else {
            this.setState({
                keyboardModelInputError: ""
            })
        }
        if (keyboardSize.length === 0) {
            let keyboardSizeInputError = "One option must be selected"
            this.setState({
                keyboardSizeInputError
            })
        } else {
            this.setState({
                keyboardSizeInputError: ""
            })
        }
        if (!keyboardProductLink.includes("https://")) {
            let keyboardProductLinkInputError = "Link provided must start with https://"
            this.setState({
                keyboardProductLinkInputError
            })
        } else if (keyboardProductLink.includes("https://")) {
            this.setState({
                keyboardProductLinkInputError: ""
            })
        }
        if (!keyboardImage.includes("https://")) {
            let keyboardImageInputError = "Link provided must start with https://"
            this.setState({
                keyboardImageInputError
            })
        } else if (keyboardImage.includes("https://")) {
            this.setState({
                keyboardImageInputError: ""
            })
        }
        if (keycapModel.length < 3) {
            let keycapModelInputError = "Field value must be at least 3 characters long"
            this.setState({
                keycapModelInputError
            })
        } else {
            this.setState({
                keycapModelInputError: ""
            })
        }
        let keycapMaterialInput = this.state.keycapMaterialInput
        let keycapMaterialInputNew = this.state.keycapMaterialInputNew
        if (keycapMaterialInput!=="new-input") {
            let keycapMaterialInputError = "One option must be selected"
            this.setState({
                keycapMaterialInputError
            })
        } else if(keycapMaterialInput === "new-input" ){
            let keycapMaterialInputError = "One option must be selected"
            this.setState({
                keycapMaterialInputError
            })
        } else if (keycapMaterialInput === "new-input" && keycapMaterialInputNew.length < 3) {
            let keycapMaterialInputError = "Field value must be at least 3 characters long"
            this.setState({
                keycapMaterialInputError
            })
        } else {
            this.setState({
                keycapMaterialInputError: ""
            })
        }
        if (keycapProfile.length < 2) {
            let keycapProfileInputError = "Field value must be at least 2 characters long"
            this.setState({
                keycapProfileInputError
            })
        } else {
            this.setState({
                keycapProfileInputError: ""
            })
        }
        if (keycapManufacturer.length < 3) {
            let keycapManufacturerInputError = "Field value must be at least 3 characters long"
            this.setState({
                keycapManufacturerInputError
            })
        } else {
            this.setState({
                keycapManufacturerInputError: ""
            })
        }
        if (username.length < 5) {
            let usernameInputError = "Field value must be at least 5 characters long"
            this.setState({
                usernameInputError
            })
        } else {
            this.setState({
                usernameInputError: ""
            })
        }
        if (email.length < 10) {
            let emailInputError = `Must be a valid email address that includes @ and "." and be more than 10 characters long`
            if (email.includes(".") && email.includes("@")) {
                emailInputError = `Email must be more than 10 characters long`
                this.setState({
                    emailInputError
                })
            } else if (!email.includes(".") && !email.includes("@")) {
                emailInputError = `Must be a valid email address that includes @ and "." and be more than 10 characters long`
                this.setState({
                    emailInputError
                })
            } else if (email.includes("@")) {
                let emailInputError = `Must be a valid email address that includes "." and be more than 10 characters long`
                this.setState({
                    emailInputError
                })
            } else if (email.includes(".")) {
                let emailInputError = `Must be a valid email address that includes "@" and be more than 10 characters long`
                this.setState({
                    emailInputError
                })
            }
        } else if (email.length >= 10) {
            let emailInputError = `Must be a valid email address that includes @ and "."`
            if (email.includes(".") && email.includes("@")) {
                this.setState({
                    emailInputError: ""
                })
            } else if (!email.includes(".") && !email.includes("@")) {
                emailInputError = `Must be a valid email address that includes @ and "."`
                this.setState({
                    emailInputError
                })
            } else if (email.includes("@")) {
                let emailInputError = `Must be a valid email address that includes "."`
                this.setState({
                    emailInputError
                })
            } else if (email.includes(".")) {
                let emailInputError = `Must be a valid email address that includes "@"`
                this.setState({
                    emailInputError
                })
            }
        }

        let listingToCreate = {
            '_id': "",
            osCompatibility,
            hotSwappable,
            switches,
            'keyboard': {
                keyboardBrand,
                keyboardModel,
                keyboardSize,
                keyboardProductLink,
                keyboardImage
            },
            'keycap': {
                keycapModel,
                keycapMaterial,
                keycapProfile,
                keycapManufacturer
            },
            'user': {
                username,
                email
            },
            'reviews': []
        }
        console.log(listingToCreate)

        let response = await axios.post(this.url + "listings/create", listingToCreate,)

        let data = [...this.state.data, { ...listingToCreate, '_id': response.data.insertedId }]
        // let data = [...this.state.data,listingToCreate]
        let dataCount = this.state.dataCount + 1;
        this.setState({
            active: "listings",
            data,
            database:data,
            dataCount,
            osCompatibilityInput: [],
            hotSwappableInput: "true",
            switchesInput: "",
            keyboardBrandInput: "Glorious",
            keyboardBrandInputNew: "",
            keyboardModelInput: "",
            keyboardSizeInput: "",
            keyboardProductLinkInput: "",
            keyboardImageInput: "",
            keycapModelInput: "",
            keycapProfileOptions: [],
            keycapProfileInput: "ASA",
            keycapProfileInputNew: "",
            keycapMaterialOptions: [],
            keycapMaterialInput: "",
            keycapMaterialInputNew: "",
            keycapManufacturerOptions: [],
            keycapManufacturerInput: "Akko",
            keycapManufacturerInputNew: "",
            usernameInput: "",
            emailInput: ""

        })
    }
    clearAddListingErrors = (page) => {
        this.setState({
            active: page,
            osCompatibilityInput: [],
            hotSwappableInput: "true",
            switchesInput: "",
            keyboardBrandInput: "Glorious",
            keyboardBrandInputNew: "",
            keyboardModelInput: "",
            keyboardSizeInput: "",
            keyboardProductLinkInput: "",
            keyboardImageInput: "",
            keycapModelInput: "",
            keycapProfileOptions: [],
            keycapProfileInput: "ASA",
            keycapProfileInputNew: "",
            keycapMaterialOptions: [],
            keycapMaterialInput: "",
            keycapMaterialInputNew: "",
            keycapManufacturerOptions: [],
            keycapManufacturerInput: "Akko",
            keycapManufacturerInputNew: "",
            usernameInput: "",
            emailInput: "",
            osCompatibilityInputError: "",
            switchesInputError: "",
            keyboardBrandInputError: "",
            keyboardModelInputError: "",
            keyboardSizeInputError: "",
            keyboardProductLinkInputError: "",
            keyboardImageInputError: "",
            keycapModelInputError: "",
            keycapMaterialInputError: "",
            keycapProfileInputError: "",
            keycapManufacturerInputError: "",
            usernameInputError: "",
            emailInputError: ""
        })
    }
    deriveKeyboardBrands = async () => {
        let keyboardBrands = [];
        await this.state.database.map(each =>
            keyboardBrands.push(each.keyboard.keyboardBrand)
        );
        let keyboardBrandOptions = [...new Set(keyboardBrands)];
        // console.log("key result===> ", keyboardBrandOptions)

        this.setState({
            keyboardBrandOptions
        })
        return
    }
    deriveKeycapProfile = async () => {
        let keycapProfiles = [];
        await this.state.database.map(each =>
            keycapProfiles.push(each.keycap.keycapProfile)
        );
        let keycapProfileOptions = [...new Set(keycapProfiles)];

        this.setState({
            keycapProfileOptions
        })
        return
    }
    deriveKeycapMaterial = async () => {
        let keycapMaterials = [];
        await this.state.database.map(each =>
            keycapMaterials.push(each.keycap.keycapMaterial)
        );
        let keycapMaterialOptions = [...new Set(keycapMaterials)];

        this.setState({
            keycapMaterialOptions
        })
        return
    }
    deriveKeycapManufacturer = async () => {
        let keycapManufacturers = [];
        await this.state.database.map(each =>
            keycapManufacturers.push(each.keycap.keycapManufacturer)
        );
        let keycapManufacturerOptions = [...new Set(keycapManufacturers)];
        console.log("key result===> ", this.state.database)

        this.setState({
            keycapManufacturerOptions
        })
        return
    }
    osCompatibilityInputSelected = (event) => {

        if (this.state.osCompatibilityInput.includes(event.target.value)) {
            let indexToRemove = this.state.osCompatibilityInput.indexOf(event.target.value);
            let osCompatibilityInput = [...this.state.osCompatibilityInput.slice(0, indexToRemove),
            ...this.state.osCompatibilityInput.slice(indexToRemove + 1)];
            this.setState({
                osCompatibilityInput
            })
        } else {
            let osCompatibilityInput = this.state.osCompatibilityInput;
            osCompatibilityInput.push(event.target.value);
            this.setState({
                osCompatibilityInput
            })
        }
    }

    closeSearch = () => {
        let count = this.state.count + 1
        this.setState({
            count,
            displaySearch: "none"
        })
    }
    deriveSearch = async () => {
        let query = new URLSearchParams({
            osCompatibility: this.state.osCompatibility,
            hotSwappable: this.state.hotSwappable,
            textSearch: this.state.textSearch
        });
        let keyboardSize = this.state.keyboardSize;
        let keyboardSizeQuery = "&keyboardSize=";
        let keyboardBrand = this.state.keyboardBrand;
        let keyboardBrandQuery = "&keyboardBrand=";
        this.setState({
            searchError: "",
            keyboardSizeError: "",
            keyboardBrandError: "",
            dataCountMessage: "",
        })
        if (keyboardSize.length === 0 || keyboardBrand.length === 0) {
            this.setState({
                searchError: "Form not submitted, all fields must be completed. "
            })
            if (keyboardSize.length === 0) {
                this.setState({
                    keyboardSizeError: "At least one option must be selected"
                })
            } else {
                this.setState({
                    keyboardSizeError: ""
                })
            }
            if (keyboardBrand.length === 0) {
                this.setState({
                    keyboardBrandError: "At least one option must be selected"
                })
            } else {
                this.setState({
                    keyboardBrandError: ""
                })
            }
        } else {
            if (Array.isArray(keyboardSize)) {
                for (let i = 0; i < keyboardSize.length; i++) {
                    keyboardSizeQuery += keyboardSize[i] + ",";
                }
                keyboardSizeQuery = keyboardSizeQuery.slice(0, -1);
            } else {
                keyboardSizeQuery += keyboardSize + ",";
            };

            if (Array.isArray(keyboardBrand)) {
                for (let i = 0; i < keyboardBrand.length; i++) {
                    keyboardBrandQuery += keyboardBrand[i] + ",";
                }
                keyboardBrandQuery = keyboardBrandQuery.slice(0, -1);
            } else {
                keyboardBrandQuery += keyboardBrand + ",";
            };

            let searchLinkQuery = this.url + "listings?" + query.toString() + keyboardSizeQuery + keyboardBrandQuery
            console.log(this.url + "listings?" + query.toString() + keyboardSizeQuery + keyboardBrandQuery);

            let searchResults = await axios.get(searchLinkQuery)
            console.log(searchResults)
            let dataCountMessage = searchResults.data.count + " results found.";

            this.setState({
                data: searchResults.data.data,
                dataCount: searchResults.data.count,
                dataCountMessage,
                searchError: "Form submitted. ",
            })
        }
    }
    keyboardBrandSelected = (event) => {
        if (this.state.keyboardBrand.includes(event.target.value)) {
            let indexToRemove = this.state.keyboardBrand.indexOf(event.target.value);
            let keyboardBrand = [...this.state.keyboardBrand.slice(0, indexToRemove),
            ...this.state.keyboardBrand.slice(indexToRemove + 1)];
            this.setState({
                keyboardBrand
            })
        } else {
            let keyboardBrand = this.state.keyboardBrand;
            keyboardBrand.push(event.target.value);
            this.setState({
                keyboardBrand
            })
        }
    }
    keyboardSizeSelected = (event) => {
        if (this.state.keyboardSize.includes(event.target.value)) {
            let keyboardSize = this.state.keyboardSize.slice();
            let indexToRemove = this.state.keyboardSize.indexOf(event.target.value);
            keyboardSize = [...keyboardSize.slice(0, indexToRemove), ...keyboardSize.slice(indexToRemove + 1)];
            this.setState({
                keyboardSize
            })
        } else {
            let keyboardSize = this.state.keyboardSize.slice();
            keyboardSize.push(event.target.value);
            this.setState({
                keyboardSize
            })
        }
    }

    osCompatibilityEdit = (event) => {
        let osCompatibility = this.state.listingToEdit.osCompatibility;
        let osCompatibilityEdited = [];
        if (Array.isArray(osCompatibility) && osCompatibility.includes(event.target.value)) {
            let indexToRemove = osCompatibility.indexOf(event.target.value);
            osCompatibilityEdited = [...osCompatibility.slice(0, indexToRemove),
            ...osCompatibility.slice(indexToRemove + 1)];
            this.setState({
                listingToEdit: { ...this.state.listingToEdit, osCompatibility: osCompatibilityEdited }
            })
        } else if (!Array.isArray(osCompatibility) && osCompatibility.includes(event.target.value)) {
            this.setState({
                listingToEdit: { ...this.state.listingToEdit, osCompatibility: [] }
            })
        } else if (!Array.isArray(osCompatibility) && !osCompatibility.includes(event.target.value)) {
            osCompatibilityEdited = [osCompatibility];
            osCompatibilityEdited.push(event.target.value);
            this.setState({
                listingToEdit: { ...this.state.listingToEdit, osCompatibility: osCompatibilityEdited }
            })
        } else if (Array.isArray(osCompatibility) && !osCompatibility.includes(event.target.value)) {
            osCompatibilityEdited = [...osCompatibility];
            osCompatibilityEdited.push(event.target.value);
            this.setState({
                listingToEdit: { ...this.state.listingToEdit, osCompatibility: osCompatibilityEdited }
            })
        }
    }
    confirmChanges = async () => {
        let tracker=[];
        let trackerAddNew =[];
        let listingToEdit = this.state.listingToEdit;
        let listingToEditCloned = { ...listingToEdit };
        let osCompatibility = listingToEdit.osCompatibility;
        let switches = listingToEdit.switches;
        let keyboardBrand = listingToEdit.keyboard.keyboardBrand;
        let keyboardBrandInputNew = this.state.keyboardBrandInputNew;
        if (keyboardBrand === "new-input") {
            keyboardBrand = keyboardBrandInputNew;
            trackerAddNew.push("keyboardBrand")
        }
        let keyboardModel = listingToEdit.keyboard.keyboardModel;
        let keyboardProductLink = listingToEdit.keyboard.keyboardProductLink;
        let keyboardImage = listingToEdit.keyboard.keyboardImage;
        let keycapModel = listingToEdit.keycap.keycapModel;
        let username = listingToEdit.user.username;
        let email = listingToEdit.user.email;
        let keycapMaterial = listingToEdit.keycap.keycapMaterial;
        let keycapMaterialInputNew = this.state.keycapMaterialInputNew;
        if (keycapMaterial === "new-input") {
            keycapMaterial = keycapMaterialInputNew;
            trackerAddNew.push("keycapMaterial")
        };
        let keycapProfile = listingToEdit.keycap.keycapProfile;
        let keycapProfileInputNew = this.state.keycapProfileInputNew;
        if (keycapProfile === "new-input") {
            keycapProfile = keycapProfileInputNew;
            trackerAddNew.push("keycapProfile")
        };
        let keycapManufacturer = listingToEdit.keycap.keycapManufacturer;
        let keycapManufacturerInputNew = this.state.keycapManufacturerInputNew;
        if (keycapManufacturer === "new-input") {
            keycapManufacturer = keycapManufacturerInputNew;
            trackerAddNew.push("keycapManufacturer")
        };
        if (osCompatibility.length === 0) {
            this.setState({
                osCompatibilityInputError: "At least one option must be selected"
            })
        } else {
            tracker.push("true");
            this.setState({
                osCompatibilityInputError: ""
            });
        };
        if (switches.length < 5) {
            let switchesInputError = "Field value must be at least 5 characters long"
            this.setState({
                switchesInputError
            })
        } else {
            tracker.push("true");
            this.setState({
                switchesInputError: ""
            });
        };
        console.log(keyboardBrand)
        console.log(keyboardBrand.length < 5)
        let keyboardBrandInputError = "";
        if (keyboardBrand.length < 5) {
            keyboardBrandInputError = "Field value must be at least 5 characters long"
            this.setState({
                keyboardBrandInputError
            });
        } else {
            tracker.push("true");
            keyboardBrandInputError = ""
            this.setState({
                keyboardBrandInputError
            })
        }
        if (keyboardModel.length < 3) {
            let keyboardModelInputError = "Field value must be at least 3 characters long"
            this.setState({
                keyboardModelInputError
            })
        } else {
            tracker.push("true")
            this.setState({
                keyboardModelInputError: ""
            })
        }
        if (!keyboardProductLink.includes("https://")) {
            let keyboardProductLinkInputError = "Link provided must start with https://"
            this.setState({
                keyboardProductLinkInputError
            })
        } else if (keyboardProductLink.includes("https://")) {
            tracker.push("true")
            this.setState({
                keyboardProductLinkInputError: ""
            })
        }
        if (!keyboardImage.includes("https://")) {
            let keyboardImageInputError = "Link provided must start with https://"
            this.setState({
                keyboardImageInputError
            })
        } else if (keyboardImage.includes("https://")) {
            tracker.push("true")
            this.setState({
                keyboardImageInputError: ""
            })
        }
        if (keycapModel.length < 3) {
            let keycapModelInputError = "Field value must be at least 3 characters long"
            this.setState({
                keycapModelInputError
            })
        } else {
            tracker.push("true")
            this.setState({
                keycapModelInputError: ""
            })
        }
        let keycapMaterialInputError = ""
        if (keycapMaterialInputNew.length < 3) {
            keycapMaterialInputError = "Field value must be at least 3 characters long"
            this.setState({
                keycapMaterialInputError
            })
        } else {
            tracker.push("true")
            keycapMaterialInputError = ""
            this.setState({
                keycapMaterialInputError
            })
        }
        let keycapProfileInputError = ""
        if (keycapProfileInputNew.length < 2) {
            keycapProfileInputError = "Field value must be at least 2 characters long"
            this.setState({
                keycapProfileInputError,
            })
        } else {
            tracker.push("true")
            keycapProfileInputError = ""
            this.setState({
                keycapProfileInputError
            })
        }
        let keycapManufacturerInputError = ""
        if (keycapManufacturerInputNew.length < 3) {
            keycapManufacturerInputError = "Field value must be at least 3 characters long"
            this.setState({
                keycapManufacturerInputError,
            })
        } else {
            tracker.push("true")
            keycapManufacturerInputError = ""
            this.setState({
                keycapManufacturerInputError
            })
        }

        if (username.length < 5) {
            let usernameInputError = "Field value must be at least 5 characters long"
            this.setState({
                usernameInputError
            })
        } else {
            tracker.push("true")
            this.setState({
                usernameInputError: ""
            })
        }
        if (email.length < 10) {
            let emailInputError = `Must be a valid email address that includes @ and "." and be more than or equal to 10 characters long`
            if (email.includes(".") && email.includes("@")) {
                emailInputError = `Email must be more than or equal to 10 characters long`
                this.setState({
                    emailInputError
                })
            } else if (!email.includes(".") && !email.includes("@")) {
                emailInputError = `Must be a valid email address that includes @ and "." and be more than or equal to 10 characters long`
                this.setState({
                    emailInputError
                })
            } else if (email.includes("@")) {
                let emailInputError = `Must be a valid email address that includes "." and be more than or equal to 10 characters long`
                this.setState({
                    emailInputError
                })
            } else if (email.includes(".")) {
                let emailInputError = `Must be a valid email address that includes "@" and be more than or equal to 10 characters long`
                this.setState({
                    emailInputError
                })
            }
        } else if (email.length >= 10) {
            let emailInputError = `Must be a valid email address that includes @ and "."`
            if (email.includes(".") && email.includes("@")) {
                tracker.push("true");
                this.setState({
                    emailInputError: ""
                })
            } else if (!email.includes(".") && !email.includes("@")) {
                emailInputError = `Must be a valid email address that includes @ and "."`
                this.setState({
                    emailInputError
                })
            } else if (email.includes("@")) {
                let emailInputError = `Must be a valid email address that includes "."`
                this.setState({
                    emailInputError
                })
            } else if (email.includes(".")) {
                let emailInputError = `Must be a valid email address that includes "@"`
                this.setState({
                    emailInputError
                })
            }
        }

        if(trackerAddNew.includes("keyboardBrand")){
            keyboardBrand=this.state.keyboardBrandInputNew
        }if(trackerAddNew.includes("keycapProfile")){
            keycapProfile=this.state.keycapProfileInputNew
        }
        if(trackerAddNew.includes("keycapManufacturer")){
            keycapManufacturerInputNew= this.state.keycapManufacturerInputNew
        }
        if(trackerAddNew.includes("keycapMaterial")){
            keycapMaterial=this.state.keycapMaterialInputNew
        }
        console.log(tracker)
        console.log(trackerAddNew)
        if (tracker.length === 9 && trackerAddNew.length === 0) {
            //when editor changes nothing and saves
            let listingToEditConfirmed = {...listingToEditCloned}
            console.log(listingToEditConfirmed)

            let listingToEditId =this.state.listingToEdit._id;
            let indexToReplace = this.state.data.findIndex(function (each) {
                if (each._id === listingToEditId) {
                    return true;
                } else {
                    return false;
                }
            })
            let revisedData =[...this.state.data.slice(0,indexToReplace),
                                listingToEditConfirmed,
                                ...this.state.data.slice(indexToReplace+1)]
            this.setState({
                active:'listings',
                data:revisedData,
                displayEditStatus: "block",
                listingToEdit: {
                    ...listingToEditCloned
                },
                keyyboardBrandInputNew: "",
                keycapProfileInputNew: "",
                keycapMaterialInputNew: "",
                keycapManufacturerInputNew: "",
                osCompatibilityInputError: "",
                switchesInputError: "",
                keyboardBrandInputError: "",
                keyboardModelInputError: "",
                keyboardSizeInputError: "",
                keyboardProductLinkInputError: "",
                keyboardImageInputError: "",
                keycapModelInputError: "",
                keycapMaterialInputError: "",
                keycapProfileInputError: "",
                keycapManufacturerInputError: "",
                usernameInputError: "",
                emailInputError: ""
            })

            
            console.log(listingToEditConfirmed)
            await axios.put(this.url+"listings/edit/"+listingToEdit._id,listingToEditConfirmed)
            
            setTimeout(() => {
                this.setState({
                    displayEditStatus: "none",
                    displayEdit: "none"
                })
            }, 1500);

        } else if ((tracker.length === 12 && trackerAddNew.length === 4) ||
            (tracker.length >= 9 && trackerAddNew.length === 1) ||
            (tracker.length >= 10 && trackerAddNew.length === 2) ||
            (tracker.length >= 11 && trackerAddNew.length === 3)) {
            // when editor changes keyboardBrand,keycapProfile,keycapManufacturer,keycapMaterial to add a new option
            console.log(keyboardBrandInputNew,keycapManufacturerInputNew,keycapMaterialInputNew,keycapProfileInputNew)
            
            let listingToEditConfirmed = {
                ...listingToEditCloned,
                keyboard: {
                    ...listingToEditCloned.keyboard,
                    keyboardBrand
                },
                keycap:{...listingToEdit.keycap,
                    keycapMaterial,
                    keycapProfile,
                    keycapManufacturer
                }
            }
            console.log(listingToEditConfirmed)

            let listingToEditId =this.state.listingToEdit._id;
            let indexToReplace = this.state.data.findIndex(function (each) {
                if (each._id === listingToEditId) {
                    return true;
                } else {
                    return false;
                }
            })
            let revisedData =[...this.state.data.slice(0,indexToReplace),
                                listingToEditConfirmed,
                                ...this.state.data.slice(indexToReplace+1)]
            this.setState({
                active:'listings',
                data:revisedData,
                database:revisedData,
                displayEditStatus: "block",
                listingToEdit: {
                    ...listingToEditCloned,
                    keyboard: {
                        ...listingToEditCloned.keyboard,
                        keyboardBrand
                    },
                    keycap:{...listingToEdit.keycap,
                        keycapMaterial,
                        keycapProfile,
                        keycapManufacturer
                    }
                },
                keyyboardBrandInputNew: "",
                keycapProfileInputNew: "",
                keycapMaterialInputNew: "",
                keycapManufacturerInputNew: "",
                osCompatibilityInputError: "",
                switchesInputError: "",
                keyboardBrandInputError: "",
                keyboardModelInputError: "",
                keyboardSizeInputError: "",
                keyboardProductLinkInputError: "",
                keyboardImageInputError: "",
                keycapModelInputError: "",
                keycapMaterialInputError: "",
                keycapProfileInputError: "",
                keycapManufacturerInputError: "",
                usernameInputError: "",
                emailInputError: ""
            })

            await axios.put(this.url+"listings/edit/"+listingToEdit._id,listingToEditConfirmed)
            
            setTimeout(() => {
                this.setState({
                    displayEditStatus: "none",
                    displayEdit: "none"
                })
            }, 1500);

        } 
    }
    updateFormFieldEditKeyboard = (event) => {
        let listingToEdit = this.state.listingToEdit
        let listingToEditCloned = { ...listingToEdit }
        this.setState({
            listingToEdit: {
                ...listingToEditCloned,
                keyboard: { ...listingToEdit.keyboard, [event.target.name]: event.target.value }
            }
        })
    }
    updateFormFieldEditKeycap = (event) => {
        let listingToEdit = this.state.listingToEdit
        let listingToEditCloned = { ...listingToEdit }
        this.setState({
            listingToEdit: {
                ...listingToEditCloned,
                keycap: { ...listingToEdit.keycap, [event.target.name]: event.target.value }
            }
        })
    }
    updateFormFieldEditUser = (event) => {
        let listingToEdit = this.state.listingToEdit
        let listingToEditCloned = { ...listingToEdit }
        this.setState({
            listingToEdit: {
                ...listingToEditCloned,
                user: { ...listingToEdit.user, [event.target.name]: event.target.value }
            }
        })
    }
    updateFormFieldEdit = (event) => {
        let listingToEdit = this.state.listingToEdit
        let listingToEditCloned = { ...listingToEdit }

        this.setState({
            listingToEdit: {
                ...listingToEditCloned,
                [event.target.name]: event.target.value
            }
        })
    }
    updateFormFieldGeneral = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    updateFormFieldEditComment = (event) => {
        this.setState({
            [event.target.name]: { ...this.state.commentToEdit, comments: event.target.value }
        })
    }
    updateFormField = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        this.textValidation(event.target.value)
    }

    textValidation(comment) {
        if (comment.length >= 3) {
            this.setState({
                newComment: comment,
                errorMessageAddComment: ""
            })
        } else {
            this.setState({
                errorMessageAddComment: "Comment must be at least 3 characters long"
            })
        };
    };
    editCommentEmailCheck = async (tempList, commentToEdit, data, editCommentEmail) => {
        commentToEdit.email === editCommentEmail ?
            this.setState({
                displayEditCommentCheck: "none",
                displayEditCommentEmailStatus: "none",
                editCommentEmail: "",
                displayEditCommentText:"none"
            })
            : this.setState({
                displayEditCommentCheck: "block",
                displayEditCommentEmailStatus: "block",
                displayEditCommentText:"none"
            })

        let comments = commentToEdit.comments
        commentToEdit.email === editCommentEmail ?
            await axios.post(this.url + "listings/review/edit/" + commentToEdit.reviewId, {
                comments
            })
            : console.log("Email verification failed, comment not edited")

        let index = this.state.tempList.reviews.findIndex(function (each) {
            if (each.reviewId === commentToEdit.reviewId) {
                return true;
            } else {
                return false;
            }
        })
        let tempListRevised = {
            ...tempList, reviews: [
                ...tempList.reviews.slice(0, index),
                commentToEdit, ...tempList.reviews.slice(index + 1)
            ]
        }
        commentToEdit.email === editCommentEmail ?
            this.setState({
                data: [...data.slice(0, index), tempListRevised, ...data.slice(index + 1)],
                tempList: tempListRevised
            })
            : this.setState({
                data: [...data],
                tempList: { ...tempList }
            })
    }
    editCommentVerification = () => {
        this.setState({
            displayEditCommentCheck: "block",
            displayEditComment: "none",
            displayEditCommentText:"block"
        })
    }
    editComment = (eachComment) => {
        this.setState({
            commentToEdit: eachComment,
            displayEditComment: "block",
            displayEditCommentCheck: "none"
        });
    }
    deleteComment = async (eachComment) => {
        this.setState({
            commentToDelete: eachComment
        })
        await axios.post(this.url + "listings/review/delete/" + eachComment.reviewId)
        let indexToDelete = this.state.tempList.reviews.findIndex(function (each) {
            if (each.reviewId === eachComment.reviewId) {
                return true;
            } else {
                return false;
            }
        })
        let tempListId = this.state.tempListId
        let index = this.state.data.findIndex(function (each) {
            if (each._id === tempListId) {
                return true;
            } else {
                return false;
            }
        })
        let tempListRevised = {
            ...this.state.tempList,
            reviews:
                [...this.state.tempList.reviews.slice(0, indexToDelete),
                ...this.state.tempList.reviews.slice(indexToDelete + 1)
                ]
        };
        console.log("updated data==>", tempListRevised)
        console.log(this.state.data)
        let newData = [
            ...this.state.data.slice(0, index),
            tempListRevised,
            ...this.state.data.slice(index + 1)
        ]
        console.log(newData)
        this.setState({
            // 'data': [...this.state.data.slice(0, index), tempListRevised, ...this.state.data.slice(index + 1)],
            'tempList': tempListRevised
        })
    }
    addNewComment = async (username, email, newComment, tempList, data) => {
        if (newComment.length >= 3 && username.length >= 3 && email.includes("@") && email.includes(".") && email.length >= 10) {
            try {
                let response = await axios.post(this.url + "listings/review/create/" + tempList._id, {
                    username: username,
                    email: email,
                    comments: newComment
                })
                console.log(response.data)
                let tempListRevised = {
                    ...tempList, reviews: [...tempList.reviews, {
                        reviewId: response.data.insertedId,
                        username: username,
                        email: email,
                        comments: newComment
                    }]
                }

                let index = this.state.data.findIndex(function (each) {
                    if (each._id === tempListRevised._id) {
                        return true;
                    } else {
                        return false;
                    }
                })

                this.setState({
                    data: [...data.slice(0, index), tempListRevised, ...data.slice(index + 1)],
                    tempList: tempListRevised,
                    errorMessageAddCommentUser: "",
                    newComment: ""
                })
            } catch (e) {
                alert("Error adding comment. Please contact administrator");
            }
        } else {
            let error1 = "";
            let error2 = "";
            let error3 = "";
            let errorMessages = [];
            if (newComment < 3) {
                this.setState({
                    errorMessageAddComment: "Comment must be at least 3 characters long"
                })
            }
            if (username.length < 3) {
                error1 = "Username must be at least 3 characters long. ";
                errorMessages.push(error1);
            }
            if (!email.includes("@") || !email.includes(".")) {
                error2 = "Email must include '@' and '.' . ";
                errorMessages.push(error1);
            }
            if (email.length < 10) {
                error3 = "Email must be at least 10 characters long. ";
                errorMessages.push(error1);
            }
            this.setState({
                errorMessageAddCommentUser: [error1, error2, error3]
            })
        };
    }

    returnPage = () => {
        this.setState({
            'active': 'listings'
        })

    }

    render() {
        return (
            <React.Fragment>
                {this.renderPage()}
            </React.Fragment>
        );
    }

}

