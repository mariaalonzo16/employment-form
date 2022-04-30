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

    // const emailLength = formState.email.length

    // let emailValid = false

    // if (emailLength > 0){
    //     emailValid = true
    // }


  const validateEmail = () => {
    let user = document.getElementById("e").value;
        let user2 = document.getElementById("e");
        let regex = ['/^+([-]?+)*@+([-]?+)*({2,3})+$/'];
        if (regex.test(user)) {
            alert("done");
            return (true);
        }
        else {
            user2.style.border = "red solid 3px";
            return (false);
    }}

    //

    const phoneNumberLength = formState.phoneNumber.length

    let phoneNumberValid = false

    if (phoneNumberLength > 0){
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

    const desiredIncomeLength = formState.desiredIncome.length

    let desiredIncomeValid = false

    if (desiredIncomeLength > 0){
        desiredIncomeValid = true
    }

    //

    // const resumeCVLength = formState.resumeCVLength.length

    // let resumeCVValid = false

    // if (resumeCVLength > 0){
    //     resumeCVValid = true
    // }

    /* firstNameValid && lastNameValid && emailValid && phoneNumberValid && specialtiesValid && yearsPracticedValid && desiredIncomeValid? */

    let validForm = firstNameValid && lastNameValid && validateEmail; 
    
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
                    waves="light" 
                    
                >
                    Disabled  
                </Button>
             }
        </div>
    );
}
