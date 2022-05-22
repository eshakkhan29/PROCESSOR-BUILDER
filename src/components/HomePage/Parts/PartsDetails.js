import React from 'react';

const PartsDetails = ({ parts }) => {
    const { name, img, description, minimumOrder, quantity, price } = parts;
    return (
        <div className='col-lg-4 col-12'>
            <div className='card'>
                <img src={img} alt="" />
                <div className="card-body">
                    <h4 className='card-title'>{name}</h4>
                    <h6>Price <span>${price}</span></h6>
                    <p className='card-text'>{description}</p>
                    <div className='d-flex justify-content-between'>
                    <p>Quantity: <span>{quantity}</span></p>
                    <p>minimum order: <span>{minimumOrder}</span></p>
                    </div>
                </div>
                <button className='btn btn-success'>Order Now</button>
            </div>
        </div>
    );
};

export default PartsDetails;