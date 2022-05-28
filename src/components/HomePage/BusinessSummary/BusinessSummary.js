import React from 'react';
import chipset from '../../../image/chipsetMaking.png';
import './BusinessSummary.css';
import { FaFlag, FaUserClock, FaStreetView, FaIndustry } from "react-icons/fa";
import CountUp from 'react-countup';

const BusinessSummary = () => {
    return (
        <section className=' mt-5 pt-5'>
            <div className='about-section'>
                <div className="container">
                    <div className='d-flex py-5 justify-content-between align-items-center flex-lg-row flex-column-reverse'>
                        <div>
                            <img className='img-fluid rounded-3' src={chipset} alt="" />
                        </div>
                        <div className='ms-3 mb-3 mb-lg-0'>
                            <h1 className='my-4'>About Our <span className='text-primary'>Company</span></h1>
                            <p>Intel Corporation announced plans to further reduce its direct and indirect greenhouse gas emissions and develop more sustainable technology solutions. The company pledged to achieve net-zero greenhouse gas emissions in its global operations by 2040, to increase the energy efficiency and lower the carbon footprint of Intel products and platforms with specific goals, and to work with customers and industry partners to create solutions that lower the greenhouse gas footprint of the entire technology ecosystem.</p>
                            <button className='btn btn-primary'>Know More About</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='counter-section'>
                <div className='container'>
                    <div className=' py-5'>
                        <div className='d-flex py-5 flex-lg-row flex-column align-items-center justify-content-between text-center'>
                            <div className='my-3 my-lg-0'>
                                <h1 className='text-white'><FaFlag /></h1>
                                <h1 className='text-white'><CountUp
                                    end={192}
                                    duration={3}
                                />
                                </h1>
                                <h3 className='text-white'>Country</h3>
                            </div>
                            <div className='my-3 my-lg-0'>
                                <h1 className='text-white'><FaUserClock /></h1>
                                <h1 className='text-white'>
                                    <CountUp
                                        end={1250}
                                        duration={3}
                                    />+</h1>
                                <h3 className='text-white'>Happy Client</h3>
                            </div>
                            <div className='my-3 my-lg-0'>
                                <h1 className='text-white'><FaStreetView /></h1>
                                <h1 className='text-white'><CountUp
                                    end={980}
                                    duration={3}
                                />+</h1>
                                <h3 className='text-white'>Client Reviews</h3>
                            </div>
                            <div className='my-3 my-lg-0'>
                                <h1 className='text-white'><FaIndustry /></h1>
                                <h1 className='text-white'><CountUp
                                    end={68}
                                    duration={3}
                                /></h1>
                                <h3 className='text-white'>Branch</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessSummary;