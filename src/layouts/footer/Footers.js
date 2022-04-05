import "./Footers.scss";
import React from 'react';
import { Footer } from 'react-materialize';
import { AiFillFacebook, AiFillInstagram, AiFillGoogleSquare, AiFillLinkedin } from "react-icons/ai";



export const Footers = () => {
    return (
        // <Footer 
        //     className="footer">
        //     <p className="grey-text text-lighten-4">
        //         Include Social Media Links 
        //     </p>
        // </Footer>
    
        
        <div className="main-footer">
            <Footer
                className="footer"
                copyrights=" Copyright @ 2022 codeHealth Inc. All Rights Reserved "
                links=
                {
                    <ul className="icon-list">
                        <li>
                            <a href="#!" > <AiFillFacebook className="icon"/> </a>
                            <span className="icon-text">Facebook</span>
                        </li>
                        <li>
                            <a  href="#!" className="icon-text"> <AiFillInstagram className="icon"/> Instagram</a>
                        </li>
                        <li>
                            <a  href="#!" className="icon-text"><AiFillGoogleSquare className="icon"/> Google</a>
                        </li>
                        <li>
                            <a  href="#!" className="icon-text"><AiFillLinkedin className="icon"/>  Linkedin</a>
                        </li>
                    </ul>
                }
            >
            
            <h5>
                Contact Us
            </h5>
            <p>  O: 123-456-7890</p>
            <p>  F: 098-765-4321</p>
            <p>  E: codehealth@medicine.org</p>
            <p>  HQ: 123 Hospital St</p>
            <p>  Raleigh NC, 27703 </p>
            </Footer>
        </div>
    );
}