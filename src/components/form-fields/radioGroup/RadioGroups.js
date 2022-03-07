import './RadioGroups.scss';
import { useRadioLogic } from '../../../functions/useRadioLogic';

export const RadioGroups = () => {


    const { handleYearsPracticed } = useRadioLogic()

    return(
        <>
            <p className='number-years'>For how many years have you been practicing medicine?</p>
            <span className='radio-group'>

                <div >
                    <p>
                    <label>
                        <input 
                            name="group1" 
                            type="radio" 
                            value={'< 5'}
                            onChange={handleYearsPracticed}  
                        />
                        <span> {'< 5'} </span>
                    </label>
                    </p>
                    <p>
                    <label>
                        <input 
                            name="group1" 
                            type="radio" 
                            value={'5-9'}
                            onChange={handleYearsPracticed}     
                        />
                        <span>5-9</span>
                    </label>
                    </p>
                    <p>
                    <label>
                        <input 
                            name="group1" 
                            type="radio" 
                            value={'10-14'} 
                            onChange={handleYearsPracticed}  
                        />
                        <span>10-14</span>
                    </label>
                    </p>
                    <p>
                    <label>
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



            </span>
        </>
    );
}