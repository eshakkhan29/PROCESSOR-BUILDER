import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading/Loading';
import SingleOrder from './SingleOrder';

const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
        fetch("https://desolate-sands-37810.herokuapp.com/allorders")
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [])

    if (allOrders <= 0) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='my-3'>Manage All <span className='text-success'> Orders</span></h1>
            <div className='row'>
                {
                    allOrders.map(order => <SingleOrder key={order._id} order={order}></SingleOrder>)
                }
            </div>
        </div>
    );
};

export default ManageAllOrders;