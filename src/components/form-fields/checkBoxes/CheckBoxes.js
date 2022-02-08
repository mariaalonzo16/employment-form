import { Checkbox } from 'react-materialize';
import './CheckBoxes.scss';

export const CheckBoxes = () => {
    return (
        <>
            <p> Select the specialty you are interested in:</p>

            <Checkbox
                id="Checkbox_1"
                label="Anesthesiology"
                value="Anesthesiology"
                className='checkbox'
            />
            
            <Checkbox
                id="Checkbox_2"
                label="Oncology"
                value="Oncology"
                className='checkbox'
            />
            <Checkbox
                id="Checkbox_3"
                label="Womens Health"
                value="Womens Health"
            />
            <Checkbox
                id="Checkbox_4"
                label="Pediatrics"
                value="Pediatrics"
            />
            <Checkbox
                id="Checkbox_5"
                label="Dermatology"
                value="Dermatology"
            />
        </>
    );
}