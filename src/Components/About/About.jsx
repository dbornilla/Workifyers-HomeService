import React, {useEffect} from 'react'
import './about.css'

import Aos, { init } from "aos"
import 'aos/dist/aos.css'

import image3 from '../../Assets/images/3.jpg'

const About = () => {

    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])

    return (    
        <section id='about' className="about container section">

            <div data-aos="fade-right" className="aboutImage">
                <img src={image3} alt="" />
            </div>

            <div data-aos="fade-up" className="secContent">
                <div className="aboutHeading">
                    <h1 className="aboutTitle">About Workifyers</h1>
                </div>

                <div className="aboutDescription">
                    <p className="aboutDesc">At Workifyiers, we understand the challenges and time constraints that come with maintaining a home and ensuring all your household needs are met. That's why we've developed a cutting-edge home service application that connects you with skilled professionals in various fields, making your life easier and more convenient.</p>
                    <p className="aboutDesc">Whether you need assistance with plumbing, electrical work, cleaning, or any other home service, Workifyiers is here to help. Our platform brings together a network of verified and highly experienced service providers, ensuring top-quality workmanship and reliable solutions for your home. </p>
                </div>
                
            </div>

        </section>
    )
}

export default About