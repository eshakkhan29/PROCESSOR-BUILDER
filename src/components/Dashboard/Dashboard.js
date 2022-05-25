import React from 'react';
import './dashboard.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useProfileInfo from '../hook/useProfileInfo';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [userInfo] = useProfileInfo(user?.email)

    return (
        <section className='container my-5'>
            <h1 className='text-primary text-center'>Dashboard</h1>
            <div className='d-flex flex-lg-row flex-column justify-content-between'>
                <div className='dashboard-navigation shadow-sm mb-3 mb-lg-0 p-3'>
                    <p><Link to={'/dashboard/profile'}> My Profile</Link></p>
                    {!userInfo.role &&
                        <>
                            <p><Link to={'/dashboard'}> My Orders </Link></p>
                            <p><Link to={'/dashboard/addreview'}> Add A Review </Link></p>
                        </>
                    }
                    {userInfo.role === "admin" &&
                        <>
                            <p><Link to={'/dashboard/manageallorders'}>Manage All Orders</Link></p>
                            <p><Link to={'/dashboard/addproduct'}>Add Product</Link></p>
                            <p><Link to={'/dashboard/manageproduct'}>Mange Product</Link></p>
                            <p><Link to={'/dashboard/makeadmin'}>Make Admin</Link></p>
                        </>
                    }
                </div>
                <div className='dashboard-content'>
                    <Outlet></Outlet>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;