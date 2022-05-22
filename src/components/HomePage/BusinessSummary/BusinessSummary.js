import React from 'react';
import chicest from '../../../image/chipsetMaking.png';

const BusinessSummary = () => {
    return (
        <section className='container my-5'>
            <div className='d-flex flex-lg-row flex-column'>
                <div>
                    <img className='img-fluid' src={chicest} alt="" />
                </div>
                <div className='ms-3'>
                    <h1 className='text-primary my-4'>About Our Company</h1>
                    <p>Intel Corporation announced plans to further reduce its direct and indirect greenhouse gas emissions and develop more sustainable technology solutions. The company pledged to achieve net-zero greenhouse gas emissions in its global operations by 2040, to increase the energy efficiency and lower the carbon footprint of Intel products and platforms with specific goals, and to work with customers and industry partners to create solutions that lower the greenhouse gas footprint of the entire technology ecosystem.</p>
                    <div className='d-flex align-items-center justify-content-between text-center'>
                        <div>
                            <h1>57</h1>
                            <h3>Country</h3>
                        </div>
                        <div>
                            <h1>360 +</h1>
                            <h3>Happy Client</h3>
                        </div>
                        <div>
                            <h1>590 +</h1>
                            <h3>Client Reviews</h3>
                        </div>
                        <div>
                            <h1>8</h1>
                            <h3>Branch</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessSummary;