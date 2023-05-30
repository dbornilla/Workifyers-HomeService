import React from 'react';

import './App.css';

const Booked = () => {
    return (
        <div class="container-xl">
            <div class="table-responsive">
                <div class="table-wrapper">
                    <div class="table-title">
                        <div class="row">
                            <div class="col-sm-5">
                                <h2>Bookings</h2>
                            </div>
                            
                        </div>
                    </div>
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>	
                                <th>Service</th>					
                                <th>Date of Service</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td><a href="#">Michael Holz</a></td>
                                <td>Electrician</td>
                                <td>04/10/2013</td>                        
                                
                                <td>
                                   
                                <button type="button" class="btn-close" aria-label="Close"></button>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td><a href="#"> Paula Wilson</a></td>
                                
                                <td>Home Cleaning</td>
                                <td>04/10/2013</td>                       
                                
                                <td>
                                    
                                <button type="button" class="btn-close" aria-label="Close"></button>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td><a href="#"> Antonio Moreno</a></td>
                                <td>Plumbing</td>
                                <td>11/05/2015</td>
                                                       
                                <td>
                                    
                                <button type="button" class="btn-close" aria-label="Close"></button>
                                </td>                        
                            </tr>
                            <tr>
                                <td>4</td>
                                <td><a href="#"> Mary Saveley</a></td>
                                <td>Home Cleaning</td>
                                <td>06/09/2016</td>
                                
                                <td>
                                    
                                <button type="button" class="btn-close" aria-label="Close"></button>
                                </td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td><a href="#"> Martin Sommer</a></td>
                                <td>Aircon Cleaning</td>
                                <td>12/08/2017</td>                        
                                
                                <td>
                                    
                                <button type="button" class="btn-close" aria-label="Close"></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="clearfix">
                        <div class="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
                        <ul class="pagination">
                            <li class="page-item disabled"><a href="#">Previous</a></li>
                            <li class="page-item"><a href="#" class="page-link">1</a></li>
                            <li class="page-item"><a href="#" class="page-link">2</a></li>
                            <li class="page-item active"><a href="#" class="page-link">3</a></li>
                            <li class="page-item"><a href="#" class="page-link">4</a></li>
                            <li class="page-item"><a href="#" class="page-link">5</a></li>
                            <li class="page-item"><a href="#" class="page-link">Next</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>   
    );
}
export default Booked;