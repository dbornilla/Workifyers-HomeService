import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Routes, BrowserRouter} from "react-router-dom";
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
import Pages from './Components/Pages/pages';
import Form from './Components/ProfileManagement/form';

import HouseCleaning from './Components/Main/Details/HouseCleaningDetails/HouseCleaning';
import Plumbing from './Components/Main/Details/PlumbingDetails/Plumbing';
import Carpentry from './Components/Main/Details/CarpentryDetails/Carpentry';
import AirconCleaning from './Components/Main/Details/AirconCleaningDetails/AirconCleaning';
import Electrical from './Components/Main/Details/ElectricalDetails/Electrical';
import HousePainting from './Components/Main/Details/HousePaintingDetails/HousePainting';

function App() {
  return (
    
      <div className="App">
        
        
        <Navbar/>
        
        <Routes>
          <Route path='/' element={ < Pages />} />
          <Route index element={ <Pages />} />


          <Route path='account' element={ < Account />} />
          <Route path='book' element={ < Booked />} />
          <Route path='location' element={ < Location />} />
        </Routes>

        
        <Footer/>
        
        
      </div>
    
  );
}

export default App;
