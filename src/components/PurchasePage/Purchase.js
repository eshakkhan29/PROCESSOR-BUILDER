import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
// import { useParams } from 'react-router-dom';

const Purchase = () => {
    // const { id } = useParams();
    const [purchaseProduct, setPurchaseProduct] = useState([]);
    // const { name, minimumOrder, quantity, price } = purchaseProduct;
    console.log(purchaseProduct);

    useEffect(() => {
        fetch('parts.json')
            .then(res => res.json())
            .then(data => setPurchaseProduct(data))
    }, [])


    return (
        <div className='w-25'>
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
    );
};

export default Purchase;