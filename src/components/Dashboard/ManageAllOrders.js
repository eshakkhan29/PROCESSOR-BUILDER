import React, { useEffect, useState } from 'react';
import SingleOrder from './SingleOrder';

const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
        fetch("https://desolate-sands-37810.herokuapp.com/allorders")
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [])
    return (
        <div>
            <h1>Manage all orders</h1>
            <div className='row'>
                {
                    allOrders.map(order=><SingleOrder key={order._id} order={order}></SingleOrder>)
                }
            </div>
        </div>
    );
};

export default ManageAllOrders;