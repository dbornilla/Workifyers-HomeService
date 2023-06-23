import React,{useState} from 'react';
import { Modal,Button } from 'react-bootstrap';
import './profileStyle.css';


const Register = () => {

    const [show,setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
        
       
		<div class="form-group">
        <input type="checkbox" required="required"></input> <label>I accept the</label> <label className='terms' onClick={handleShow}>Terms and Conditions</label>
        </div>
        
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            
            </Modal.Footer>
        </Modal>

        <div class="form-group">
            <button type="submit" class="btn btn-primary btn-lg" >Sign Up</button>
        </div>
    
            </form>
        </div>
    );
}

export default Register;