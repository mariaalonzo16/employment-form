import './RadioGroups.scss';
import { useRadioLogic } from '../../../functions/useRadioLogic';


export const RadioGroups = () => {


    const { handleYearsPracticed } = useRadioLogic()

    return(
        <>
            <p className='number-years'>For how many years have you been practicing medicine?</p>
            <span className='radio-group'>

                <div>
                    <p className='radio-button'>
                    <label className='radio-label'>
                        <input 
                            name="group1" 
                            type="radio" 
                            value={'< 5'}
                            onChange={handleYearsPracticed}  
                        />
                        <span> {'< 5'} </span>
                    </label>
                    </p>
                    <p className='radio-button'>
                    <label className='radio-label'>
                        <input 
                            name="group1" 
                            type="radio" 
                            value={'5-9'}
                            onChange={handleYearsPracticed}     
                        />
                        <span>5-9</span>
                    </label>
                    </p>
                    <p className='radio-button'>
                    <label className='radio-label'>
                        <input 
                            name="group1" 
                            type="radio" 
                            value={'10-14'} 
                            onChange={handleYearsPracticed}  
                        />
                        <span>10-14</span>
                    </label>
                    </p>
                    <p className='radio-button'>
                    <label className='radio-label'>
                        <input 
                            name="group1" 
                            type="radio" 
                            value={'15 or more'} 
                            onChange={handleYearsPracticed}         
                        />
                        <span>15 or more</span>
                    </label>
                    </p>


                    
                </div>  
                {/* <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">For how many years have you been practicing medicine?</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="experience"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value={'< 5'} control={<Radio />} label="Female" />
                            <FormControlLabel value={'5-9'} control={<Radio />} label="Male" />
                            <FormControlLabel value={'10-14'} control={<Radio />} label="Other" />
                            <FormControlLabel value={'15 or more'}  control={<Radio />} label="Other" />
                        </RadioGroup>
                </FormControl> */}


            </span>
        </>
    );
}