import React from 'react';
import Header from './components/Home/header';
import Entry from './Entry';
import Signup from './Routes/signup'
import Login from './Routes/login';
import UPage from './Routes/UPage';

import { Routes,Route } from 'react-router-dom';
// import Routeing from './Routeing'
// import { Link } from 'react-router-dom';


import './App.css';

function App() {
  return (

    <div className='w-full bg-gray-50'>
      <Header />

      <Routes>
        <Route path="/" element={<Entry/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='*'  element={<UPage/>}/>
      </Routes>
    
    
      
    </div>
  )
}
export default App;
