import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { FormContext } from '../../../context/FormContext';
import { useContext, useState }from 'react';


export const Ranges = () => {

    
    const [value, setValue] = useState([20, 37]);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const valueText = () => {
        console.log(value)
    }

    

    return (
    <Box sx={{ width: 300 }}>
      <Slider
        
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valueText}
      />
    </Box>
  );
      
}
