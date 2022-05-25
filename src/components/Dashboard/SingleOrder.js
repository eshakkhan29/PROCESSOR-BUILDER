import React from 'react';

const SingleOrder = ({ order }) => {
    const { _id, location, displayName, email, phone, name, price, quantity } = order;
    return (
        <div className='col-12 shadow-sm rounded-3 p-3'>
            <div className=''>
                <div>
                    <h3 className='text-primary'>{name}</h3>
                    <div className='d-flex'>
                        <p className='me-4'>Quantity: <b>{quantity}</b></p>
                        <p>Price: <b>BDT {price}</b></p>
                    </div>
                    <h5 className=' text-uppercase text-secondary'>Shipping info</h5>
                    <div className='d-flex flex-column flex-lg-row'>
                        <div className='me-lg-4 shipping'>
                            <p>Client Email: <b>{email}</b></p>
                            <p>Shipping Address: <b>{location}</b></p>
                        </div>
                        <div>
                            <p>Client name: <b>{displayName}</b></p>
                            <p>Client Phone: <b>{phone}</b></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleOrder;