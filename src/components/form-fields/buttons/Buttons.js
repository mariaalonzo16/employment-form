import { Button } from 'react-materialize';
import { useNavigate } from 'react-router-dom';
import './Buttons.scss';
import { useContext } from 'react';
import { FormContext } from '../../../context/FormContext';


export const Buttons = () => {
    let navigate = useNavigate();

    const [ formState ] = useContext(FormContext)

    console.log(formState)

    const firstNameLength = formState.firstName.length

    let firstNameValid = false
    
    if (firstNameLength > 0){
        firstNameValid = true
    } 
    
    return (
        <div className='home-page'>
            {firstNameValid ?
                <Button
                    className='buttons'
                    node="button"
                    waves="light"
                    onClick={() => {
                        navigate("/confirmation")
                    
                    }}
                    
                >
                    Submit  
                </Button>
                : 
                <Button
                    className='buttons'
                    node="button"
                    waves="light"  
                >
                    Disabled  
                </Button>
             }
        </div>
    );
}
