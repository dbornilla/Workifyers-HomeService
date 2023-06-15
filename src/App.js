import React from 'react';
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import './app1.css';

import Navbar from './Components/Navbar/Navbar';

import Homepage from './Components/Homepage/Homepage';
import HouseCleaning from './Components/Homepage/Main/Details/HouseCleaningDetails/HouseCleaning';
import Plumbing from './Components/Homepage/Main/Details/PlumbingDetails/Plumbing';
import Carpentry from './Components/Homepage/Main/Details/CarpentryDetails/Carpentry';
import AirconCleaning from './Components/Homepage/Main/Details/AirconCleaningDetails/AirconCleaning';
import Electrical from './Components/Homepage/Main/Details/ElectricalDetails/Electrical';
import HousePainting from './Components/Homepage/Main/Details/HousePaintingDetails/HousePainting';

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<Navbar/>}>
      <Route index element={<Homepage/>}/>  
      <Route path='/housecleaning-details' element={<HouseCleaning/>}/>
      <Route path='/plumbing-details' element={<Plumbing/>}/>
      <Route path='/carpentry-details' element={<Carpentry/>}/>
      <Route path='/airconcleaning-details' element={<AirconCleaning/>}/>
      <Route path='/electrical-details' element={<Electrical/>}/>
      <Route path='/housepainting-details' element={<HousePainting/>}/>
    </Route>

    
  )
)

function App() {
  return (
    
    <RouterProvider router={router}/>
    
  );
}

export default App;
