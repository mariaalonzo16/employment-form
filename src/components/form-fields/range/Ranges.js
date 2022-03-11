import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { FormContext } from '../../../context/FormContext';
import { useContext, useState }from 'react';
import './Range.scss'


export const Ranges = () => {

  const [ formState, setFormState] = useContext(FormContext);

  const handleValueText = (value) => {
    console.log(value)
  }

  const handleDesiredIncome = (e) => {
    const updatedForm = { ...formState, desiredIncome:e.target.value}

    setFormState(updatedForm);
    
  }
  

  return (
    <>
      <p className='prompt'> What is your desired income?</p>
      <Box>
        <Slider
          aria-label="Salary"
          defaultValue={50}
          getAriaValueText={handleValueText}
          valueLabelDisplay="auto"
          step={5}
          min={50}
          max={150}
          onChange={handleDesiredIncome}
          sx={{
            width: 300,
            color: 'success.main',
          }}
        />
      </Box>
    </>
  );
    
      
}
