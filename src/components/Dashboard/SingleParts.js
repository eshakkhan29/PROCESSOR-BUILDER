import React from 'react';

const SingleParts = ({ parts, i }) => {
    return (
        <tr>
            <td>{i + 1}</td>
            <td>{parts?.name}</td>
            <td>{parts?.price}</td>
            <td>{parts?.quantity}</td>
            <td>
                <div className='d-flex justify-content-around align-items-center'>
                    <button className=' btn btn-sm btn-danger'>Delete</button>
                </div>
            </td>
        </tr>
    );
};

export default SingleParts;