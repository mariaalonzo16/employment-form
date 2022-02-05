import React from 'react';
import { TopNav } from '../layouts/topNav/TopNav';
import { Footers } from '../layouts/footer/Footers';
import { Button } from 'react-materialize';
import { useNavigate } from 'react-router-dom';
import { App } from '../App';

export const Confirmation = (props) => {
    let navigate = useNavigate();
    console.log(props)
    return (
        <>
            <TopNav />
            <main>
                <p>Please Confirm your Information</p>
                <p>First Name: {props.firstName}</p>
                <p>Last Name: {props.lastName}</p>
                <p>Email: {props.email}</p>
                <p>Phone Number: {props.phoneNumber}</p>
                <p>Check Box 1: {props.checkbox1}</p>
                <p>Check Box 2: {props.checkbox2}</p>
                <p>Check Box 3: {props.checkbox3}</p>
                <p>Check Box 4: {props.checkbox4}</p>
                <p>Check Box 5: {props.checkbox5}</p>
                <p>Radio Value: {props.radio}</p>
                <p>File Input: {props.fileInput}</p>
                <Button
                    node="button"
                    style={{
                    marginRight: '5px'
                    }}
                    waves="light"
                    onClick={() => {
                    navigate("/")
                }}
                >
                    Confirm
                </Button>
            </main>
            {/* <Footers /> */}
            
        </>
    );
}