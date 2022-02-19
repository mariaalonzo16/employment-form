import { TextInput } from 'react-materialize';
import React, { createContext, useContext, useState }from 'react';
import './TextInputs.scss';
import { FormContext } from '../../../context/FormContext';


export const TextInputs = () => {

    // const [ formState,setFormState ] = useState("")
    

    const handleTest = () => {
        console.log("hurraay")
    }

    const { setFormState } = useContext(FormContext)

    

    

    return (
        <>
                <TextInput
                    id="TextInput-32"
                    placeholder="..."
                    validate
                    minLength="2"
                    maxLength="15"
                    error="Please input your first name"
                    className= "text-input"
                    // value={{formState, setFormState}}
                    // onChange={""}
                />

            <TextInput
                    id="TextInput-32"
                    placeholder="First Name"
                    validate
                    minLength="2"
                    maxLength="15"
                    error="Please input your first name"
                    className= "text-input"
                    // value={formState.firstName} 
                    // onChange={e => setFormState(e.target.value)} 
                />
                <TextInput
                    id="TextInput-32"
                    placeholder="Last Name"
                    validate
                    minLength="2"
                    maxLength="15"
                    error="Please input your last name"
                    className= "text-input"
                    // value={formState.lastName} 
                    // onChange={e => setFormState(e.target.value)} 
                />
                <TextInput
                    id="TextInput-43"
                    email
                    error="Please input your email"
                    placeholder="Email"
                    validate
                    className= "text-input"
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
                />
        </>
    );
}