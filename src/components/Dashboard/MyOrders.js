import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Order from './Order';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const email = user?.email;
    const [orders, setOrders] = useState([]);
    const [refetch, setRefetch] = useState(false);
    useEffect(() => {
        fetch(`https://desolate-sands-37810.herokuapp.com/orders?email=${email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [email, refetch])
    return (
        <div>
            <h2 className='my-4'>Your Order <span className='text-success'>Summary</span></h2>
            <div className='row g-4'>
                {
                    orders.map(order => <Order key={order._id} refetch={refetch} setRefetch={setRefetch} order={order}></Order>)
                }
            </div>
        </div>
    );
};

export default MyOrders;