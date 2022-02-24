import './App.scss';
import { Home } from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import React, { createContext, useContext, useState }from 'react';
import { OpenRoles } from './pages/OpenRoles';
import { Application } from './pages/Application';
import { Confirmation } from './pages/Confirmation';
import { FormContext } from './context/FormContext';







export const App = () => {

  const firstName = "Mark";
  const lastName = "Smith";
  const email = "mark.smith@gmail.com";
  const phoneNumber = "555-555-5555";
  const specialty1 = "anesthesiology";
  const specialty2 =  "Oncology";
  const specialty3 = "Womens Health";
  const specialty4 = "Pediatrics";
  const specialty5 = "Dermatology";
  const radio = "radio value";
  const range = "range value";
  const fileInput = "file value";


 const formValues = {
   firstName: '',
   lastName: '',
   email: '',
   phoneNumber: '',
  //  specialty1: '',
  //  specialty2: '', 
  //  specialty3: '', 
  //  specialty4: '', 
  //  specialty5: '', 
   specialties: '',
   yearsPracticed: '',
   desiredIncome: '',
   resumeCV: ''
  }

 

  const [ formState,setFormState ] = useState(formValues)
  
  
 

  return (
    <FormContext.Provider value={[formState, setFormState]}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/open-roles" element={<OpenRoles />} />
        <Route path="/application/*" element={<Application />} />

        <Route 
          path="/confirmation" 
          element={
            <Confirmation 
              firstName={firstName} 
              lastName={lastName} 
              email={email} 
              phoneNumber={phoneNumber}
              checkbox1={specialty1}
              checkbox2={specialty2}
              checkbox3={specialty3}
              checkbox4={specialty4}
              checkbox5={specialty5}
              radio={radio}
              range={range}
              fileInput={fileInput}
            />}  
        />
      </Routes>
      

      {/* <Test1 /> */}
    </FormContext.Provider>
  );
}
