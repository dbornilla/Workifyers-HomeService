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
                    <p className="aboutDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda ducimus minima voluptatibus odio sed. Aliquid inventore maiores nihil laboriosam voluptas facilis velit at magnam modi, dolorum perspiciatis amet tenetur officiis vitae, laudantium nobis delectus ratione. Iure molestiae placeat maiores! Est ducimus ipsum iure! Rerum nemo porro vero adipisci molestias maxime! Sapiente similique, aspernatur eligendi assumenda, voluptates error repudiandae veritatis fugiat, modi maxime cupiditate placeat dolore quidem doloremque blanditiis consequatur accusantium odit nemo nam. Amet at autem velit accusamus repellat provident, doloribus et dolorum, culpa blanditiis quae commodi animi consequuntur laboriosam eius, suscipit nulla illum? Iure cumque atque dolore dicta libero.</p>
                </div>
                
            </div>

        </section>
    )
}

export default About