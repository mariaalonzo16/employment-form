import { RadioGroup } from 'react-materialize';

export const RadioGroups = () => {
    return(
        <>
            <p>For how many years have you been practicing medicine?</p>
            <RadioGroup
                label="T-Shirt Size"
                name="size"
                onChange={function noRefCheck(){}}
                options={[
                    {
                    label: '< 5',
                    value: '< 5'
                    },
                    {
                    label: '5-9',
                    value: '5-9'
                    },
                    {
                    label: '10-14',
                    value: '10-14'
                    },
                    {
                    label: '15 or more',
                    value: '15 or more'
                    }
                ]}
            />
        </>
    );
}