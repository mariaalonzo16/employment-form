import "./Footer.css";
import React from 'react';
import { Footer } from 'react-materialize';


export const Footer = () => {
    return (
            <>
                <Footer
                    className="example"
                    copyrights="&copy 2015 Copyright Text"
                    >
                    <p className="white-text">
                        Footer Content
                    </p>
                    <p className="grey-text text-lighten-4">
                        You can use rows and columns here to organize your footer content.
                    </p>
                </Footer>
            </>
    );
}