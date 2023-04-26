import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './screens/Login';
import Register from './screens/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signUp' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
