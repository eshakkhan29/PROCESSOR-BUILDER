import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className='container my-5'>
            <h1 className='text-center text-primary my-4'>Reviews</h1>
            <div className='row g-2'>
                {
                    reviews.map((review, index) => <Review key={index} review={review} ></Review>)
                }
            </div>
        </section>
    );
};

export default Reviews;