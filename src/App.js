import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React from 'react';
import ListView from './components/ListView';
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.css';
import {  Route, Routes } from 'react-router-dom';
import { useState } from 'react';



function App() {
  
  
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/list/:playlistname" element={<ListView />} />
    </Routes>
  );
}


export default App;
