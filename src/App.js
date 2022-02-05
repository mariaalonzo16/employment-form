import './App.css';
import { Home } from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import { OpenRoles } from './pages/OpenRoles';
import { Application } from './pages/Application';
import { Confirmation } from './pages/Confirmation';
import { Test1 } from './misc/Test1';


export const App = () => {

  const firstName = "Mark";
  const lastName = "Smith";
  const email = "mark.smith@gmail.com";
  const phoneNumber = "555-555-5555";
  const checkbox1 = "anesthesiology";
  const checkbox2 =  "Oncology";
  const checkbox3 = "Womens Health";
  const checkbox4 = "Pediatrics";
  const checkbox5 = "Dermatology";
  const radio = "radio value";
  const range = "range value";
  const fileInput = "file value";
  return (
    <>
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
              checkbox1={checkbox1}
              checkbox2={checkbox2}
              checkbox3={checkbox3}
              checkbox4={checkbox4}
              checkbox5={checkbox5}
              radio={radio}
              range={range}
              fileInput={fileInput}
            />}  
        />
      </Routes>

      {/* <Test1 /> */}
    </> 
  );
}
