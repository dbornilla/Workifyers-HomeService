import React from 'react';

import './profileStyle.css';

const Account = () => {
    return(
        <div className="container-acc">
            <div className="row gutters ">
                    <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 ">
                        <div className="card h-75">
                            <div className="card-body">
                                <div className="account-settings">
                                    <div className="user-profile">
                                        <div className="user-avatar">
                                            <div className='tempimg'>tt</div>
                                        </div>
                                        <h5 className="user-name">Mr. Bean</h5>
                                        <h6 className="user-email">bean@comedy.com</h6>
                                        <p> Phone Number </p>
                                        <p> Address </p>
                                    </div>
                                    <div className="about">
                                        
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                <div className="card h-75">
                    <div className="card-body">
                            <div className="row gutters ">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                    <h6 className="mb-2 text-primary">Personal Details</h6>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label for="fullName">Full Name</label>
                                        <input type="text" className="form-control" id="fullName" placeholder="Enter full name"></input>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label for="eMail">Email</label>
                                        <input type="email" className="form-control" id="eMail" placeholder="Enter email ID"></input>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label for="phone">Phone</label>
                                        <input type="text" className="form-control" id="phone" placeholder="Enter phone number"></input>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label for="website">Password</label>
                                        <input type="url" className="form-control" id="website" ></input>
                                    </div>
                                    <div className="form-group">
                                        <label for="website">Confirm Password</label>
                                        <input type="url" className="form-control" id="website" ></input>
                                    </div>
                                </div>
                            </div>
                            <div className="row gutters mid">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <h6 className="mt-3 mb-2 text-primary">Address</h6>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label for="Street">Street</label>
                                        <input type="name" className="form-control" id="Street" placeholder="Enter Street"></input>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label for="ciTy">City</label>
                                        <input type="name" className="form-control" id="ciTy" placeholder="Enter City"></input>
                                    </div>
                                </div>
                                
                            </div>

                            <div className="row gutters bot">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className="text-end ">
                                        <button type="button" id="submit" name="submit" className="btn btn-secondary btnm">Cancel</button>
                                        <button type="button" id="submit" name="submit" className="btn btn-primary btnm">Update</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;