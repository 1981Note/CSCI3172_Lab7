import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import Form from "./components/Form/Form";
import Profile from "./components/Profile/Profile";
import Dashboard from "./components/Dashboard/Dashboard";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Form />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
    </Routes>
  )
}

export default App;
