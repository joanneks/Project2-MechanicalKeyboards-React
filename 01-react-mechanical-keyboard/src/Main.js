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
        tempList:{}
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
            return <Create />
        } else if (this.state.active === "listings") {
            return <Listings
                data={this.state.data}
                activeStateHomePage={() => this.setState({ active: "home-page" })}
                activeStateEachListing={(each) =>{ this.setState({ 
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
            />
        } else if (this.state.active === "home-page") {
            return <HomePage
                changePageCreate={() => this.changePage("create")}
                changePageListings={() => this.changePage("listings")}
            />
        }
    };
    saveListing(each) {
        this.setState({ 
            active: "each-listing",
            tempList: each
        });
        console.log(each);
    };

    render() {
        return (
            <React.Fragment>
                {this.renderPage()}
            </React.Fragment>
        );
    }

}

