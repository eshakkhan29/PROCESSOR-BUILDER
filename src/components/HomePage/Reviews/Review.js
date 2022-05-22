import React from 'react';

const Review = ({ review }) => {
    const { name, rating, body } = review;
    return (
        <div className='col-lg-4 col-12'>
            <div className="card border-0 bg-secondary text-white">
                <div className="card-body">
                    <p className='text-white'>{body}</p>
                    <p>Rating <b className='text-warning'>{rating} Starts</b></p>
                    <h className='card-title'>{name}</h>
                </div>
            </div>
        </div>
    );
};

export default Review;