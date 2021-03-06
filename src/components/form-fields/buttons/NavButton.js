import { Button } from 'react-materialize';
import { useNavigate } from 'react-router-dom';
import './Buttons.scss';

export const NavButton = (props) => {

    let navigate = useNavigate();
    return (
        <Button
            className='button'
            node="button"
            waves="light"
            onClick={() => {
                navigate(`${props.route}`)
            }}
        >
            {props.innerText}
        </Button>
    );
}
