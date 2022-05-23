import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Purchase = () => {
    const [user] = useAuthState(auth);
    const [show, setShow] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0)
    const [error, setError] = useState('');
    const { id } = useParams();
    const [purchaseProduct, setPurchaseProduct] = useState([]);
    const { displayName, email } = user;
    const { name, minimumOrder, quantity, price } = purchaseProduct;


    const handelQuantity = event => {
        const min = parseFloat(minimumOrder)
        const max = parseFloat(quantity)
        const p = parseFloat(price)
        const orderQuantity = parseFloat(event.target.value);
        if (orderQuantity < min) {
            setError("you must be set order quantity more then minimum order quantity ");
        }
        else if (orderQuantity > max) {
            setError("you can not order more then in stoke quantity");
            setTotalPrice(0);
        }
        else {
            const totalPrice = p * orderQuantity;
            setTotalPrice(totalPrice);
            setError("");
        }
    }

    useEffect(() => {
        fetch(`http://localhost:5000/purchase/${id}`,)
            .then(res => res.json())
            .then(data => setPurchaseProduct(data))
    }, [id]);

    const handelSubmit = event => {
        event.preventDefault();
        const quantity = event.target.quantity.value;
        const parts = event.target.name.value;
        const price = event.target.price.value;
        const address = event.target.address.value;
        const mobile = event.target.number.value;
        const orderData = { displayName, email, quantity, parts, price, address, mobile, };

        fetch("http://localhost:5000/orders", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(orderData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    toast.success('your order successfully added')
                }
                console.log(data)
            })
            event.target.reset();

    }


    return (
        <section className='container my-5'>
            <div className='d-flex justify-content-between'>
                <div className='w-100'>
                    <button onClick={() => setShow(true)} className='btn btn-primary my-3'>Show Details</button>
                    {show &&
                        <>
                            <h4>name: {displayName}</h4>
                            <h3>Email: {email}</h3>
                        </>
                    }
                    <div>
                        <h3 className='text-primary'>{name}</h3>
                        <p>per unit price: <b>BDT {price}</b>
                        </p>
                        <p>in Stoke: <b>{quantity}</b></p>
                        <p>Minimum order Quantity: <b>{minimumOrder}</b></p>
                    </div>

                </div>
                <div className='w-100'>
                    <Form onSubmit={handelSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control onChange={handelQuantity} name='quantity' type="text" placeholder="Quantity" />
                            {
                                error && <p className='text-danger'>{error}</p>
                            }
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Parts name</Form.Label>
                            <Form.Control readOnly name='name' value={name} type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Total price</Form.Label>
                            <Form.Control readOnly name='price' value={totalPrice} type="text" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Address</Form.Label>
                            <Form.Control required name='address' type="text" placeholder="your Address" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control required name='number' type="number" placeholder="Phone number" />
                        </Form.Group>

                        <Button variant="primary" value='Order' type="submit">
                            SET ORDER
                        </Button>
                    </Form>
                </div>
            </div>
        </section>
    );
};

export default Purchase;