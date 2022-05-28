import axios from 'axios';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { MdAdd } from "react-icons/md";

import auth from '../../firebase.init';

const AddProduct = () => {
    const [user] = useAuthState(auth);
    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const minimumorderRef = useRef('');
    const priceRef = useRef('');
    const quantityRef = useRef('');
    const imgUlrRef = useRef('');

    const handelAddProduct = async event => {
        event.preventDefault();
        const email = user?.email;
        const name = nameRef.current.value;
        const description = descriptionRef.current.value;
        const minimumOrder = minimumorderRef.current.value;
        const price = priceRef.current.value;
        const quantity = quantityRef.current.value;
        const img = imgUlrRef.current.value;
        const product = { name, img, description, minimumOrder, quantity, price };

        await axios.post('https://desolate-sands-37810.herokuapp.com/addproduct', product)
            .then(function (response) {
                if (response.data.acknowledged === true) {
                    toast.success('Your product added successfully')
                    event.target.reset();
                }
            })
            .catch(error => {
                toast.error('something went wrong', error?.massage)
            });
    }
    return (
        <div>
            <h2 className='my-3'>Add New <span className='text-success'>Product</span></h2>
            <div className='addProduct mx-auto'>
                <Form onSubmit={handelAddProduct}>
                    <Form.Group className="mb-3" >
                        <Form.Label>Name</Form.Label>
                        <Form.Control required ref={nameRef} type="text" placeholder="Product name" />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Image url</Form.Label>
                        <Form.Control required ref={imgUlrRef} type="text" placeholder="Image ulr" />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" required ref={descriptionRef} type="text" placeholder="Product Description" />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Minimum order quantity</Form.Label>
                        <Form.Control required ref={minimumorderRef} type="number" placeholder="Minimum order quantity" />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Product Quantity</Form.Label>
                        <Form.Control required ref={quantityRef} type="number" placeholder="Quantity" />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Product Price</Form.Label>
                        <Form.Control required ref={priceRef} type="number" placeholder="Price" />
                    </Form.Group>

                    <Button className='w-100' variant="primary" type="submit">
                        <MdAdd className='me-2'/> Add
                    </Button>

                </Form>
            </div>
        </div>
    );
};

export default AddProduct;