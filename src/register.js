import React from "react";
import './register.css';


    
const RegisterForm = () => {
    
    

    return(
        <div className="container">
            <div className="form-card">
                <div className="form-control signup">
                    <form action="#">
                        <h2>Sign up</h2>
                        <input type="text" placeholder="Username" required />
                        <input type="email" placeholder="Email" required />
                        <input type="password" placeholder="Password" required />
                        <input type="password" placeholder="Confirm password" required />

                        <button>Signup</button>
                    </form>
                    <span>or signup with</span>
                    <div class="socials">
                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-google-plus-g"></i>
                        <i class="fab fa-linkedin-in"></i>
                    </div>
                </div>
                <div class="form-control signin">
                    <form action="#">
                        <h2>Log in</h2>
                        <input type="text" placeholder="Username" required />
                        <input type="password" placeholder="Password" required />
                        <button>Signin</button>
                    </form>
                    <span>or signin with</span>
                    <div class="socials">
                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-google-plus-g"></i>
                        <i class="fab fa-linkedin-in"></i>
                    </div>
                </div>
            </div>
            <div class="intros-container">
                <div class="intro-control signin-intro">
                    <div class="intro-control__inner">
                        <h2>Workifyers</h2>
                        <p>
                        Welcome back! We are so happy to have serve you here. It's great to see you again. We hope to find you the best professional to handle your preferred home service.
                        </p>
                        <button id="signup-btn">No account yet? Signup.</button>
                    </div>
                </div>
                <div class="intro-control signup-intro">
                    <div class="intro-control__inner">
                        <h2>Come join us!</h2>
                        <p>
                        We are so excited to have you here.If you haven't already, create an account to get access to exclusive offers, rewards, and discounts.
                        </p>
                        <button id="signin-btn">Already have an account? Signin.</button>
                    </div>
                </div>
            </div>
        </div>
        
        
    )
}

export default RegisterForm