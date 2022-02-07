import "./Footers.scss";
import React from 'react';
import { Footer } from 'react-materialize';



export const Footers = () => {
    return (
        <Footer className="footer">
            <h5 className="white-text">
                Footer Content
            </h5>
            <p className="grey-text text-lighten-4">
                You can use rows and columns here to organize your footer content.
            </p>
        </Footer>
    );
}