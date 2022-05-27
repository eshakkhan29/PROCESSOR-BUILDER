import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useProfileInfo from '../hook/useProfileInfo';

const Purchase = () => {
    const [user] = useAuthState(auth);
    const [show, setShow] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0)
    const [error, setError] = useState('');
    const { id } = useParams();
    const [purchaseProduct, setPurchaseProduct] = useState([]);
    const { displayName, email } = user;
    const [userInfo] = useProfileInfo(email);
    const { location, phone, fblink, linkedin } = userInfo;
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
        fetch(`https://desolate-sands-37810.herokuapp.com/purchase/${id}`,)
            .then(res => res.json())
            .then(data => setPurchaseProduct(data))
    }, [id]);

    const handelSubmit = event => {
        event.preventDefault();
        const quantity = event.target.quantity.value;
        const price = event.target.price.value;
        const orderData = { displayName, email, quantity, name, price, location, phone, };
        console.log(orderData);

        fetch("https://desolate-sands-37810.herokuapp.com/orders", {
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
                    <button onClick={() => setShow(true)} className='btn btn-primary my-3'>Show Client Details</button>
                    {show &&
                        <>
                            <h2 className='text-success'>Client Information</h2>
                            <p>{displayName}</p>
                            <p>Email: {email}</p>
                            <p>Location: {location}</p>
                            <p>Phone: {phone}</p>
                            <p>Facebook Link: {fblink}</p>
                            <p>linkedin Link: {linkedin}</p>
                        </>
                    }
                    <div>
                        <h2 className='text-success'>Parts Information</h2>
                        <h4 className='text-primary'>{name}</h4>
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
                            <Form.Label>Total price</Form.Label>
                            <Form.Control readOnly name='price' value={totalPrice} type="text" />
                        </Form.Group>

                        <Button disabled={error} variant="primary" value='Order' type="submit">
                            CONFIRM ORDER
                        </Button>
                    </Form>
                </div>
            </div>
        </section>
    );
};

export default Purchase;