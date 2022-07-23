import React from 'react';
import axios from 'axios';

import Create from './pages/Create';
import Listings from './pages/Listings';
import HomePage from './pages/HomePage';
import EachListing from './pages/EachListing';


export default class Main extends React.Component {
    url = "https://8000-joanneks-project2mechan-wyo4981gl1z.ws-us54.gitpod.io/";

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
                keycapProfileInputError={this.keycapProfileInputError}
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
                activeStateEachListing={(each) => {
                    this.setState({
                        active: "each-listing",
                        tempList: each,
                        tempListId: each._id
                    });
                    // console.log(each);
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
                changePageCreate={async () => this.changePage("create")}
                changePageListings={async () => this.changePage("listings")}
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
        }, 2000);
    }
    deleteListingNo = () => {
        this.setState({
            displayDelete: "none",
            deleteEmailVerified: "none"
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
        let password = "password1!";
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
        if (switches.length <= 5) {
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
        if(!keyboardProductLink.includes("https://")){
            let keyboardProductLinkInputError = "Link provided must start with https://"
            this.setState({
                keyboardProductLinkInputError
            })
        } else if (keyboardProductLink.includes("https://")) {
            this.setState({
                keyboardProductLinkInputError: ""
            })
        }
        if(!keyboardImage.includes("https://")){
            let keyboardImageInputError = "Link provided must start with https://"
            this.setState({
                keyboardImageInputError
            })
        } else if (keyboardImage.includes("https://")) {
            this.setState({
                keyboardImageInputError: ""
            })
        }
        if(keycapModel.length<3){
            let keycapModelInputError = "Field value must be at least 3 characters long"
            this.setState({
                keycapModelInputError
            })
        } else {
            this.setState({
                keycapModelInputError: ""
            })
        }
        if (keycapMaterial.length<3){
            let keycapMaterialInputError = "Field value must be at least 3 characters long"
            this.setState({
                keycapMaterialInputError
            })
        } else {
            this.setState({
                keycapMaterialInputError: ""
            })
        }
        if (keycapProfile.length<2){
            let keycapProfileInputError = "Field value must be at least 2 characters long"
            this.setState({
                keycapProfileInputError
            })
        } else {
            this.setState({
                keycapProfileInputError: ""
            })
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
                email,
                password
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
                editCommentEmail: ""
            })
            : this.setState({
                displayEditCommentCheck: "block",
                displayEditCommentEmailStatus: "block"
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
            displayEditComment: "none"

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
        // if (username.length >= 3) {
        //     if (email.includes("@") && email.includes(".")) {
        //         if (email.length >= 10) {
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

