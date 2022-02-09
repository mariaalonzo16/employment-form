import { Button } from 'react-materialize';
import { useNavigate } from 'react-router-dom';
import './Buttons.scss';

export const Buttons = () => {
    let navigate = useNavigate();
    return (
        <>
            <Button
                className='button'
                node="button"
                waves="light"
                onClick={() => {
                    navigate("/confirmation")
                }}
            >
                Submit
             </Button>
        </>
    );
}