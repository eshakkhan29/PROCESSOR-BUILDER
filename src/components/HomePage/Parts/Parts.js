import React, { useEffect, useState } from 'react';
import PartsDetails from './PartsDetails';

const Parts = () => {
    const [parts, setParst] = useState([]);
    useEffect(() => {
        fetch('parts.json')
            .then(res => res.json())
            .then(data => setParst(data))
    }, [])
    return (
        <section className='my-5 container'>
            <h1 className='text-center text-primary my-4'>Our Products</h1>
            <div className="row g-3">
                {
                    parts.map((p, index) => <PartsDetails key={index} parts={p}></PartsDetails>)
                }
            </div>
        </section>
    );
};

export default Parts;