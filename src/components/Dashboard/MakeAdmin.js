import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import User from './User';

const MakeAdmin = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allusers')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <div>
            <h1>make admin</h1>
            <Table striped responsive bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>User Name</th>
                        <th>User Email</th>
                        <th>Action | Role</th>
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