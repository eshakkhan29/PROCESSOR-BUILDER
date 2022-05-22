import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Purchase = () => {
    const [user] = useAuthState(auth);
    const [show, setShow] = useState(false);
    const { id } = useParams();
    const [purchaseProduct, setPurchaseProduct] = useState([]);
    // const { name, minimumOrder, quantity, price } = purchaseProduct;
    console.log(purchaseProduct);

    useEffect(() => {
        fetch('parts.json')
            .then(res => res.json())
            .then(data => setPurchaseProduct(data))
    }, [])


    return (
        <section className='container my-5'>
            <div className='d-flex justify-content-between'>
                <div className='w-100'>
                    <button onClick={() => setShow(true)} className='btn btn-primary'>Show Details</button>
                    {show &&
                        <>
                        <h4>name: {user?.displayName}</h4>
                        <h3>Email: {user?.email}</h3>
                        </>
                    }

                </div>
                <div className='w-100'>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control min={50} max={100} type="number" placeholder="Quantity" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Parts name</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="text" placeholder="price" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="number" placeholder="Phone number" />
                        </Form.Group>

                        <Button variant="primary" value='Order' type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </section>
    );
};

export default Purchase;