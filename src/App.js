import './App.scss';
import { Route, Routes } from 'react-router-dom';
import React, {  useState, useEffect, useRef }from 'react';
import { FormContext } from './context/FormContext';
import { pageRoutes } from './routes/pageRoutes';
// import Lottie from 'lottie-web';



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

  // const container = useRef(null)

  // useEffect(() => {
  //   Lottie.loadAnimation({
  //     container: container.current,
  //     renderer: 'svg',
  //     loop:true,
  //     autoplay: true,
  //     animationData: require('./lotties/heartBeat.json')
  //   })
  // }, [])
  

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

      {/* <div className='container' ref={container}></div> */}
     
      {/* <Test1 /> */}
    </FormContext.Provider>
  );
}
