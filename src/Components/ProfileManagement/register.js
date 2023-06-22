import React from 'react';

import './profileStyle.css';

const Register = () => {

    return(
        <div className="signup-form">
            
            <form className="sign-up-form cfb" >

            

            <h2>Sign Up</h2>
		
		<hr></hr>
        <div className="form-group">
			<div className="row">
				<div className="col"><input type="text" className="form-control" name="first_name" placeholder="First Name" required="required"></input></div>
				<div className="col"><input type="text" className="form-control" name="last_name" placeholder="Last Name" required="required"></input></div>
			</div>        	
        </div>
        <div className="form-group">
        	<input type="email" className="form-control" name="email" placeholder="Email" required="required"></input>
        </div>
		<div className="form-group">
            <input type="password" className="form-control" name="password" placeholder="Password" required="required"></input>
        </div>
		<div className="form-group">
            <input type="password" className="form-control" name="confirm_password" placeholder="Confirm Password" required="required"></input>
        </div>        
        
       
		<div class="form-group"></div>

        <div class="form-group">
            <button type="submit" class="btn btn-primary btn-lg">Sign Up</button>
        </div>
    
            </form>
        </div>
    );
}

export default Register;