import React from 'react';
import './Banner.css';
import banner from '../../../image/Banner.jpg';

const Banner = () => {
    return (
        <section className='mb-5 py-5 banner-section'>
            <div className="container">
                <div className='d-flex align-items-center justify-content-between px-lg-5 flex-lg-row flex-column'>
                    <div className='p-3'>
                        <h1 className='heading-title text-primary'>Intel Core Processor Family, Processor Builder</h1>
                        <p>Intel's highest performing CPUs for laptop and desktop PCs here in the Intel® Core™ Series. From the top-end Intel® Core™ i9 processors to our value-packed Intel® Core™ i3 processors, business and creative professionals, gamers of all levels, and others can find an Intel® Core™ processor that lets them do more.</p>
                        <button className='btn btn-success'>Explore  Now</button>
                    </div>
                    <div>
                        <img className=' img-fluid banner p-3' src={banner} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;