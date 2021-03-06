import "./Footers.scss";
import React from 'react';
import { Footer } from 'react-materialize';
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";



export const Footers = () => {
    return (
        
        <div className="main-footer">
        
            <Footer
                className="footer"
                copyrights=" Copyright @ 2022 codeHealth Inc. All Rights Reserved "
                header='Stay Connected'
                links= 
                {   
                    <ul className="icon-list">
                        <div className="desktop-only">
                            <h5> Stay Connected </h5>
                        </div>
                        <div className="row">
                            <li className="spacing-link">
                                <a href="#!" > <AiFillFacebook className="icon"/> </a>
                            </li>
                            <li className="spacing-link">
                                <a  href="#!" className="icon-text"> <AiFillInstagram className="icon"/> </a>
                            </li>
                            <li className="spacing-link">
                                <a  href="#!" className="icon-text"><AiFillLinkedin className="icon"/> </a>
                            </li>
                        </div>
                    </ul>
                    
                }
            >
            
            <h5 className="footer-heading">
                Contact Us
            </h5>
            <p>  O: 123-456-7890</p>
            <p>  F: 098-765-4321</p>
            <p>  E: codehealth@code.org</p>
            <p>  HQ: 123 Hospital St</p>
            <p>  Raleigh NC, 27703 </p>
            
            </Footer>
        </div>
    );
}