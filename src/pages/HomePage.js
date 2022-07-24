import React from 'react';
import logo1 from './logo.png';
import './css/HomePage.css';

export default function HomePage(props) {
    return (
        <div className="HomePage">
            <div className="HomePage-logo-div">
                <img src={logo1} className="HomePage-logo" alt="logo" />
            </div>
            <div className="container HomePage-content-box">
                <div className="row">

                    <div className="col col-1"></div>
                    <div className="HomePage-inspire col col-10 HomePage-text">
                        <h1 className="HomePage-text">INSPIRE</h1>
                        <h3 className="HomePage-text">Share mechanical keyboard creations</h3>
                        <button
                            className="btn btn-primary HomePage-text"
                            onClick={props.activeStateCreate}
                        >Create</button>
                    </div>
                    <div className="col col-1"></div>

                    <div className="col col-5"></div>
                    <div className="HomePage-or col col-2">
                        <h1 className="HomePage-text">OR</h1>
                    </div>
                    <div className="col col-5"></div>

                    <div className="col col-1"></div>
                    <div className="HomePage-be-inspired col col-10 HomePage-text">
                        <h1 className="HomePage-text">BE INSPIRED</h1>
                        <h3 className="HomePage-text">Search for mechanical keyboards</h3>
                        <button
                            className="btn btn-primary HomePage-text"
                            onClick={props.activeStateListings}
                        >Search</button>
                    </div>
                    <div className="col col-1"></div>

                </div>
            </div>
        </div>
    )
}