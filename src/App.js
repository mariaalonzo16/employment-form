import './App.css';
import { Home } from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import { OpenRoles } from './pages/OpenRoles';




export const App = () => {
  return (
    <>
      <Home />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/open-roles" element={<OpenRoles />} />
      </Routes>
      
      {/* <Test1 /> */}
    </> 
  );
}
