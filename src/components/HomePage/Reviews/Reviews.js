import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://desolate-sands-37810.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className='banner-section py-5 my-5'>
            <div className="container">
            <h1 className='text-center text-primary my-4'>Reviews</h1>
            <div className='row g-4'>
                {
                    reviews.map((review, index) => <Review key={index} review={review} ></Review>)
                }
            </div>
            </div>
        </section>
    );
};

export default Reviews;