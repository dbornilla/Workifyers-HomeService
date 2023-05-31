import React, {useEffect} from 'react'
import './testimonies.css'
import video from '../../Assets/videos/1.mp4'
import image5 from '../../Assets/images/5.jpg'
import {HiLocationMarker} from 'react-icons/hi'
import {AiFillFilter} from 'react-icons/ai'

import {FaFacebookF} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'

import {BsListUl} from 'react-icons/bs'
import {TbApps} from 'react-icons/tb'

import Aos, { init } from "aos"
import 'aos/dist/aos.css'

const Testimonies = () => {

    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])




    return (
        <section id='testimonies' className='testimonies'>
            <div className="overlay"></div>
            <img src={image5} type="image/jpg"></img>

            <div className="homeContent container section">
                <div className="textDiv">
                    
                    <h1 data-aos="fade-up" className="homeTitle">Satisfied Clients</h1>

                    <span data-aos="fade-up" className="smallText">Our utmost priority is to provide you with outstanding home services that exceed your expectations. Don't just take our word for it; here are some testimonials from our satisfied clients</span>
                
                </div>

                <div className="textDiv2">
                    
                    <div className='review'>
                        <span data-aos="fade-up" className="smallText">I was amazed by the professionalism and expertise of the Workifyers team. I highly recommend Workifyers to anyone seeking reliable home services.</span>
                        <h1 data-aos="fade-up" className="homeTitle">Sarah W.</h1>
                    </div>

                    <div className='review'>
                        <span data-aos="fade-up" className="smallText">Workifyers has been my go-to service for various home projects. I appreciate their attention to detail and dedication to customer satisfaction. Workifyers is simply the best!</span>
                        <h1 data-aos="fade-up" className="homeTitle">John P.</h1>
                    </div>

                    <div className='review'>
                        <span data-aos="fade-up" className="smallText">I recently used Workifyers for a home renovation project, and I couldn't be happier with the outcome. Workifyers made the entire process seamless and stress-free. I won't hesitate to hire them again.</span>
                        <h1 data-aos="fade-up" className="homeTitle">Elizabeth S.</h1>
                    </div>

                    


                </div>
            </div>

        </section>
    )
}

export default Testimonies