import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './pages/Product';
import Room from './pages/Room';
import Aboutus from './pages/About';
import Course from './Course';
import Home from './pages/Home';
import Cart from './Cart';
import Contact from './pages/Contact';
import Section4 from './Section4/Section4';
class App extends Component {
  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<Section4 />} />
            <Route path='product' element={<Product />} />
            <Route path='Room' element={<Room />} />
            <Route path='Aboutus' element={<Aboutus />} />
            <Route path='Contactus' element={<Contact />} />
            <Route path='Course' element={<Course />} />
            <Route path='Cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;