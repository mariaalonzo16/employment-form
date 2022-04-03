import { useContext, useState}from 'react';
import { FormContext } from '../context/FormContext';

export const useRadioLogic = () => {
    const [ formState, setFormState] = useContext(FormContext)

    const [ setChecked] = useState('');

    

    const handleChange = (e) => {
        setChecked(e.target.value)

    }

    const handleYearsPracticed = (e) => {
        const updatedForm = { ...formState, yearsPracticed:e.target.value}

        setFormState(updatedForm);
    }
    
    return {
        handleChange,
        handleYearsPracticed
    }
}