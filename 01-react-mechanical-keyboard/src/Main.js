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
        tempList: {},
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
        newComment: "",
        username: "",
        editCommentEmail: "",
        email: "",
        errorMessageAddComment: [],
        errorMessageAddCommentUser: [],
        keyboardBrandOptions: [],
        keyboardBrandLoaded: false,
        osCompatibility: "Windows",
        hotSwappable: "true",
        keyboardSize: [],
        keyboardBrand: []
    }
    async componentDidMount() {
        let response = await axios.get(this.url + "listings");
        this.setState({
            data: response.data.data
        })
        console.log(response.data.data)
    }

    changePage(page) {
        this.setState({
            active: page
        })
    }
    renderPage() {
        if (this.state.active === "create") {
            return <Create
                data={this.state.data}
                activeStateCreate={() => this.setState({ active: "create" })}
                activeStateListings={() => this.setState({ active: "listings" })}
                activeStateHomePage={() => this.setState({ active: "home-page" })}
            />
        } else if (this.state.active === "listings") {
            return <Listings
                data={this.state.data}
                activeStateCreate={() => this.setState({ active: "create" })}
                activeStateHomePage={() => this.setState({ active: "home-page" })}
                activeStateEachListing={(each) => {
                    this.setState({
                        active: "each-listing",
                        tempList: each,
                        tempListId: each._id
                    });
                    console.log(each);
                }}
                // keyboardBrandLoaded={this.state.keyboardBrandLoaded}
                // keyboardBrandOptions={this.state.keyboardBrandOptions}
                // deriveKeyboardBrands={this.deriveKeyboardBrands()}
                searchDisplay={() => {
                    let count = this.state.count
                    this.setState({
                        count: count + 1
                    })
                    if (count % 2 === 0) {
                        this.setState({
                            displaySearch: "block",
                        })
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
                // keyboardBrandSelected={this.keyboardBrandSelected}
                // keyboardBrand={this.state.keyboardBrand}
                updateFormFieldGeneral={this.updateFormFieldGeneral}
                deriveSearch={this.deriveSearch}
            />
        } else if (this.state.active === "each-listing") {
            return <EachListing
                activeStateCreate={() => this.setState({ active: "create" })}
                activeStateListings={() => this.setState({ active: "listings" })}
                activeStateHomePage={() => this.setState({ active: "home-page" })}
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
                changePageCreate={() => this.changePage("create")}
                changePageListings={() => this.changePage("listings")}
            />
        }
    };
    deriveSearch = async ()=>{
        let query = new URLSearchParams({
            osCompatibility: this.state.osCompatibility,
            hotSwappable: this.state.hotSwappable
          });
        
        let thisKeyboardSize = this.state.keyboardSize
          // Object.entries(params).forEach(([k, v]) => {
          //     if (Array.isArray(v)) {
          //       v.forEach(vv => query.append(k, vv))
          //     } else query.append(k, v)
          //   })
          Object.entries(query).forEach(([keyboardSize,eachKeyboardSize])=>{
              if(Array.isArray(thisKeyboardSize)){
                  eachKeyboardSize.forEach(value => query.append(keyboardSize, value)
              )}else query.append(keyboardSize,value)
          })

        console.log(this.state.keyboardSize);
        let searchLinkQuery = this.url+"listings?"+query.toString()
        console.log(this.url+"listings?"+query.toString());

        let searchResults = await axios.get(searchLinkQuery)
        console.log(searchResults)
        this.setState({
            data: searchResults.data.data
        })
    }
    // deriveKeyboardBrands = () => {
        // let keyboardBrands = [];
        // if (!this.state.keyboardBrandLoaded) {
        //     let keyboardBrands = [];
        //     this.state.data.map(each =>
        //         keyboardBrands.push(each.keyboard.keyboardBrand)
        //     );
        //     let keyboardBrandOptions = [...new Set(keyboardBrands)];
        //     this.setState({
        //         keyboardBrandOptions,
        //         keyboardBrandLoaded: true
        //     })
        //     return keyboardBrandOptions;
        // } else {
        //     return [];
        // }
        // let keyboardBrands = [];
        // this.state.data.map(each =>
        //     keyboardBrands.push(each.keyboard.keyboardBrand)
        // );
        // let keyboardBrandOptions = [...new Set(keyboardBrands)];
        
        // return !this.state.keyboardBrandLoaded ?
        //     keyboardBrands = this.setState({
        //         keyboardBrandOptions,
        //         keyboardBrandLoaded: true
        //     })
        //     : keyboardBrands = []
    // }
    keyboardBrandSelected = (event) => {
        if (this.state.keyboardBrand.includes(event.target.value)) {
            let indexToRemove = this.state.keyboardBrand.indexOf(event.target.value);
            let keyboardBrand = [...this.state.keyboardBrand.slice(0, indexToRemove), ...this.state.keyboardBrand.slice(indexToRemove + 1)]
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
        let response = await axios.post(this.url + "listings/review/edit/" + commentToEdit.reviewId, {
            comments
        })
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
        this.setState({
            data: [...data.slice(0, index), tempListRevised, ...data.slice(index + 1)],
            tempList: tempListRevised
        })

    }

    // editCommentEmailCheck = async (tempList,commentToEdit, data)=>{
    //     this.state.commentToEdit.email === this.state.editCommentEmail ?
    //                 this.setState({
    //                     displayEditCommentCheck : "none",
    //                     displayEditCommentEmailStatus: "none"
    //                 })
    //                 :this.setState({
    //                     displayEditCommentCheck : "block",
    //                     displayEditCommentEmailStatus: "block"
    //                 })
    //     let comments = this.state.commentToEdit.comments
    //     let response = await axios.post(this.url+"listings/review/edit/"+this.state.commentToEdit.reviewId,{
    //         comments
    //     })
    //     let index = this.state.tempList.reviews.findIndex(function (each) {
    //         if (each.reviewId === commentToEdit.reviewId) {
    //             return true;
    //         } else {
    //             return false;
    //         }
    //     })
    //     let tempListRevised = {
    //         ...tempList, reviews: [
    //             ...tempList.reviews.slice(0,index),
    //             comment.toEdit,...tempList.reviews.slice(index+1)
    //         ]
    //     }
    //     this.setState({
    //         data: [...data.slice(0, index), tempListRevised, ...data.slice(index + 1)],
    //         tempList: tempListRevised
    //     })

    // }

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
        let response = await axios.post(this.url + "listings/review/delete/" + eachComment.reviewId)
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

