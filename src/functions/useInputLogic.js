import { useContext }from 'react';
import { FormContext } from '../context/FormContext';



export const useInputLogic = () => {

    const [ formState, setFormState] = useContext(FormContext)

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

    const handlePhoneNumber = (e) => {
        const updatedForm = { ...formState, phoneNumber:e.target.value}
        console.log(updatedForm)


        setFormState(updatedForm);
        
    }

    return {
        handleFirstName,
        handleLastName,
        handleEmail,
        handlePhoneNumber,
    };
};