import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import SingleParts from './SingleParts';

const ManageProduct = () => {
    const [parts, setParts] = useState([]);
    const [refetch, setRefetch] = useState(false);
    useEffect(() => {
        fetch('https://desolate-sands-37810.herokuapp.com/parts')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [refetch])
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
                        parts.map((parts, i) => <SingleParts i={i} refetch={refetch} setRefetch={setRefetch} key={parts._id} parts={parts}></SingleParts>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ManageProduct;