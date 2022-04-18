import { useContext }from 'react';
import { FormContext } from '../context/FormContext';

export const useRangeLogic = () => {

    const [ formState, setFormState] = useContext(FormContext)

    const handleRange = (e) => {
        const updatedForm = { ...formState, desiredIncome:e.target.value}
        console.log(updatedForm)

        setFormState(updatedForm);
    }

    return { handleRange };
};
