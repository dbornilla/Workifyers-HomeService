import React, {useState} from 'react';

import './profileStyle.css';
import Register from './register.js';
import Login from './login.js';


const Form = () => {
    const [welcome, setWelcome] = useState(false)

    const setBannerClass = () => {
        const classArr = ["banner-side cfb-Form"]
        if (welcome) classArr.push('send-right')
        return classArr.join(' ')
    }

    const setFormClass = () => {
        const classArr = ["form-side cfb-Form"] 
        if (welcome) classArr.push('send-left')
        return classArr.join(' ')
    }
    return(

        <div className="Container-Form cfb-Form">

            <div className={setBannerClass()}> 

                {welcome ? 
                <h2>Hello, New Workifyer</h2>
                    : <h2>Welcome Back</h2>}

                <button onClick={()=> setWelcome(!welcome)} className='btn btn-primary'>
                {welcome ?
                    "Sign In"
                    : "Create Account"}
                </button>
            </div>

            <div className={setFormClass()}> 
                {welcome ? 
                    <Register /> 
                    : <Login/>
                }
                
            </div>

        </div>
    );
}

export default Form;