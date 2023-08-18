

import './App.css';
import MyHeader from './Header';
import Home from './Home';
import Contact from './Contact';
import Goals from './Goals';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


 
function App() {

  return (
    <Router>
<div className='App'>
      <MyHeader/>
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Goals" element={<Goals />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>
</div> 
</Router>
  );
}


export default App;






