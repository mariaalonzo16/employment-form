import './App.css';
import { Home } from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import { OpenRoles } from './pages/OpenRoles';
import { Survey } from './pages/Survey';
import { Confirmation } from './pages/Confirmation';




export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/open-roles" element={<OpenRoles />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
      
      {/* <Test1 /> */}
    </> 
  );
}
