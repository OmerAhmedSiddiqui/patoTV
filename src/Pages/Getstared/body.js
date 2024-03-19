import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./index.scss";
import ButtonBox from "../../Shared/UIElements/Button/index"

const GetStartedbody = (props) =>{
    
    return (
        <React.Fragment>
            <div className="backgroundImage d-flex align-items-center justify-content-center">
                 <div className="text-center">
                    <div className="getStartedHeading"><h1>WELCOME TO PATO TV!</h1></div>
                    <div className="getStartedText"><h4>News, Live Updates, Behind The Scenes</h4></div>
                    <Link to="/login"><ButtonBox className="primary-button getStartedTextButton" text="Get Started"/></Link>
                </div>
            </div>
        </React.Fragment>
    );
}

export default GetStartedbody;