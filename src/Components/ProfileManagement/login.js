import React from 'react';

import './profileStyle.css';

const LogIn = () =>{
    return(
        <div className="login-form">
            
            <form >
            <h2 className="text-center">Log in</h2>       
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Username" required="required"></input>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password" required="required"></input>
                </div>
                <div class="form-group">
                <button type="submit" class="btn btn-primary btn-block">Log in</button>
                </div>
            </form>
        </div>
    );
}

export default LogIn;