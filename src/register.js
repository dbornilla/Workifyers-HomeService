import React from "react";
import './register.css';

const RegisterForm = () => {
    return(
        <div className="card">
            <h1> Login </h1>
            <div className="row">
                <label>Email</label>
                <input type="text" placeholder="email" />
            </div>
            <div className="row">
            <label>Password</label>
            <input type="password" placeholder="password" />
            </div>
        </div>
    )
}

export default RegisterForm