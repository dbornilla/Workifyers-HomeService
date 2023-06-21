import React from 'react';

import './profileStyle.css';

const Register = () => {

    return(
        <div className="form-comp cfb">
            <h1>Create an Account</h1>
            <form className="sign-up-form cfb-Form">
                <label className='label-ac'>
                    Name:
                    <br/>
                <input />
                </label>
                <label className='label-ac'>
                    Email:
                    <br/>
                <input />
                </label>
                <label className='label-ac'>
                    Password:
                    <br/>
                <input />
                </label>
                    <br/>
                <button className='btn btn-primary'>
                    Sign Up!
                </button>
            </form>
        </div>
    );
}

export default Register;