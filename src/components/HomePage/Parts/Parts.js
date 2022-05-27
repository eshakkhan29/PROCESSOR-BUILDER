import React, { useEffect, useState } from 'react';
import PartsDetails from './PartsDetails';

const Parts = () => {
    const [parts, setParts] = useState([]);
    const reversArr = [...parts].reverse();
    const newParts = reversArr.slice(0, 6);
    useEffect(() => {
        fetch('https://desolate-sands-37810.herokuapp.com/parts')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return (
        <section className='my-5 container'>
            <h1 className='text-center my-4'>Our <span className='text-primary'>Products</span></h1>
            <div className="row g-3">
                {
                    newParts.map((p, index) => <PartsDetails key={index} parts={p}></PartsDetails>)
                }
            </div>
        </section>
    );
};

export default Parts;