import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useContext } from 'react';
import { useRangeLogic } from '../../../functions/useRangeLogic';
import { FormContext } from '../../../context/FormContext';
import './Range.scss'


export const Ranges = () => {


  const { handleRange } = useRangeLogic();

  const [ formState ] = useContext(FormContext)

  const valueLabelFormat = () => '$' + formState.desiredIncome + 'K';
  
  return (
    <div>
    <Box sx={{ width: 250 }}>
      <p className='question'> What is your desired income? </p>
      <Slider
        min={50}
        step={5}
        max={150}
        getAriaValueText={valueLabelFormat}
        valueLabelFormat={valueLabelFormat}
        onChange={handleRange}
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
      />
    </Box>

    
    </div>
  );
}
