import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Menu from './Menu/Menu';
import Hero from './hero/hero';
import Homepage from './Homepage/homepage';
import Footer from './Footer/footer';
import Aboutpage from './Aboutpage/Aboutpage';
import loginpage from './loginpage/loginpage';

function App() {
  return (
    <Router>
      <Menu />
      <Hero />
      <div className='mainContainer'>
        <Routes>
          <Route path='/about' element={<Aboutpage />} />
          <Route path='/login' element={<loginpage />} />
          <Route path='/' element={<Homepage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;