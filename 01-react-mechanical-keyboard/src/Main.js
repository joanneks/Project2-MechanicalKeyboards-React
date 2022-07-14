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
        newComment: "",
        errorMessage:[]
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
                        tempList: each
                    });
                    console.log(each);
                }}
            />
        } else if (this.state.active === "each-listing") {
            return <EachListing
                activeStateHomePage={() => this.setState({ active: "home-page" })}
                tempList={this.state.tempList}
                newComment={this.state.newComment}
                updateFormField={this.updateFormField}
                errorMessage={this.state.errorMessage}
                addNewComment={async()=>this.addNewComment(this.state.newComment,this.state.tempList,this.state.data)}
                returnPage={this.returnPage}
                
            />
        } else if (this.state.active === "home-page") {
            return <HomePage
                changePageCreate={() => this.changePage("create")}
                changePageListings={() => this.changePage("listings")}
            />
        }
    };
    updateFormField = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        this.textValidation(event.target.value)
    }

    textValidation(comment) {
        if (comment.length >= 3) {
            this.setState({
                newComment :comment,
                errorMessage : ""
            })
        } else {
            this.setState({
                errorMessage :"Comment must be at least 3 characters long"
            })
        };
    };

    addNewComment = async (newComment,tempList,data) => {
        try {
            let response = await axios.post(this.url+"listings/review/create/"+tempList._id,{
                username:"tommyChoo344",
                comments:newComment
            })
            
            let tempListRevised = {...tempList,reviews:[...tempList.reviews,{
                reviewId: response.data.insertedId,
                username:"tommyChoo344",
                comments:newComment
            }]}
            console.log(tempListRevised)

            let index = this.state.data.findIndex(function(each){
                if(each._id === tempListRevised._id){
                    return true;
                } else{
                    return false;
                }
            })

            this.setState({
                'data': [...data.slice(0,index), tempListRevised, ...data.slice(index+1)],
            })
        } catch(e) {
            alert("Error adding comment. Please contact administrator");
        }
    }

    returnPage = ()=>{
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

