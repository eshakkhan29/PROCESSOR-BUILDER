import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Loading from '../Shared/Loading/Loading';
import User from './User';

const MakeAdmin = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://desolate-sands-37810.herokuapp.com/allusers')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    if (users <= 0) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='my-3'>Make <span className='text-success'>Admin</span></h1>
            <Table striped responsive bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>User Name</th>
                        <th>User Email</th>
                        <th>Action</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <User index={index} key={user._id} user={user}></User>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default MakeAdmin;