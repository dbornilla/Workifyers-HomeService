import React from 'react';

import './App.css';

const Register = () => {

    return(
        <div className="form-comp cfb">
            <h1>Create an Account!</h1>
            <form className="sign-up-form cfb">
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
                <button>
                    Sign Up!
                </button>
            </form>
        </div>
    );
}

export default Register;