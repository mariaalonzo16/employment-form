import "./Footers.scss";
import React from 'react';
import { Footer } from 'react-materialize';
import { AiFillFacebook, AiFillInstagram, AiFillGoogleSquare, AiFillLinkedin, AiFillCopyrightCircle } from "react-icons/ai";



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
                copyrights=" Copyright @ 2022 codeHealth INC. All Rights Reserved "
                links=
                {
                    <ul>
                        <li>
                            <a href="#!" className="icon-text"> <AiFillFacebook className="icon"/>  Facebook</a>
                        </li>
                        <li>
                            <a  href="#!" className="icon-text"> <AiFillInstagram className="icon"/> Instagram</a>
                        </li>
                        <li>
                            <a  href="#!" className="icon-text"><AiFillGoogleSquare className="icon"/> Google</a>
                        </li>
                        <li>
                            <a  href="#!" className="icon-text"><AiFillLinkedin className="icon"/> Linkedin </a>
                        </li>
                    </ul>
                }
            >
            
            <h5>
                Contact Us
            </h5>
            <p>  Phone Number: </p>
            <p>  123-456-7890</p>
            <p>  Email: </p>
            <p>  codehealth@medicine.org</p>
            <p>  Address: </p>
            <p>  123 Hospital St</p>
            <p>  Raleigh NC, 27703 </p>
            </Footer>
        </div>
    );
}