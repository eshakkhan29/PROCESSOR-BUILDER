import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useProfileInfo from '../hook/useProfileInfo';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [userInfo] = useProfileInfo(user?.email)
    console.log(userInfo);
    return (
        <section className='container my-5'>
            <h1 className='text-primary text-center'>Dashboard</h1>
            <div className='d-flex flex-lg-row flex-column justify-content-between'>
                <div className='dashboard-navigation p-3'>
                    <p><Link to={'/dashboard'}> My Orders </Link></p>
                    <p><Link to={'/dashboard/addreview'}> Add A Review </Link></p>
                    <p><Link to={'/dashboard/profile'}> My Profile</Link></p>
                    <p><Link to={'/dashboard/manageallorders'}>Manage All Orders</Link></p>
                    <p><Link to={'/dashboard/addproduct'}>Add Product</Link></p>
                    <p><Link to={'/dashboard/manageproduct'}>Mange Product</Link></p>
                </div>
                <div className='w-75'>
                    <Outlet></Outlet>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;