import React, { useEffect, useState } from 'react';
import PartsDetails from './PartsDetails';

const Parts = () => {
    const [parts, setParts] = useState([]);
    useEffect(() => {
        fetch('https://desolate-sands-37810.herokuapp.com/parts')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return (
        <section className='my-5 container'>
            <h1 className='text-center text-primary my-4'>Our Products</h1>
            <div className="row g-3">
                {
                    [...parts].reverse().map((p, index) => <PartsDetails key={index} parts={p}></PartsDetails>)
                }
            </div>
        </section>
    );
};

export default Parts;