import { Checkbox } from 'react-materialize';
import React, {useState, useContext} from 'react'; 
import { FormContext } from '../../../context/FormContext';
import './CheckBoxes.scss';
import { Specialties } from '../../../data/Specialties';
import { v4 as uuidv4 } from 'uuid';

export const CheckBoxes = () => {

    const [ formState, setFormState] = useContext(FormContext)

    // const [checked, setChecked]= useContext("");

    const handleChecked = () => {
     console.log("maria")
        
    }

    // const [checked, setChecked]= useContext(false);

    // const handleChecked = () => {
    //     console.log("maria")
    //     setChecked(!checked)
    // }

    return (
        <>
            <p className='specialty'> Select a specialty you have previously worked in:</p>
            {Specialties.map((specialty) => (
                <span className='checkbox'>
                    <Checkbox
                        label={specialty}
                        value={specialty}
                        checked={false}
                        onChange={handleChecked}
                        key={uuidv4()}
                    />
                </span>
            ))}
           
        
        </>
    );
}