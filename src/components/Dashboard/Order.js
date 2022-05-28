import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { GiCancel } from "react-icons/gi";
import { BsFillCreditCard2BackFill } from "react-icons/bs";


const Order = ({ order, setRefetch, refetch }) => {
    const { _id, location, displayName, email, phone, name, price, quantity } = order;
    const navigate = useNavigate();
    const [show, setShow] = useState(false);


    const handelCancel = () => {
        const handleClose = () => setShow(false);
        fetch(`https://desolate-sands-37810.herokuapp.com/orders/${_id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    setRefetch(!refetch)
                    toast.error('Your order is canceled')
                }
            })
        handleClose();
    }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='col-12 shadow-sm rounded-3 p-3'>
            <div className='d-flex justify-content-between align-items-center'>
                <div>
                    <h3 className='text-primary'>{name}</h3>
                    <div className='d-flex'>
                        <p className='me-4'>Quantity: <b>{quantity}</b></p>
                        <p>Price: <b>BDT {price}</b></p>
                    </div>
                    <h5 className=' text-uppercase text-secondary'>Shipping info</h5>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <p>Client Email: <b>{email}</b></p>
                            <p>Shipping Address: <b>{location}</b></p>
                        </div>
                        <div>
                            <p>Client name: <b>{displayName}</b></p>
                            <p>Client Phone: <b>{phone}</b></p>
                        </div>
                    </div>
                </div>
                <div>
                    <button onClick={handleShow} className='btn btn-danger me-3'><GiCancel className='me-2' /> cancel Order</button>
                    <button onClick={() => navigate(`/dashboard/payment/${_id}`)} className='btn btn-success'><BsFillCreditCard2BackFill className='me-2'/> pay</button>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure to cancel this order?</Modal.Title>
                </Modal.Header>
                <Modal.Footer className='justify-content-center'>
                    <Button variant="secondary" onClick={handleClose}>
                        no
                    </Button>
                    <Button variant="danger" onClick={() => handelCancel(_id)}>
                        yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Order;