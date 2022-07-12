import React from 'react';
import Create from './Create';
import Listings from './Listings';
import HomePage from './HomePage';


export default class Main extends React.Component {
    state = {
        active: 'home-page'
    }
    changePage (page) {
        this.setState({
            active: page
        })
    }
    renderPage(){
        if(this.state.active === "create"){
            return <Create/>
        } else if(this.state.active === "listings"){
            return <Listings/>
        } else if(this.state.active === "home-page"){
            return <HomePage 
            changePageCreate={()=>this.changePage("create")}
            changePageListings={()=>this.changePage("listings")}
            />
        }        
    }
    render() {
        return (
            <React.Fragment>
                {this.renderPage()}
            </React.Fragment>
        );
    }

}

