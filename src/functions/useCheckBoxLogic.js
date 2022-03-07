import { useContext, useState } from "react";
import { FormContext } from "../context/FormContext";
import { Specialties } from "../data/Specialties";

export const useCheckBoxLogic = () => {

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
        
    }

    return {
        handleChecked
    }
};