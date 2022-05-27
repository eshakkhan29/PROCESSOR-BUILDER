import React from 'react';
import { toast } from 'react-toastify';

const SingleParts = ({ parts, i, refetch, setRefetch }) => {
    const handelDelete = () => {
        fetch(`https://desolate-sands-37810.herokuapp.com/delete-parts/${parts?._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    toast.error('product delete success');
                    setRefetch(!refetch);
                }
            })
    }
    return (
        <tr>
            <td>{i + 1}</td>
            <td>{parts?.name}</td>
            <td>{parts?.price}</td>
            <td>{parts?.quantity}</td>
            <td>
                <div className='d-flex justify-content-around align-items-center'>
                    <button onClick={handelDelete} className=' btn btn-sm btn-danger'>Delete</button>
                </div>
            </td>
        </tr>
    );
};

export default SingleParts;