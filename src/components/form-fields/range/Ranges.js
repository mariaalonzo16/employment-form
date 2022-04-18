import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import { useState,useContext } from 'react';
import { useRangeLogic } from '../../../functions/useRangeLogic';
import { FormContext } from '../../../context/FormContext';


export const Ranges = () => {


  const { handleRange } = useRangeLogic();

  const [ formState ] = useContext(FormContext)

  const valueLabelFormat = () => '$' + formState.desiredIncome + 'K';
  
  return (
    <div>
    <Box sx={{ width: 250 }}>
      <Typography id="non-linear-slider" gutterBottom>
        What is your desired income? 
      </Typography>
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
