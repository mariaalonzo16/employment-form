import './RadioGroups.scss';
import { useState, useContext } from 'react';
import { Radio } from '../../../data/Radio';
import { FormContext } from '../../../context/FormContext';

export const RadioGroups = () => {

    const [ formState, setFormState] = useContext(FormContext)

    const [isChecked, setIsChecked]= useState(false);

    const handleChecked = (position) => {

        const updatedCheckedState = isChecked.map((item, index) =>
          index === position ? !item : item
        );
       setIsChecked(updatedCheckedState); 
        

        
        const checkboxDisplayState = []

        updatedCheckedState.map((specialty, index) => {
            if (specialty) {
                checkboxDisplayState.push(Radio[index])
            } 
            return ""
        })
        
        const updatedForm = { ...formState, specialties:checkboxDisplayState}
        setFormState(updatedForm);
        
    }

    return(
        <>
            <p className='number-years'>For how many years have you been practicing medicine?</p>
            <span className='radio-group'>

            <div action="#">
                <p>
                <label>
                    <input name="group1" type="radio" onChange= {handleChecked} />
                    <span> {"< 5"} </span>
                </label>
                </p>
                <p>
                <label>
                    <input name="group1" type="radio" />
                    <span>5-9</span>
                </label>
                </p>
                <p>
                <label>
                    <input name="group1" type="radio"  />
                    <span>10-14</span>
                </label>
                </p>
                <p>
                <label>
                    <input name="group1" type="radio"  />
                    <span>15 or more</span>
                </label>
                </p>
            </div>  

            </span>
        </>
    );
}