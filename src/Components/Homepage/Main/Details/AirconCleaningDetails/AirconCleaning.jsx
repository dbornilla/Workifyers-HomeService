import React from 'react'
import './airconcleaning.css'
import airconcleaning  from '../../../../../Assets/images/airconcleaning.jpg'
import process1 from '../../../../../Assets/images/processes1.jpg'
import process2 from '../../../../../Assets/images/processes2.jpg'
import process3 from '../../../../../Assets/images/processes3.jpg'

const AirconCleaning = () => {
  return (
    <div className='airconcleaningdetails'>
      <img src={airconcleaning} className="banner"/>

      <div className='heading'>
        <h1 className='detailsTitle'>Aircon Cleaning</h1>
        <p className="detailsDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia vitae quam repellat? Quam libero cupiditate magnam commodi corrupti, sit totam. Quaerat tempore ducimus quas voluptatem consequatur laboriosam reiciendis fugiat earum nesciunt unde quisquam fugit ipsum esse, blanditiis aut ex! Vero saepe reiciendis deleniti voluptas quam. Excepturi amet tempora officiis ducimus eaque esse ratione aliquam reiciendis eos ab, sed saepe, ad expedita et nam aspernatur laboriosam quisquam veritatis. Repellat laborum facilis voluptatem laudantium incidunt voluptas nobis nam cum et ipsam consectetur delectus quis, eos esse ullam debitis veritatis, in dicta possimus ea. Corporis hic eius alias, architecto est exercitationem animi nemo.</p>
        </div>

      <hr />

      <div className="process">
        <h1 className="processTitle">Our Processes</h1>
        <p className="processDesc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed natus eius tenetur temporibus molestiae veniam explicabo obcaecati, eligendi provident repudiandae blanditiis nemo facere ratione et fuga voluptatibus iste ut minima ex, dolorem nisi architecto vero nostrum? Optio ipsa ad nostrum voluptates delectus! Unde quis laudantium laboriosam doloremque vel dolorem enim cum sequi dolor, labore voluptatem, numquam adipisci illum debitis. Tempora unde repellat earum modi illo quo provident fugit commodi, sequi sed perferendis beatae cumque reiciendis esse sit. Nihil, natus quibusdam!</p>
      

      <div className="processNums">

        <ul>


        <li className='processblock'>
          <img src={process1} alt="" className='processImg'/>

          <div className="process1">
          <h1 className="process1Num">1</h1>
          <h2 className="process1Title">Booking</h2>
          <p className="process1Desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, molestiae perspiciatis odit impedit vel, commodi optio nam sint nemo libero, in voluptas neque magni tempore voluptatum rem fuga ex culpa velit! Corrupti velit ipsa minima voluptate voluptates nihil aut rerum? Dolorum tempora ratione labore eligendi. Esse aspernatur molestias ullam maxime?</p>
        </div>

        </li>

        <li className='processblock'>
          <div className="process1">
            <h1 className="process1Num">2</h1>
            <h2 className="process1Title">Contact</h2>
            <p className="process1Desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, molestiae perspiciatis odit impedit vel, commodi optio nam sint nemo libero, in voluptas neque magni tempore voluptatum rem fuga ex culpa velit! Corrupti velit ipsa minima voluptate voluptates nihil aut rerum? Dolorum tempora ratione labore eligendi. Esse aspernatur molestias ullam maxime?</p>
          </div>

          <img src={process2} alt="" className='processImg'/>

        </li>

        <li className='processblock'>
          <img src={process3} alt="" className='processImg'/>
        <div className="process1">
          <h1 className="process1Num">3</h1>
          <h2 className="process1Title">Fix!</h2>
          <p className="process1Desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, molestiae perspiciatis odit impedit vel, commodi optio nam sint nemo libero, in voluptas neque magni tempore voluptatum rem fuga ex culpa velit! Corrupti velit ipsa minima voluptate voluptates nihil aut rerum? Dolorum tempora ratione labore eligendi. Esse aspernatur molestias ullam maxime?</p>
        </div>

        </li>

        </ul>


        </div>  

      </div>

      <div className="btn">
        <a href='/'>Book Now!</a>
      </div>

    </div>
  )
}

export default AirconCleaning