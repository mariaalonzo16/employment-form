import { RadioGroup } from 'react-materialize';
import './RadioGroups.scss';

export const RadioGroups = () => {
    return(
        <>
            <p className='number-years'>For how many years have you been practicing medicine?</p>
            <span className='radio-group'>
            <RadioGroup
                label="Years of Practice"
                name="size"
                onChange={function noRefCheck(){}}
                options={[
                    {
                    label: '< 5',
                    value: '< 5'
                    },
                ]}
            />
            </span>

            <span className='radio-group'>
            <RadioGroup
                label="Years of Practice"
                name="size"
                onChange={function noRefCheck(){}}
                options={[
                    {
                    label: '5-9',
                    value: '5-9'
                    },
                ]}
            />
            </span>
            <span className='radio-group'>
            <RadioGroup
                label="Years of Practice"
                name="size"
                onChange={function noRefCheck(){}}
                options={[
                    {
                    label: '10-14',
                    value: '10-14'
                    },
                ]}
            />
            </span>
            <span className='radio-group'>
            <RadioGroup
                label="Years of Practice"
                name="size"
                onChange={function noRefCheck(){}}
                options={[
                    {
                    label: '15 or more',
                    value: '15 or more'
                    }
                ]}
            />
            </span>
        </>
    );
}