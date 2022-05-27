import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-6 col-4">
                        <ul>
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/blogs'}>Blog</Link></li>
                            <li><Link to={'/about'}>About</Link></li>
                            <li><Link to={'product'}>Product</Link></li>
                        </ul>
                    </div>

                    <div className="col-md-4 col-sm-6 col-8">
                        <ul>
                            <li><Link to={'#'}>Terms & Conditions</Link></li>
                            <li><Link to={'#'}>Privacy Policy</Link></li>
                            <li><Link to={'#'}>Shipping Policy</Link></li>
                            <li>Contact: <a href={'mailto:admin@amin.com'}>admin@amin.com</a></li>
                        </ul>
                    </div>

                    <div className="col-md-4 col-sm-6 d-flex align-items-center mb-3 mb-md-0">
                        <img className='img-fluid' src="https://ucarecdn.com/99436260-98a0-4163-8404-444cd93d9185/-/format/auto/-/preview/480x480/-/quality/lighter/payments.png" alt="" />
                    </div>

                </div>
            </div>
            <div>
                <p className='text-center pt-2 text-secondary'> &copy; All Right reserved from || PROCESSOR BUILDER {new Date().getUTCFullYear()}</p>
            </div>
        </footer>
    );
};

export default Footer;