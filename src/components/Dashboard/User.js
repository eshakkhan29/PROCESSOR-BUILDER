import React from 'react';
import { toast } from 'react-toastify';

const User = ({ user, index }) => {
    const { email, displayName } = user;

    const makeAdmin = () => {
        const role = 'admin';
        const userData = { email, role };

        fetch("http://localhost:5000/users", {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    toast.success(`${displayName} make as a admin`)
                }
            })
    }
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{user?.displayName}</td>
            <td>{user?.email}</td>
            <td>
                {user?.role === "admin" ?
                    <p className='text-center'>Already Admin</p>
                    :
                    <div className='d-flex justify-content-around align-items-center'>
                        <button onClick={makeAdmin} className=' btn btn-sm btn-primary'>make admin</button>
                    </div>
                }
            </td>
            <td className='text-center'>{user?.role}</td>
        </tr>
    );
};

export default User;