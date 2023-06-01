import React, {useEffect} from 'react'
import './main.css'
import {MdOutlineHomeWork} from "react-icons/md"
import {HiOutlineClipboardCheck} from "react-icons/hi"

import image4 from '../../Assets/images/4.jpg'

import job1 from '../../Assets/images/job1.jpg'
import job2 from '../../Assets/images/job2.jpg'
import job3 from '../../Assets/images/job3.jpg'
import job4 from '../../Assets/images/job4.jpg'
import job5 from '../../Assets/images/job5.jpg'
import job6 from '../../Assets/images/job6.jpg'

import Aos, { init } from "aos"
import 'aos/dist/aos.css'

const Data = [
    {
        id: 1,
        imgSrc: job1,
        jobTitle: 'House Cleaning',
        grade: 'Cleaning',
        fees: 'P3,000',
        description: 'Involves the meticulous and systematic removal of dirt, dust, and clutter from a living space to create a clean and organized environment.',
    },

    {
        id: 2,
        imgSrc: job2,
        jobTitle: 'Plumbing',
        grade: 'Fixing',
        fees: 'P5,000',
        description: 'installing, repairing, and maintaining pipes, fixtures, and other plumbing systems',
    },

    {
        id: 3,
        imgSrc: job3,
        jobTitle: 'Carpentry',
        grade: 'Building',
        fees: 'P2,000',
        description: 'Working with wood to construct, repair, or install various structures and objects',
    },

    {
        id: 4,
        imgSrc: job4,
        jobTitle: 'Aircon Cleaning',
        grade: 'Cleaning',
        fees: 'P5,000',
        description: 'Ensures optimal performance, energy efficiency, and clean air circulation in air conditioning systems',
    },

    {
        id: 5,
        imgSrc: job5,
        jobTitle: 'Electrical',
        grade: 'Fixing',
        fees: 'P10,000',
        description: 'Provision of safe and reliable electricity supply, installation, maintenance, and repair',
    },

    {
        id: 6,
        imgSrc: job6,
        jobTitle: 'House Painting',
        grade: 'Painting',
        fees: 'P3,000',
        description: 'Applying paint or other finishes to the interior or exterior surfaces of a house',
    },
]




const Main = () => {

    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])

    return (
        <section className="mainn">
            {/* <div className="overlay"></div>
                <img src={image4} type="image/jpg"></img> */}


            <div id='services' className="main container section">
            


            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">Available Services</h3>
            </div>

            <div className="secContent grid">


                {
                    Data.map(({id, imgSrc, jobTitle, grade, fees, description})=>{
                        return (
                            <div key={id} data-aos="fade-up" className="singleJob">
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={jobTitle} />
                                </div>

                                <div className="cardInfo">
                                    <h4 className="jobTitle">{jobTitle}</h4>
                                    <span className="work flex">
                                        <MdOutlineHomeWork className="icon"/>
                                        <span className='name'>Home Service</span>
                                    </span>
                                    
                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>


                                    <button className="btn flex">
                                        DETAILS <HiOutlineClipboardCheck className="icon"/>
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }


            </div>

            
        </div>
        </section>
        
    )
}

export default Main