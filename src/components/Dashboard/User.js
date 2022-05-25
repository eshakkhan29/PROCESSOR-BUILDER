import React from 'react';

const User = ({ user, index }) => {
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{user?.displayName}</td>
            <td>{user?.email}</td>
            <td>
                <div className='d-flex justify-content-around align-items-center'>
                    <button className=' btn btn-sm btn-primary'>make admin</button>
                    <b>Clint</b>
                </div>
            </td>
        </tr>
    );
};

export default User;