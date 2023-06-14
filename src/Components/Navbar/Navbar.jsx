import React, {useState} from 'react'
import './navbar.css'
import {GrUserWorker} from 'react-icons/gr'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import icon from '../../images/bean.jpg'
import { Link } from 'react-router-dom'




const Navbar = () => {

    const [active, setActive] = useState('navBar')

    // Pang toggle ng navbar
    const showNav = () => {
        setActive('navBar activeNavbar')
    }

    // Pang close ng navbar
    const removeNavbar = () => {
        setActive('navBar')
    }

    // For toggle of profile menu
    const subMenu = document.getElementById("subMenu");

    function toggleMenu(){
        subMenu.classList.toggle("open-menu");
    }

    return (
        <section className='navBarSection'>
            <header className="header flex">

                <div className="logoDiv">
                    <a href="#" className="logo flex">
                        <h1> <GrUserWorker className="icon"/>Workifyers</h1>
                    </a>
                </div>

                <div className={active}>
                    <ul className="navLists flex">

                        <li className="navItem">
                            <a href="#" className="navLink">Home</a>
                        </li>

                        <li className="navItem">
                            <a href="#about" className="navLink">About</a>
                        </li>

                        <li className="navItem">
                            <a href="#services" className="navLink">Services</a>
                        </li>

                        <li className="navItem">
                            <a href="#testimonies" className="navLink">Testimonies</a>
                        </li>

                        <li className="navItem">
                            <a href="#contact" className="navLink">Contact</a>
                        </li>

                        <button className="btn">
                            <a href="#" className="navLink">Book Now</a>
                        </button>

                    
                        <img src={icon} className='profile-icon' onClick={toggleMenu}></img>
                        <div className='sub-wrap open-menu' id='subMenu'>
                            <div className='sub-menu'>
                                
                                    
                                
                                <div className='profile-info'>
                                    <h3> Mr. Bean </h3>
                                </div>
                                <hr></hr>
                                
                                <Link to="/account" className='sub-link'>
                                    <p>Account Management</p>
                                </Link>
                                <Link to="/book" className='sub-link'>
                                    <p>Book History</p>
                                </Link>
                                <Link to="location" className='sub-link'>
                                    <p>Favorite Professionals</p>
                                </Link>
                            </div>
                        </div>

                    </ul>

                    <div onClick={removeNavbar} className="closeNavbar">
                        <AiFillCloseCircle className="icon"/>
                    </div>
                </div>

                <div onClick={showNav} className="toggleNavbar">
                    <TbGridDots className="icon"/>
                </div>
            </header>
        </section>
    )
}

export default Navbar