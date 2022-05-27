import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddAReview = () => {
    const [user] = useAuthState(auth);
    const addReview = event => {
        event.preventDefault();
        const name = user?.displayName;
        const body = event.target.review.value;
        const rating = event.target.rating.value;
        const reviewData = { name, body, rating }
        console.log(reviewData);
        fetch('https://desolate-sands-37810.herokuapp.com/review', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => console.log(data))
        event.target.reset();
    }
    return (
        <div>
            <h1 className=' text-success'>Add a Review</h1>
            <div>
                <Form onSubmit={addReview}>
                    <Form.Group className="mb-3" >
                        <Form.Label>Your Review</Form.Label>
                        <Form.Control name='review' as='textarea' type="text" placeholder="say something about this company" />

                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Rating</Form.Label>
                        <Form.Control name='rating' type="number" placeholder="rating" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Add review
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default AddAReview;