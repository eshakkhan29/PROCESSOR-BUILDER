import React from 'react';
import banner from '../../../image/Banner.jpg';

const Banner = () => {
    return (
        <section className='my-5'>
            <div className='d-flex align-items-center justify-content-between px-lg-5 flex-lg-row flex-column'>
                <div className='p-3'>
                    <h1 style={{fontSize:"70px"}} className='text-primary'>Intel Core Processor Family Processor, Builder</h1>
                    <p>Intel's highest performing CPUs for laptop and desktop PCs here in the Intel® Core™ Series. From the top-end Intel® Core™ i9 processors to our value-packed Intel® Core™ i3 processors, business and creative professionals, gamers of all levels, and others can find an Intel® Core™ processor that lets them do more.</p>
                    <button className='btn btn-success'>Explore  Now</button>
                </div>
                <div>
                    <img className=' img-fluid rounded-3 p-3' src={banner} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Banner;