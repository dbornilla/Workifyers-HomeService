import React, {useState} from 'react'
import './navbar.css'
import {GrUserWorker} from 'react-icons/gr'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'

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