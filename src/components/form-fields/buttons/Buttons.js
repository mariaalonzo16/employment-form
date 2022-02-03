import { Button } from 'react-materialize';
import { useNavigate } from 'react-router-dom';

export const Buttons = () => {
    let navigate = useNavigate();
    return (
        <>
            <Button
                node="button"
                style={{
                marginRight: '5px'
                }}
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