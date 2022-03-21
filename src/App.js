import './App.scss';
import { Route, Routes } from 'react-router-dom';
import React, {  useState }from 'react';
import { FormContext } from './context/FormContext';
import { pageRoutes } from './routes/pageRoutes';




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
        {pageRoutes.map((route,index) => (
          <Route 
            key={index}
            path={route.path}
            element={route.element} 
          />
        ))}
      </Routes>
     
      {/* <Test1 /> */}
    </FormContext.Provider>
  );
}
