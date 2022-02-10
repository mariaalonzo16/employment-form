import { TextInput } from 'react-materialize';
import './FileInput.scss';

export const FileInput = () => {
    return (
        <span inputClassName="submit-button">
            <TextInput
                    id="TextInput-26"
                    label="Submit Resume"
                    type="file"
                />
        </span>
    );
}