import { TextInput } from 'react-materialize';
import React, { createContext, useContext, useState }from 'react';
import './TextInputs.scss';
import { FormContext } from '../../../context/FormContext';


export const TextInputs = () => {

    const [ formState, setFormState] = useContext(FormContext)
    console.log(formState)

    const handleFirstName = (e) => {
        const updatedForm = { ...formState, firstName:e.target.value}
        console.log(updatedForm)

        setFormState(updatedForm);
        
    }

    const handleLastName = (e) => {
        const updatedForm = { ...formState, lastName:e.target.value}
        console.log(updatedForm)

        setFormState(updatedForm);
        
    }

    const handleEmail = (e) => {
        const updatedForm = { ...formState, email:e.target.value}
        console.log(updatedForm)

        setFormState(updatedForm);
        
    }

    const handlephoneNumber = (e) => {
        const updatedForm = { ...formState, phoneNumber:e.target.value}
        console.log(updatedForm)


        setFormState(updatedForm);
        
    }

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
                    onChange={handlephoneNumber} 
                />
        </>
    );
}