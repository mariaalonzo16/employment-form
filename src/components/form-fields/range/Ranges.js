import { Range } from 'react-materialize';

export const Ranges = () => {
    return (
        <>
            <p>Select desired yearly income:</p>
            <Range
                max="100"
                min="0"
                name="points"
                step="0.5"
            />
    </>
    );
}