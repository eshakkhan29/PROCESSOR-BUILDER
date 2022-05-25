import React from 'react';
import './Parts.css';
import { useNavigate } from 'react-router-dom';

const PartsDetails = ({ parts }) => {
    const { _id, name, img, description, minimumOrder, quantity, price } = parts;
    const navigate = useNavigate();
    return (
        <div className='col-lg-4 col-12'>
            <div className='card border-bottom-0 parts-info'>
                <img src={img} alt="" />
                <div className="card-body">
                    <h4 className='card-title'>{name}</h4>
                    <h6 className='text-secondary'>Price: <b>BDT {price}</b></h6>
                    <p className='card-text'>{description}</p>
                    <div className='d-flex justify-content-between'>
                        <p>Quantity: <span>{quantity}</span></p>
                        <p>minimum order: <span>{minimumOrder}</span></p>
                    </div>
                </div>
                <button onClick={() => navigate(`/purchase/${_id}`)} className='btn btn-success position-absolute bottom-0 start-50 translate-middle-x w-100'>Purchase</button>
            </div>
        </div>
    );
};

export default PartsDetails;