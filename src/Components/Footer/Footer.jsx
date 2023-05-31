import React, {useEffect} from 'react'
import './footer.css'
import video2 from "../../Assets/videos/2.mp4"
import image2 from "../../Assets/images/2.jpeg"
import {FiSend} from "react-icons/fi"
import {GrUserWorker} from "react-icons/gr"

import {FaFacebookF} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'

import {FiChevronRight} from 'react-icons/fi'

import Aos, { init } from "aos"
import 'aos/dist/aos.css'

const Footer = () => {

    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])


    return (
        <section id='contact' className="footer">
            <div className="videoDiv">
                <img src={image2} type="image/jpeg"></img>
            </div>


            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos="fade-up" className="text">
                        <small>GET IN TOUCH</small>
                        <h2>Book with us</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input type="text" data-aos="fade-up" name="" id="" placeholder='Enter Email Address'/>
                        <button data-aos="fade-up" className="btn flex" type='submit'>
                            SEND <FiSend className="icon" />
                        </button>
                    </div>
                </div>


                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className='logo flex'>
                            <GrUserWorker className="icon"/> Workifyers
                            </a>
                        </div>

                        <div data-aos="fade-up" className="footerParagraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas natus dolor veritatis. Nesciunt earum consequatur praesentium perferendis! Similique iure cupiditate blanditiis. Minima nulla veniam ipsum?
                        </div>

                        <div data-aos="fade-up" className="footerSocials flex">
                            <FaFacebookF className="icon" />
                            <FaTwitter className="icon" />
                            <FaInstagram className="icon" />
                        </div>
                    </div>

                    <div className="footerLinks grid">
                        <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                            <span className="groupTitle">
                                Workifyers Details
                            </span>

                            <li className="footerList flex bold">
                                {/* <FiChevronRight className="icon" /> */}
                                Mailing Address
                                
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                123 Anywhere St., Any City, State, Country 12345
                            </li>

                            <li className="footerList flex bold">
                                {/* <FiChevronRight className="icon" /> */}
                                Email Address
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                workifyers@gmail.com
                            </li>

                            <li className="footerList flex bold">
                                {/* <FiChevronRight className="icon" /> */}
                                Phone Number
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                (123) 456 7890 
                            </li>
                        </div>
                    </div>

                    


                    <div className="footerDiv flex">
                        <small>FourPoint.Zero, Inc.</small>
                        <small>Copyrights reserved - 2023   </small>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default Footer