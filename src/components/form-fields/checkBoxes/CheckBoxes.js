import { Checkbox } from 'react-materialize';

export const CheckBoxes = () => {
    return (
        <>
            <p> Select the specialty you are interested in:</p>
            <Checkbox
                id="Checkbox_1"
                label="Anesthesiology"
                value="Anesthesiology"
            />
            <Checkbox
                id="Checkbox_1"
                label="Oncology"
                value="Oncology"
            />
            <Checkbox
                id="Checkbox_1"
                label="Womens Health"
                value="Womens Health"
            />
            <Checkbox
                id="Checkbox_1"
                label="Pediatrics"
                value="Pediatrics"
            />
            <Checkbox
                id="Checkbox_1"
                label="Dermatology"
                value="Dermatology"
            />
        </>
    );
}