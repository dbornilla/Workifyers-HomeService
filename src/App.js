import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import './app1.css'

import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About'
import Main from './Components/Main/Main';
import Testimonies from './Components/Testimonies/Testimonies'
import Footer from './Components/Footer/Footer';
import Experience from './Components/Experience/Experience';


import Form from './form.js';
import Account from './account.js';
import Favorite from './favoriteprof.js';
import Booked from './bookhistory.js';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Main/>
      <Testimonies/>
      <Experience/>
      <Footer/>
      <Booked />
    </div>
  );
}

export default App;
