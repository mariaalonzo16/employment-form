import './App.scss';
import { Home } from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import React, {  useState }from 'react';
import { OpenRoles } from './pages/OpenRoles';
import { Application } from './pages/Application';
import { Confirmation } from './pages/Confirmation';
import { FormContext } from './context/FormContext';

export const App = () => {

 const formValues = {
   firstName: '',
   lastName: '',
   email: '',
   phoneNumber: '',
   specialties: [],
   yearsPracticed: '',
   desiredIncome: '',
   resumeCV: ''
  }

  const [ formState, setFormState ] = useState(formValues)
  

  return (
    <FormContext.Provider value={[formState, setFormState]}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/open-roles" element={<OpenRoles />} />
        <Route path="/application/*" element={<Application />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
      

      {/* <Test1 /> */}
    </FormContext.Provider>
  );
}
