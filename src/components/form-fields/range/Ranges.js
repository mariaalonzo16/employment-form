import { Range } from 'react-materialize';
import './Range.scss';

export const Ranges = () => {
    return (
        <>
            <p className='yearly-income'>Select desired yearly income:</p>
            <Range
                max="140000"
                min="60000"
                name="points"
                step="2.0"
            />
    </>
    );
}