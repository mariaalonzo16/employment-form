import { Checkbox } from 'react-materialize';
import React, {useState, useContext} from 'react'; 
import { FormContext } from '../../../context/FormContext';
import './CheckBoxes.scss';
import { Specialties } from '../../../data/Specialties';

export const CheckBoxes = () => {

    const [ formState, setFormState] = useContext(FormContext)
    

    const [isChecked, setIsChecked]= useState(
        new Array(Specialties.length).fill(false)
    );

    const handleChecked = (position) => {

        const updatedCheckedState = isChecked.map((item, index) =>
          index === position ? !item : item
        );
       setIsChecked(updatedCheckedState); 
        

        
        const checkboxDisplayState = []

        updatedCheckedState.map((specialty, index) => {
            if (specialty) {
                checkboxDisplayState.push(Specialties[index])
            } 
            return ""
        })
        
        const updatedForm = { ...formState, specialties:checkboxDisplayState}
        setFormState(updatedForm);

        console.log(updatedForm)
        
    }

      
    return (
        <>
            <p className='specialty'> Select a specialty you have previously worked in:</p>
            {Specialties.map((specialty, index) => (
                <span className='checkbox' key={index}>
                    <Checkbox
                        label={specialty}
                        id={`specialty-checkbox-${index}`}
                        value={specialty}
                        checked={isChecked[index]}
                        onChange={() => handleChecked(index)}        
                    />
                </span>
            ))}
        </>
    );
}