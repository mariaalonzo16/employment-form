import { Button } from 'react-materialize';
import { useNavigate } from 'react-router-dom';
import './Buttons.scss';
import { useContext, useState } from 'react';
import { FormContext } from '../../../context/FormContext';


export const Buttons = () => {
    let navigate = useNavigate();

    const [ formState ] = useContext(FormContext)

    //

    const firstNameLength = formState.firstName.length;

    let firstNameValid = false;
    
    if (firstNameLength > 0) { firstNameValid = true };

    //

    const lastNameLength = formState.lastName.length;
    
    let lastNameValid = false;
    
    if (lastNameLength > 0) { lastNameValid = true };

    //

    const emailRegex = /\S+@\S+\.\S+/;
    let emailValid = false;

    if (emailRegex.test(formState.email)) {
       emailValid = true
    }
    
    //

    const phoneNumberRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    let phoneNumberValid = false

    if (phoneNumberRegex.test(formState.phoneNumber)) {
        phoneNumberValid = true
    }

    //

    const specialtiesLength = formState.specialties.length
    

    let specialtiesValid = false
    

    if (specialtiesLength > 0){
        specialtiesValid = true
    } 

    //

    const yearsPracticedLength = formState.yearsPracticed.length
    

    let yearsPracticedValid = false

    if (yearsPracticedLength > 0){
        yearsPracticedValid = true
    }


    //

    const resumeCVLength = formState.resumeCV.length
    
    let resumeCVValid = false

    if (resumeCVLength > 0){
        resumeCVValid = true
    }
    console.log(resumeCVValid)

    /* firstNameValid && lastNameValid && emailValid && phoneNumberValid && specialtiesValid && yearsPracticedValid && desiredIncomeValid? */

    let validForm = 
        firstNameValid && 
        lastNameValid && 
        emailValid && 
        phoneNumberValid &&
        specialtiesValid &&
        yearsPracticedValid &&
        resumeCVValid; 
    console.log(validForm)
    return (
        <div className='home-page'>
            { validForm ?
                <Button
                    className='buttons'
                    node="button"
                    waves="light"
                    onClick={() => {
                        navigate("/confirmation")
                    
                    }}
                    
                    
                >
                    Submit  
                </Button>
                : 
                <Button
                    className='buttons'
                    node="button"
                >
                    Submit 
                </Button>
             }
        </div>
    );
}
