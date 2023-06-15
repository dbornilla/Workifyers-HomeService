import React from 'react'
import './experience.css'

import image6 from '../../../Assets/images/6.jpg'
import image7 from '../../../Assets/images/7.jpg'

const Experience = () => {
  return (
    <section id='testimonies' className='experience'>

    <div className="homeContent container section">
        <div className="textDiv">
            
            <h1 data-aos="fade-up" className="homeTitle">Experience <span className='emphasis'>top-notch</span> home services with Workifyers' <span className='emphasis'>skilled and vetted professionals.</span> Your home deserves the <span className='emphasis'>best!</span></h1>

            {/* <span data-aos="fade-up" className="smallText">Our utmost priority is to provide you with outstanding home services that exceed your expectations. Don't just take our word for it; here are some testimonials from our satisfied clients</span> */}
        
        </div>

        <div className="textDiv2">
            
            <div className='imageblock1'>
                <img src={image6} alt="" />
            </div>

            <div className='imageblock2'>
                <img src={image7} alt="" />
            </div>


            


        </div>
    </div>

</section>
  )
}

export default Experience