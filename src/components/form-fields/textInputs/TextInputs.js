import { TextInput } from 'react-materialize';
import React from 'react';
import './TextInputs.scss';
import { useInputLogic } from '../../../functions/useInputLogic';



export const TextInputs = () => {

    const { 
        handleFirstName,
        handleLastName,
        handleEmail,
        handlePhoneNumber
    } = useInputLogic();


    return (
        <>
            <TextInput
                    id="TextInput-32"
                    placeholder="First Name"
                    validate
                    minLength="2"
                    maxLength="15"
                    error="Please input your first name"
                    className= "text-input"
                    onChange={handleFirstName} 
                />
                <TextInput
                    id="TextInput-32"
                    placeholder="Last Name"
                    validate
                    minLength="2"
                    maxLength="15"
                    error="Please input your last name"
                    className= "text-input"
                    onChange={handleLastName} 
                />
                <TextInput
                    id="TextInput-43"
                    email
                    error="Please input your email"
                    placeholder="Email"
                    validate
                    className= "text-input"
                    onChange={handleEmail} 
                />
                <TextInput
                    id="TextInput-32"
                    placeholder="Phone Number"
                    type="tel"
                    validate
                    maxLength="10"
                    minLength="2"
                    error="Please input your phone number"
                    className= "text-input"
                    onChange={handlePhoneNumber} 
                />
        </>
    );
}