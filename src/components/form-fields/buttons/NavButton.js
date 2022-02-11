import { Button } from 'react-materialize';
import { useNavigate } from 'react-router-dom';
import './Buttons.scss';

export const NavButton = (props) => {

    console.log(props)

    let navigate = useNavigate();
    return (
        <>
            <Button
                className='button'
                node="button"
                style={{
                marginRight: '5px'
                }}
                waves="light"
                onClick={() => {
                    navigate(`${props.route}`)
                }}
            >
                {props.innerText}
            </Button>
        </>
    );
}
