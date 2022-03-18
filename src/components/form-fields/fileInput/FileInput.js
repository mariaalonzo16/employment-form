import { TextInput } from 'react-materialize';
import './FileInput.scss';
import { FormContext } from '../../../context/FormContext';
import { useContext, useState}from 'react';

export const FileInput = () => {

    const [ formState, setFormState] = useContext(FormContext)
    

    const handleResumeCV = (e) => {
        const updatedForm = { ...formState, resumeCV:e.target.value}

        setFormState(updatedForm);
    }

   
    return (
        <span className="submit-button">
            <TextInput
                    id="TextInput-26"
                    label="Submit Resume"
                    type="file"
                    onChange={handleResumeCV} 
                />
        </span>
    );
}