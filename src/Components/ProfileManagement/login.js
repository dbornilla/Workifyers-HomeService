import React from 'react';

import './profileStyle.css';

const LogIn = () =>{
    return(
        <div className="form-comp cfb-Form">
            <h1>Sign In!</h1>
            <form className="sign-up-form cfb">
                <label>
                    Email:
                    <br/>
                <input />
                </label>
                <label>
                    Password:
                    <br/>
                <input />
                </label>
                    <br/>
                <button className='btn btn-primary'>
                    Sign In!
                </button>
            </form>
        </div>
    );
}

export default LogIn;