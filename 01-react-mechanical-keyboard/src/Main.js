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
        newComment: "",
        username: "",
        email: "",
        errorMessageAddComment: [],
        errorMessageAddCommentUser: []
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
                activeStateHomePage={() => this.setState({ active: "home-page" })}
            />
        } else if (this.state.active === "listings") {
            return <Listings
                data={this.state.data}
                activeStateHomePage={() => this.setState({ active: "home-page" })}
                activeStateEachListing={(each) => {
                    this.setState({
                        active: "each-listing",
                        tempList: each,
                        tempListId: each._id
                    });
                    console.log(each);
                }}
            />
        } else if (this.state.active === "each-listing") {
            return <EachListing
                activeStateHomePage={() => this.setState({ active: "home-page" })}
                tempList={this.state.tempList}
                newComment={this.state.newComment}
                username={this.state.username}
                email={this.state.email}
                updateFormFieldGeneral={this.updateFormFieldGeneral}
                updateFormField={this.updateFormField}
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
                deleteComment={async (eachComment) => {
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
                    // let index = this.state.data.findIndex(function(each){
                    //     if(each._id === this.state.tempListId){
                    //         return true;
                    //     } else{
                    //         return false;
                    //     }
                    // })
                    let tempListRevised = {
                        ...this.state.tempList,
                        reviews:
                            [...this.state.tempList.reviews.slice(0, indexToDelete),
                            ...this.state.tempList.reviews.slice(indexToDelete + 1)
                            ]
                    };
                    console.log(tempListRevised)
                    this.setState({
                        // 'data': [...this.state.data.slice(0, index), tempListRevised, ...this.state.data.slice(index + 1)],
                        'tempList': tempListRevised
                    })
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

    updateFormFieldGeneral = (event) => {
        this.setState({
            [event.target.name]: event.target.value
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
                console.log(tempListRevised)

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

