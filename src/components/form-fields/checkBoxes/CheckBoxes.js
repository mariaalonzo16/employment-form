import { Checkbox } from 'react-materialize';
import './CheckBoxes.scss';

export const CheckBoxes = () => {
    return (
        <>
            <p> Select a specialty you have previously worked in:</p>
            <span>
                <span className='checkbox'>
                    <Checkbox
                        id="Checkbox_1"
                        label="Neurology"
                        value='Neurology'
                    />
                </span>
                
                <span className='checkbox'>
                    <Checkbox
                        id="Checkbox_2"
                        label="Oncology"
                        value='Oncology'
                    />
                </span>
                
                <span className='checkbox'>
                    <Checkbox
                        id="Checkbox_3"
                        label="Womens Health"
                        value='Womens Health'
                    />
                </span>
                
                <span className='checkbox'>
                    <Checkbox
                        id="Checkbox_4"
                        label="Pediatrics"
                        value='Pediatrics'
                    />
                </span>
                
                <span className='checkbox'>
                    <Checkbox
                        id="Checkbox_5"
                        label="Dermatology"
                        value='Dermatology'
                    />
                </span>
                
            </span>
        </>
    );
}