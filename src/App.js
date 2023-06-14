import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Routes} from "react-router-dom";
import './App.css';
import './app1.css'

import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About'
import Main from './Components/Main/Main';
import Testimonies from './Components/Testimonies/Testimonies'
import Footer from './Components/Footer/Footer';
import Experience from './Components/Experience/Experience';
import Account from './Components/ProfileManagement/account';
import Booked from './Components/ProfileManagement/bookhistory';
import Location from './Components/ProfileManagement/favoriteprof';

function App() {
  return (
    
      <div className="App">
        <Navbar/>
        <Home />
        
        <About/>
        <Main/>
        <Testimonies/>
        <Experience/>
        <Footer/>
        
      </div>
    
  );
}

export default App;
