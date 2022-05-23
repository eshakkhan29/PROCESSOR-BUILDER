import React from 'react';

const Review = ({ review }) => {
    const { name, rating, body } = review;
    return (
        <div className='col-lg-4 col-12'>
            <div className="card border-0 shadow">
                <div className="card-body">
                    <p className=' text-secondary'>{body}</p>
                    <p>Rating <b className='text-warning'>{rating} Starts</b></p>
                    <h4 className='card-title'>{name}</h4>
                </div>
            </div>
        </div>
    );
};

export default Review;