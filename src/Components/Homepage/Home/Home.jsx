import React, {useEffect} from 'react'
import './home.css'
import video from '../../../Assets/videos/1.mp4'
import image1 from '../../../Assets/images/1.jpg'
import {HiLocationMarker} from 'react-icons/hi'
import {AiFillFilter} from 'react-icons/ai'

import {FaFacebookF} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'

import {BsListUl} from 'react-icons/bs'
import {TbApps} from 'react-icons/tb'

import Aos, { init } from "aos"
import 'aos/dist/aos.css'

const Home = () => {

    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])




    return (
        <section id="home" className='home'>
            <div className="overlay"></div>
            <img src={image1} type="image/jpg"></img>

            <div className="homeContent container">
                <div className="textDiv">
                    
                    <span data-aos="fade-up" className="smallText">Our Services</span>
                    
                    <h1 data-aos="fade-up" className="homeTitle">Search your Service</h1>
                
                </div>

                
                <div data-aos="fade-up" className="cardDiv grid">
                <div className="destinationInput">
                        <label htmlFor="city">Enter your location:</label>
                        <div className="input flex">
                            <input type="text" placeholder='Enter location here...' />
                            <HiLocationMarker className="icon"/>
                        </div>
                    </div>


                    <div className="dateInput">
                        <label htmlFor="date">Select date:</label>
                        <div className="input flex">
                            <input type="date"/>
                        </div>
                    </div>

                    <div className="priceInput">
                        <div className="label_total flex">
                            <label htmlFor="price">Max price: </label>
                            <h3 className="total"> P20,000</h3>
                        </div>
                        <div className="input flex">
                            <input type="range" max="5000" min="1000" />
                        </div>
                    </div>

                    <div className="searchOptions flex">
                        <AiFillFilter className="icon"/>
                        <span>More Filters</span>
                    </div>

                </div>


                <div data-aos="fade-up" className="homeFooterIcons flex">
                    <div className="rightIcons">
                        <FaFacebookF className="icon" />
                        <FaTwitter className="icon" />
                        <FaInstagram className="icon" />
                    </div>

                    <div className="leftIcons">
                        <BsListUl className="icon" />
                        <TbApps className="icon" />
                        

                    </div>
                </div>


            </div>

        </section>
    )
}

export default Home