import React from 'react';
import logo1 from './css/logo.png';
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
                    <div className="HomePage-inspire col col-10 HomePage-text-div">
                        <h1 className="HomePage-text">INSPIRE</h1>
                        <h4 className="HomePage-text-details">Proud of your latest mechanical keyboard addition? Share your ideas now!</h4>
                        <button
                            className="btn btn-primary HomePage-text-button"
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
                    <div className="HomePage-be-inspired col col-10 HomePage-text-div">
                        <h1 className="HomePage-text">BE INSPIRED</h1>
                        <h4 className="HomePage-text-details">Want to customise your own mechanical keyboard but have no idea where to start? Check us out now!</h4>
                        <button
                            className="btn btn-primary HomePage-text-button"
                            onClick={props.activeStateListings}
                        >Browse</button>
                    </div>
                    <div className="col col-1"></div>

                </div>
            </div>
        </div>
    )
}