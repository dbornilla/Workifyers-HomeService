import React from 'react'
import '../../App.css'
import { Element, scoller } from 'react-scroll';

import Home from './Home/Home';
import About from './About/About';
import Main from './Main/Main';
import Testimonies from './Testimonies/Testimonies';
import Experience from './Experience/Experience'
import Footer from './Footer/Footer'

function Homepage() { 
  
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (


    <div className='App'>

      <section id='home' className='section'>
        <Home/>
      </section>

      <section id='about' className='section'>
        <About/> 
      </section>

      <section id='main' className='section'>
        <Main/>
      </section>

      <section id='testimonies' className='section'>
        <Testimonies/>
      </section>

      <section id='experience' className='section'>
        <Experience/>
      </section>

      <section id='contact' className='section'>
        <Footer/>
      </section>
       

    </div>
  )
}

export default Homepage