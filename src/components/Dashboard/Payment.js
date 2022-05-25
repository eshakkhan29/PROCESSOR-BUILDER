import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L2zHwKjJ1qOO6tSCp5TfmI060jDlMnSwjMVNX9Tg4XYIA2e1b7EUYZ231XPCjc4g9BgJkaP0oZxorbMqfsfN5Q100p2FKufwb');

const Payment = () => {
    const { id } = useParams();
    const [paymentOrder, setPaymentOrder] = useState({});
    const { name, quantity, price } = paymentOrder;
    const url = `http://localhost:5000/orders/${id}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPaymentOrder(data))
    }, [url])
    return (
        <div className='d-flex flex-column payment-div p-3'>
            <div className=' shadow p-4 rounded-3 my-5'>
                <h4 className='text-success'>Payment for <p className='text-primary'>{name}</p></h4>
                <p>Quantity: {quantity}</p>
                <p>Price: <b>BTD {price}</b></p>
            </div>
            <div className='shadow rounded-3 my-3 p-4'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm paymentOrder={paymentOrder} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;