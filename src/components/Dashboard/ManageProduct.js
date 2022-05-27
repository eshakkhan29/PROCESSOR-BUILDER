import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import SingleParts from './SingleParts';

const ManageProduct = () => {
    const [parts, setParts] = useState([]);
    useEffect(() => {
        fetch('https://desolate-sands-37810.herokuapp.com/parts')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return (
        <div>
            <h1>ManageProduct</h1>
            <Table striped responsive bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Parts Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        parts.map((parts, i) => <SingleParts i={i} key={parts._id} parts={parts}></SingleParts>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ManageProduct;