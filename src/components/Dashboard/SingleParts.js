import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';

const SingleParts = ({ parts, i, refetch, setRefetch }) => {
    const [show, setShow] = useState(false);
    const { _id } = parts;



    const handelDelete = (_id) => {
        const handleClose = () => setShow(false);

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
        handleClose();
    }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <tr>
                <td>{i + 1}</td>
                <td>{parts?.name}</td>
                <td>{parts?.price}</td>
                <td>{parts?.quantity}</td>
                <td>
                    <div className='d-flex justify-content-around align-items-center'>
                        <button onClick={handleShow} className=' btn btn-sm btn-danger'>Delete</button>
                    </div>
                </td>
            </tr>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you confirm to delete this product?</Modal.Title>
                </Modal.Header>
                <Modal.Footer className='justify-content-center'>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={() => handelDelete(_id)}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default SingleParts;