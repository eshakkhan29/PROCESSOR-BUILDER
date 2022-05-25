import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Order = ({ order, setRefetch, refetch }) => {
    const { _id, location, displayName, email, phone, name, price, quantity } = order;
    const navigate = useNavigate();

    const handelCancel = () => {
        fetch(`http://localhost:5000/orders/${_id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    setRefetch(!refetch)
                    toast.error('Your order is canceled')
                }
            })
    }

    return (
        <div className='col-12 shadow-sm rounded-3 p-3'>
            <div className='d-flex justify-content-between align-items-center'>
                <div>
                    <h3 className='text-primary'>{name}</h3>
                    <div className='d-flex'>
                        <p className='me-4'>Quantity: <b>{quantity}</b></p>
                        <p>Price: <b>BDT {price}</b></p>
                    </div>
                    <h5 className=' text-uppercase text-secondary'>Shipping info</h5>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <p>Client Email: <b>{email}</b></p>
                            <p>Shipping Address: <b>{location}</b></p>
                        </div>
                        <div>
                            <p>Client name: <b>{displayName}</b></p>
                            <p>Client Phone: <b>{phone}</b></p>
                        </div>
                    </div>
                </div>
                <div>
                    <button onClick={handelCancel} className='btn btn-danger me-3'>cancel Order</button>
                    <button onClick={() => navigate(`/dashboard/payment/${_id}`)} className='btn btn-success'>pay</button>
                </div>
            </div>
        </div>
    );
};

export default Order;